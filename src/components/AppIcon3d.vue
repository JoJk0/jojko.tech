<template>
  <canvas ref="canvasEl" class="icon-canvas" :style="{width, height}" />
</template>

<script lang="ts" setup>
import { AmbientLight, ExtrudeGeometry, Group, HemisphereLight, Mesh, PerspectiveCamera, PointLight, ReinhardToneMapping, Scene, SpotLight, Vector3, WebGLRenderer } from 'three'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { getClayMaterial } from '~/composables/useLogo'

const props = defineProps({
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '100%',
  },
  icon: {
    type: String,
    required: true,
  },
})

// const emit = defineEmits({});
const canvasEl = ref<HTMLCanvasElement>()
const scene = new Scene()

const center = new Vector3(0, 0, 0)

const processSVG = (iconSvgData: string) => {
  const removeAttributes = ['aria-hidden', 'role', 'preserveAspectRatio']
  const addAttributes = { width: 20, height: 20 }

  const proc = removeAttributes.reduce((acc, attr) => {
    return acc.replace(new RegExp(`${attr}="[^"]*"`, 'g'), '')
  }, iconSvgData)

  const addProc = Object.entries(addAttributes).reduce((acc, [key, value]) => {
    return acc.replace(new RegExp(`${key}="[^"]*"`, 'g'), `${key}="${value}"`)
  }, proc)

  const viewBoxRegex = /viewBox="([^"]*)"/
  const viewBoxSearch = (proc.match(viewBoxRegex))
  if (!viewBoxSearch)
    throw new Error('No viewBox found')

  const viewBox = viewBoxSearch[1].split(' ').map(v => parseInt(v, 10))
  const centeredViewBox = [-20, -20, 20, 20]

  const normalWidth = centeredViewBox[2] - centeredViewBox[0]
  const normalHeight = centeredViewBox[3] - centeredViewBox[1]

  const width = viewBox[2] - viewBox[0]
  const height = viewBox[3] - viewBox[1]

  const scale = Math.min(normalWidth / width, normalHeight / height)

  // const centeredViewBox = [
  //   viewBox[0] + (viewBox[2] - viewBox[0]) / 2,
  //   viewBox[1] + (viewBox[3] - viewBox[1]) / 2,
  //   viewBox[2] - viewBox[0],
  //   viewBox[3] - viewBox[1],
  // ]

  // const centeredSvg = proc.replace(viewBoxRegex, `viewBox="${centeredViewBox[0]} ${centeredViewBox[1]} ${centeredViewBox[2]} ${centeredViewBox[3]}"`)

  return { centeredSvg: addProc, viewBox, scale }
  // const proc = removeTags.reduce((acc, tag) => {
  //   return acc.replace(new RegExp(tag, 'g'), '')
  // }, iconSvgData)
  // console.log(proc)
  // return proc
}

const loadSVG = () => {
  const loader = new SVGLoader()

  const { centeredSvg, viewBox, scale } = processSVG(props.icon)
  const svgData = loader.parse(centeredSvg)
  const svgGroup = new Group()

  // Loop through all of the parsed paths
  svgData.paths.forEach((path, i) => {
    const shapes = path.toShapes(true, false)

    const material = getClayMaterial(path.color)
    // Each path has array of shapes
    shapes.forEach((shape, j) => {
    // Finally we can take each shape and extrude it
      const geometry = new ExtrudeGeometry(shape, {
        depth: 1 / scale,
        steps: 50 * (1 / scale),
        bevelEnabled: true,
        bevelSegments: 40 * (1 / scale),
        bevelSize: 1 / scale,
        bevelOffset: -0.5 * (1 / scale),
        bevelThickness: 3 * (1 / scale),
      })
      geometry.translate(0, 0, -i * (1 / scale) * 0.1)

      // Create a mesh and add it to the group
      const mesh = new Mesh(geometry, material)

      svgGroup.add(mesh)
    })
  })

  svgGroup.rotation.set(Math.PI, Math.PI, 0)
  svgGroup.scale.setScalar(scale)
  svgGroup.position.set((viewBox[0] * scale + viewBox[2] * scale) / 2, (viewBox[1] * scale + viewBox[3] * scale) / 2, 0)
  // Add our group to the scene (you'll need to create a scene)
  return svgGroup
}

onMounted(() => {
  if (!canvasEl.value) return

  const width = canvasEl.value.clientWidth
  const height = canvasEl.value.clientHeight

  const camera = new PerspectiveCamera(75, width / height, 1, 10000)
  const renderer = new WebGLRenderer({ canvas: canvasEl.value, antialias: true, powerPreference: 'high-performance', alpha: true })
  renderer.setSize(width, height, false)
  // renderer.physicallyCorrectLights = true
  // scene.background = new Color(0xFFFFFF)
  renderer.setClearColor(0x000000, 0)

  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.toneMapping = ReinhardToneMapping
  renderer.shadowMap.enabled = true

  camera.position.set(-10, -10, -35)
  scene.add(camera)

  // addHelpers(scene)

  scene.add(new AmbientLight(0x404040))

  const hemiLight = new HemisphereLight(0xFFEEB1, 0x080820, 4)
  scene.add(hemiLight)

  const light = new SpotLight(0xFFA95C, 10)
  light.position.set(-50, 100, -50)
  light.castShadow = true
  light.shadow.bias = -0.0001
  light.shadow.mapSize.width = 1024 * 4
  light.shadow.mapSize.height = 1024 * 4
  light.shadow.radius = 30
  scene.add(light)

  const pointLight2 = new PointLight(0x0000FF, 2)
  pointLight2.position.set(100, 70, -10)

  const pointLight3 = new PointLight(0x880099, 2)
  pointLight3.position.set(0, 100, -10)

  light.lookAt(center)
  pointLight2.lookAt(center)
  // pointLight3.lookAt(logo.points.secondaryDot);
  scene.add(light)
  scene.add(pointLight2)
  scene.add(pointLight3)

  const controls = new OrbitControls(camera, canvasEl.value)
  controls.minDistance = 20
  controls.maxDistance = 200

  const svgGroup = loadSVG()
  scene.add(svgGroup)

  renderer.setAnimationLoop((_) => {
    renderer.render(scene, camera)
  })
})

</script>

<style lang="scss" scoped>

</style>
