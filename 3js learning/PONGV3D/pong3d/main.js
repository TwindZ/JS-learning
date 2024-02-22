import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

const board = {sizeX: 140, sizeY: 100, sizeZ: 5}

const renderer = new THREE.WebGLRenderer()

renderer.shadowMap.enabled = true

renderer.setSize(window.innerWidth, window.innerHeight)

// const canvas = document.getElementById("game")
//marche pas trouver pourquoi pour que ca sois plus facile pour le css
// canvas.appendChild(renderer.domElement)

document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
	45, 
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)
camera.position.set(0, 0, -200)

const orbit = new OrbitControls(camera, renderer.domElement)
orbit.update()

const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

//plane
const planeGeometry = new THREE.PlaneGeometry(board.sizeX, board.sizeY)
const planeMaterial = new THREE.MeshBasicMaterial({
	color: 0xffffff,
	side: THREE.DoubleSide
})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.receiveShadow = true
scene.add(plane)


// ball
const sphereGeometry = new THREE.SphereGeometry(board.sizeZ / 2, 64, 64)
const sphereMaterial = new THREE.MeshBasicMaterial({
	color: 0x994400
})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
sphere.castShadow = true
sphere.position.set(0, 0, -board.sizeZ / 2)
scene.add(sphere)


const gridHelper = new THREE.GridHelper(board.sizeX, 20)
gridHelper.rotation.x = 0.5 * Math.PI
scene.add(gridHelper)

const plight = new THREE.PointLight(0xffffff, 2000, 100)
plight.position.set(0, 25, 0)
scene.add(plight)
const plightHelper = new THREE.PointLightHelper(plight)
scene.add(plightHelper)

// const textureLoader = new THREE.TextureLoader()


//RED 0x00FF00
const side1geometry = new THREE.BoxGeometry(board.sizeX + (board.sizeZ * 2), board.sizeZ, board.sizeZ * 2)
const side1material = new THREE.MeshBasicMaterial({color: 0xFF0000})
const side1 = new THREE.Mesh(side1geometry, side1material)
side1.position.set(0, -board.sizeY / 2 - board.sizeZ / 2, -board.sizeZ)
scene.add(side1)

//GREEN
const side2geometry = new THREE.BoxGeometry(board.sizeX + (board.sizeZ * 2), board.sizeZ, board.sizeZ * 2)
const side2material = new THREE.MeshBasicMaterial({color: 0x00FF00})
const side2 = new THREE.Mesh(side2geometry, side2material)
side2.position.set(0, board.sizeY / 2 + board.sizeZ / 2, -board.sizeZ)
scene.add(side2)

//BLUE
const side3geometry = new THREE.BoxGeometry(board.sizeZ, board.sizeY, board.sizeZ * 2)
const side3material = new THREE.MeshBasicMaterial({color: 0x0000FF})
const side3 = new THREE.Mesh(side3geometry, side3material)
side3.position.set(board.sizeX / 2 + board.sizeZ / 2, 0, -board.sizeZ)
scene.add(side3)


// //PINK
const side4geometry = new THREE.BoxGeometry(board.sizeZ, board.sizeY, board.sizeZ * 2)
const side4material = new THREE.MeshBasicMaterial({color: 0xff00ff})
const side4 = new THREE.Mesh(side4geometry, side4material)
side4.position.set(-board.sizeX / 2 - board.sizeZ / 2, 0, -board.sizeZ)
scene.add(side4)

//PADDLE1
const paddle1geometry = new THREE.BoxGeometry(board.sizeZ, board.sizeY / 3, board.sizeZ)
const paddle1material = new THREE.MeshBasicMaterial({color: 0x000000})
const paddle1 = new THREE.Mesh(paddle1geometry, paddle1material)
paddle1.position.set(-board.sizeX / 2 - (board.sizeZ / 2) + board.sizeZ * 2, 0, -board.sizeZ / 2)
scene.add(paddle1)

//PADDLE2
const paddle2geometry = new THREE.BoxGeometry(board.sizeZ, board.sizeY / 3, board.sizeZ)
const paddle2material = new THREE.MeshBasicMaterial({color: 0x000000})
const paddle2 = new THREE.Mesh(paddle2geometry, paddle2material)
paddle2.position.set(board.sizeX / 2 + (board.sizeZ / 2) - board.sizeZ * 2, 0, -board.sizeZ / 2)
scene.add(paddle2)

let step = 1;
let speed = 0.005;
	
function animate() {
	renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)