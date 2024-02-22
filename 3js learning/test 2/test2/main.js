import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import sunset from './img/sunset-mountain.jpg'


const renderer = new THREE.WebGLRenderer()

renderer.shadowMap.enabled = true

renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
	45, 
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)

const orbit = new OrbitControls(camera, renderer.domElement)

const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

camera.position.set(0, 20, 75)
orbit.update()

const boxGeometry = new THREE.BoxGeometry(1, 2, 1)
const boxMaterial = new THREE.MeshStandardMaterial({
	color: 0x458569,
})
const box = new THREE.Mesh(boxGeometry, boxMaterial)
scene.add(box)

const planeGeometry = new THREE.PlaneGeometry(100, 100)
const planeMaterial = new THREE.MeshStandardMaterial({
	color: 0xffffff,
	side: THREE.DoubleSide
})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.receiveShadow = true

scene.add(plane)
plane.rotation.x = -0.5 * Math.PI

const sphereGeometry = new THREE.SphereGeometry(2, 64, 64)
const sphereMaterial = new THREE.MeshStandardMaterial({
	color: 0x994400
})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
sphere.castShadow = true
sphere.position.set(-10, 0, 0)
scene.add(sphere)


const gridHelper = new THREE.GridHelper(30, 50)
scene.add(gridHelper)

const plight = new THREE.PointLight(0xffffff, 4000, 100)
plight.position.set(25, 5, 0)
scene.add(plight)
const plightHelper = new THREE.PointLightHelper(plight)
scene.add(plightHelper)

const dlight = new THREE.DirectionalLight(0xffffff, 1)
dlight.castShadow = true
dlight.position.set(-25, 20, 0)
dlight.shadow.camera.bottom = -20
scene.add(dlight)

const dlightHelper = new THREE.DirectionalLightHelper(dlight)
scene.add(dlightHelper)
const dlightShadowHelper = new THREE.CameraHelper(dlight.shadow.camera)
scene.add(dlightShadowHelper)

const textureLoader = new THREE.TextureLoader()
scene.background = textureLoader.load(sunset)



const cube2Geometry = new THREE.BoxGeometry(10, 10, 10)
const cube2Material = new THREE.MeshStandardMaterial({
	// map : textureLoader.load(sunset)
	})
	const cube2 =  new THREE.Mesh(cube2Geometry, cube2Material)
cube2.position.set(10, 10, 0)
cube2.material.map = textureLoader.load(sunset)
	scene.add(cube2)
	
let step = 1;
let speed = 0.005;
	
function animate() {
	cube2.rotation.x += 0.01
	cube2.rotation.y += 0.01
	box.rotation.x += 0.01
	box.rotation.y += 0.01
	renderer.render(scene, camera)
	step += speed
	sphere.position.y = (10 * Math.abs(Math.sin(step)) + 2)
}

renderer.setAnimationLoop(animate)