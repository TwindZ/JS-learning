import * as THREE from "three"

const scene = THREE.Scene()

const geometry = new THREE.SphereGeometry(3 , 64, 64)
const material = new THREE.MeshStandardMaterial({
	color: "#00ff83"
})

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const camera = new THREE.PerspectiveCamera(45, 800, 600)
scene.add(camera)

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGL1Renderer({ canvas })
renderer.setSize(800, 600)
renderer.render(scene, camera)

