<template>
  <img v-if="srcSvg" :src="srcSvg">
  <canvas ref="canvasEl" class="canvas" />
  <input
    id="myRange"
    type="range"
    min="0.05"
    max="1"
    step="0.01"
    value="0.5"
    class="slider"
    @input="logo.mainJ.setProgress($event)"
  >
</template>

<script lang="ts" setup>

import { AmbientLight, AxesHelper, Color, ExtrudeGeometry, GridHelper, Group, HemisphereLight, Mesh, MeshNormalMaterial, PerspectiveCamera, Plane, PlaneGeometry, PointLight, ReinhardToneMapping, Scene, SpotLight, Vector3, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import { onMounted, ref } from 'vue'
import { Vue } from '.pnpm/vue-demi@0.12.1_vue@3.2.31/node_modules/vue-demi'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import src from 'gsap/src'
import { addHelpers, addShadow, drawLogo, getClayMaterial, getGlassMaterial, getGroundMaterial } from '../composables/useLogo'
import VueIcon from '~icons/vscode-icons/file-type-graphql?raw'
// const props = defineProps({});

// const emit = defineEmits({});

const canvasEl = ref<HTMLCanvasElement>()

const scene = new Scene()

const logo = drawLogo()

onMounted(() => {
  if (!canvasEl.value) return
  const camera = new PerspectiveCamera(75, canvasEl.value.clientWidth / canvasEl.value.clientHeight, 1, 10000)

  const width = canvasEl.value.clientWidth
  const height = canvasEl.value.clientHeight

  const renderer = new WebGLRenderer({ canvas: canvasEl.value, antialias: false, powerPreference: 'high-performance', alpha: true })
  renderer.setSize(width, height, false)
  // renderer.physicallyCorrectLights = true
  // scene.background = new Color(0x001427)
  renderer.setClearColor(0x000000, 0)

  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.toneMapping = ReinhardToneMapping
  renderer.shadowMap.enabled = true

  camera.position.set(-10, 0, 90)
  scene.add(camera)

  // addHelpers(scene)

  scene.add(new AmbientLight(0x404040))

  const hemiLight = new HemisphereLight(0xFFEEB1, 0x080820, 4)
  scene.add(hemiLight)

  const light = new SpotLight(0xFFA95C, 10)
  light.position.set(-50, 300, 50)
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

  light.lookAt(logo.points.secondaryDot)
  pointLight2.lookAt(logo.points.secondaryDot)
  // pointLight3.lookAt(logo.points.secondaryDot);
  scene.add(light)
  scene.add(pointLight2)
  scene.add(pointLight3)

  // const planeGeo = new PlaneGeometry(1000, 1000);
  // const plane = new Mesh(planeGeo, getGroundMaterial());
  // plane.rotation.x = -Math.PI / 2;
  // addShadow(plane)
  // scene.add(plane)

  logo.addToScene(scene)

  const controls = new OrbitControls(camera, canvasEl.value)
  controls.minDistance = 20
  controls.maxDistance = 200
  // controls.maxPolarAngle = Math.PI / 2;

  logo.mainJ.setProgress(1)

  renderer.setAnimationLoop((_) => {
    logo.onAnimationLoop()

    renderer.render(scene, camera)
  })
})

</script>

<style lang="scss" scoped>
.canvas {
    width: 100%;
    height: 100%;
}
</style>
