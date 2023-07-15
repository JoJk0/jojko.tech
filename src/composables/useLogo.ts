import type {
  ColorRepresentation,
  Material,
  Object3D,
  Scene,
} from 'three'
import {
  AxesHelper,
  CatmullRomCurve3,
  CurvePath,
  DoubleSide,
  EquirectangularReflectionMapping,
  GridHelper,
  LineCurve3,
  Mesh,
  MeshPhysicalMaterial,
  QuadraticBezierCurve3,
  RepeatWrapping,
  SphereGeometry,
  TextureLoader,
  TubeGeometry,
  Vector2,
  Vector3,
} from 'three'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { clamp01, variables } from '../utils'

import glassNormal from '../assets/materials/glass/normal.jpeg?url'
import warehouseHdr from '../assets/materials/glass/warehouse.hdr?url'

export interface MainJPoints {
  top: Vector3
  start: Vector3
  middle: Vector3
  middle2: Vector3
  middle3: Vector3
  end: Vector3
}

export function addShadow(model: Object3D) {
  model.traverse((n) => {
    if (n.type === 'Mesh') {
      n.castShadow = true
      n.receiveShadow = true
      // if(n.material.map) n.material.map.anisotropy = 16;
    }
  })
}

export function drawCurvedPill(path: CurvePath<Vector3>,
  divisions: number,
  radius: number,
  material: Material,
  tubularSegments: number,
  radialSegments: number) {
  const pathPoints = path.getSpacedPoints(divisions)

  let currentPath: CurvePath<Vector3> | undefined = path

  const sphereGeo = new SphereGeometry(
    radius,
    32,
    32,
    Math.PI,
    Math.PI * 2,
  )

  const sphere = new Mesh(sphereGeo, material)
  addShadow(sphere)
  const sphere2 = new Mesh(sphereGeo, material)
  addShadow(sphere2)

  const tubeGeo = new TubeGeometry(
    path as any,
    tubularSegments,
    radius,
    radialSegments,
    false,
  )

  const tube = new Mesh(tubeGeo, material)
  addShadow(tube)

  const addToScene = (scene: Scene) => {
    scene.add(sphere)
    scene.add(sphere2)
    scene.add(tube)
  }

  const onAnimationLoop = () => {
    tube.geometry.dispose()

    if (currentPath) {
      tube.geometry = new TubeGeometry(
        currentPath,
        tubularSegments,
        radius,
        radialSegments,
        false,
      )
    }
  }

  const setProgress = (e: InputEvent | number) => {
    const progress
      = typeof e === 'number'
        ? e
        : Number.parseFloat((e?.target as HTMLInputElement)?.value)
    const length = 60

    const currentPointsNumber = divisions + 1

    const currentPointsProgress = Math.floor(currentPointsNumber * progress)
    const start
      = currentPointsProgress - length > 0 ? currentPointsProgress - length : 0

    const slicedPoints = pathPoints.slice(start, currentPointsProgress)
    const curve = new CatmullRomCurve3(slicedPoints)

    currentPath = progress && slicedPoints.length > 1 ? new CurvePath() : undefined
    currentPath?.add(curve)

    if (!progress || slicedPoints.length <= 1) {
      tube.scale.set(0, 0, 0)
      sphere.scale.set(0, 0, 0)
      sphere2.scale.set(0, 0, 0)
      return
    }
    else {
      tube.scale.set(1, 1, 1)
      sphere.scale.set(1, 1, 1)
      sphere2.scale.set(1, 1, 1)
    }

    const firstPoint = slicedPoints[0]
    const secondPoint = slicedPoints[1] || slicedPoints[0]

    const lastPoint = slicedPoints[slicedPoints.length - 1]
    const secondLastPoint = slicedPoints[slicedPoints.length - 2] || slicedPoints[0]

    sphere.position.set(firstPoint.x, firstPoint.y, firstPoint.z)

    sphere.lookAt(
      secondPoint,
    )

    sphere2.position.set(lastPoint.x, lastPoint.y, lastPoint.z)

    sphere2.lookAt(
      secondLastPoint,
    )
  }

  return {
    setProgress,
    onAnimationLoop,
    addToScene,
  }
}

export function drawCircle(points: MainJPoints,
  divisions: number,
  radius: number,
  material: Material,
  tubularSegments: number,
  radialSegments: number) {
  const { top, start, middle, middle2, middle3, end } = points

  const curveQuad1 = new QuadraticBezierCurve3(start, middle, middle2)
  const curveQuad2 = new QuadraticBezierCurve3(middle2, middle3, end)

  const lineCurve = new LineCurve3(top, start)

  const path = new CurvePath<Vector3>()
  path.add(lineCurve)
  path.add(curveQuad1)
  path.add(curveQuad2)

  return {
    ...drawCurvedPill(
      path,
      divisions,
      radius,
      material,
      tubularSegments,
      radialSegments,
    ),
    // test,
  }
}

export function drawPoint(point: Vector3,
  radius: number,
  material: Material) {
  /* Main dot */
  const mainDotGeo = new SphereGeometry(radius, 32, 32)
  const mainDot = new Mesh(mainDotGeo, material)
  mainDot.position.set(point.x, point.y, point.z)

  const addToScene = (scene: Scene) => {
    scene.add(mainDot)
  }

  const setProgress = (e: InputEvent | number) => {
    const progress
      = typeof e === 'number'
        ? e
        : Number.parseFloat((e?.target as HTMLInputElement)?.value)
    mainDot.scale.set(progress, progress, progress)
  }

  return {
    addToScene,
    setProgress,
  }
}

export function drawRect(points: {
  start: Vector3
  end: Vector3
},
divisions: number,
radius: number,
material: Material,
tubularSegments: number,
radialSegments: number) {
  const lineCurve = new LineCurve3(points.start, points.end)
  const path = new CurvePath<Vector3>()
  path.add(lineCurve)
  return drawCurvedPill(
    path,
    divisions,
    radius,
    material,
    tubularSegments,
    radialSegments,
  )
}

export function getGroundMaterial() {
  const options = {
    color: variables.colorBackground,
    metalness: 0,
    roughness: 1,
    transmission: 1,
    ior: 1.5,
    reflectivity: 0,
    envMapIntensity: 1.5,
    clearcoat: 0.5,
    clearcoatRoughness: 0.5,
    normalScale: 0.5,
    clearcoatNormalScale: 0.3,
    normalRepeat: 50,
  }
  const textureLoader = new TextureLoader()

  const normalMapTexture = textureLoader.load(
    glassNormal,
  )
  normalMapTexture.wrapS = RepeatWrapping
  normalMapTexture.wrapT = RepeatWrapping
  normalMapTexture.repeat.set(options.normalRepeat, options.normalRepeat)

  return new MeshPhysicalMaterial({
    color: 0xFFFFFF,
    metalness: 0,
    roughness: options.roughness,
    transmission: options.transmission,
    ior: options.ior,
    reflectivity: options.reflectivity,
    clearcoat: options.clearcoat,
    clearcoatRoughness: options.clearcoatRoughness,
    normalScale: new Vector2(options.normalScale),
    normalMap: normalMapTexture,
    clearcoatNormalMap: normalMapTexture,
    clearcoatNormalScale: new Vector2(options.clearcoatNormalScale),
  })
}
export function getClayMaterial(colorProp?: ColorRepresentation) {
  const color = colorProp || variables.colorText
  const materialSide = DoubleSide
  const textureLoader = new TextureLoader()
  const normalMapTexture = textureLoader.load(glassNormal)
  normalMapTexture.wrapS = RepeatWrapping
  normalMapTexture.wrapT = RepeatWrapping
  normalMapTexture.repeat.set(3, 3)

  return new MeshPhysicalMaterial({
    color,
    side: materialSide,
    metalness: 0,
    roughness: 1,
    transmission: 0.5,
    ior: 2.5,
    reflectivity: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.5,
    normalScale: new Vector2(0.5),
    normalMap: normalMapTexture,
    clearcoatNormalMap: normalMapTexture,
    clearcoatNormalScale: new Vector2(0.3),
  })
}

export function getGlassMaterial() {
  const options = {
    enableSwoopingCamera: false,
    enableRotation: false,
    color: 0xFFFFFF,
    metalness: 0,
    roughness: 0.2,
    transmission: 1,
    ior: 1.5,
    reflectivity: 0.5,
    thickness: 2.5,
    envMapIntensity: 1.5,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    normalScale: 0.3,
    clearcoatNormalScale: 0.2,
    normalRepeat: 3,
    // attenuationTint: 0xffffff,
    // attenuationDistance: 0,
    bloomThreshold: 0.85,
    bloomStrength: 0.35,
    bloomRadius: 0.33,
  }

  const hdrEquirect = new RGBELoader().load(
    warehouseHdr,
    () => {
      hdrEquirect.mapping = EquirectangularReflectionMapping
    },
  )
  const textureLoader = new TextureLoader()

  const normalMapTexture = textureLoader.load(glassNormal)
  normalMapTexture.wrapS = RepeatWrapping
  normalMapTexture.wrapT = RepeatWrapping
  normalMapTexture.repeat.set(options.normalRepeat, options.normalRepeat)

  return new MeshPhysicalMaterial({
    color: 0xFFFFFF,
    metalness: 0,
    roughness: options.roughness,
    transmission: options.transmission,
    ior: options.ior,
    reflectivity: options.reflectivity,
    // thickness: options.thickness,
    envMap: hdrEquirect,
    envMapIntensity: options.envMapIntensity,
    clearcoat: options.clearcoat,
    clearcoatRoughness: options.clearcoatRoughness,
    normalScale: new Vector2(options.normalScale),
    normalMap: normalMapTexture,
    clearcoatNormalMap: normalMapTexture,
    clearcoatNormalScale: new Vector2(options.clearcoatNormalScale),
    // attenuationTint: options.attenuationTint,
    // attenuationDistance: options.attenuationDistance,
  })
}

export function drawLogo() {
  const tubularSegments = 64
  const radius = 10
  const radialSegments = 200

  const translationX = 20
  const translationY = -40

  const divisions = 250

  const mainMaterial = getClayMaterial()

  const secondaryMaterial = getGlassMaterial()

  const points = {
    mainJ: {
      top: new Vector3(0 + translationX, 300 + translationY, 0),
      start: new Vector3(0 + translationX, 20 + translationY, 0),
      middle: new Vector3(-3 + translationX, 0 + translationY, 0),
      middle2: new Vector3(-20 + translationX, 0 + translationY, 0),
      middle3: new Vector3(-37 + translationX, 0 + translationY, 0),
      end: new Vector3(-40 + translationX, 20 + translationY, 0),
    },
    mainDot: new Vector3(0 + translationX, 75 + translationY, 0),
    secondaryDot: new Vector3(-20 + translationX, 21.25 + translationY, 0),
    secondaryCircle: {
      top: new Vector3(-40 + translationX, 17.5 + translationY, 0),
      start: new Vector3(-40 + translationX, 17.5 + translationY, 0),
      middle: new Vector3(-37.5 + translationX, 37.5 + translationY, 0),
      middle2: new Vector3(-20 + translationX, 37.5 + translationY, 0),
      middle3: new Vector3(-5 + translationX, 37.5 + translationY, 0),
      end: new Vector3(0 + translationX, 17.5 + translationY, 0),
    },
    secondaryRect: {
      start: new Vector3(0 + translationX, 40 + translationY, 0),
      end: new Vector3(0 + translationX, 80 + translationY, 0),
    },
  }

  const mainJ = drawCircle(
    points.mainJ,
    divisions,
    radius,
    mainMaterial,
    tubularSegments,
    radialSegments,
  )

  const mainDot = drawPoint(points.mainDot, radius * 1.2, mainMaterial)

  const secondaryDot = drawPoint(
    points.secondaryDot,
    radius / 2,
    secondaryMaterial,
  )

  const secondaryCircle = drawCircle(
    points.secondaryCircle,
    divisions / 2,
    radius / 3,
    secondaryMaterial,
    tubularSegments,
    radialSegments,
  )

  const secondaryRect = drawRect(
    points.secondaryRect,
    divisions / 2,
    radius / 3,
    secondaryMaterial,
    tubularSegments,
    radialSegments,
  )

  const addToScene = (scene: Scene) => {
    mainJ.addToScene(scene)
    mainDot.addToScene(scene)
    secondaryDot.addToScene(scene)
    secondaryCircle.addToScene(scene)
    secondaryRect.addToScene(scene)
  }

  const onAnimationLoop = () => {
    mainJ.onAnimationLoop()
    secondaryCircle.onAnimationLoop()
    secondaryRect.onAnimationLoop()
  }

  const setProgress = (e: InputEvent | number) => {
    const progress
      = typeof e === 'number'
        ? e
        : Number.parseFloat((e?.target as HTMLInputElement)?.value)

    mainJ.setProgress(clamp01(progress / 0.6))
    mainDot.setProgress(clamp01(progress / 0.3 - 2))
    secondaryDot.setProgress(clamp01(progress / 0.3 - 2.5))
    secondaryCircle.setProgress(clamp01(progress / 0.5 - 1.2))
    secondaryRect.setProgress(clamp01(progress / 0.5 - 1.3))
  }

  return {
    points,
    mainJ,
    mainDot,
    secondaryDot,
    secondaryCircle,
    secondaryRect,
    addToScene,
    onAnimationLoop,
    setProgress,
  }
}

export function addHelpers(scene: Scene) {
  const axesHelper = new AxesHelper(500)
  scene.add(axesHelper)

  const size = 100
  const divisions = 10

  const gridHelper = new GridHelper(size, divisions)
  scene.add(gridHelper)
}
