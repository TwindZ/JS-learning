//check delta time pour render speed constant

import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

const scene = new THREE.Scene()

const geometry = new THREE.SphereGeometry(3, 64, 64)
const material = new THREE.MeshStandardMaterial({
	color: "#00ff83"
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}

const light = new THREE.PointLight(0xffffff, 100, 100)
light.position.set(0, 10, 10)
scene.add(light)

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 10
scene.add(camera)



const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(2)
renderer.render(scene, camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 10

window.addEventListener("resize", () => {
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight
	
	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()
	renderer.setSize(sizes.width, sizes.height)
})

const loop = () => {
	controls.update()
	mesh.position.x = 0.1
	renderer.render(scene, camera)
	window.requestAnimationFrame(loop)
}
loop()
