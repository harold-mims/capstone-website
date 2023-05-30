import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import Stats from 'three/examples/jsm/libs/stats.module'

import model_path from '../src/Full_Assembly.stl?url'
//import model_path from '/src/cube.stl'


const scene = new THREE.Scene()
//scene.background = new THREE.Color(0xf5f5f5);
scene.add(new THREE.AxesHelper(5))
const rederer_div = document.getElementById("renderer-window");

//const model = document.getElementById("model-load-script").getAttribute("model");
////const model_ = document.getElementById("model-load-script").model;

//const light = new THREE.SpotLight()
//light.position.set(0,0,40)
//scene.add(light)

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );

const ambient_light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( ambient_light )

const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
)
camera.position.z = 1000

const renderer = new THREE.WebGLRenderer({antialias:true, alpha:true})
//const renderer = new THREE.WebGLRenderer()
renderer.outputColorSpace = THREE.SRGBColorSpace // Changed since sRGBEncoding is depreciated
renderer.setSize(window.innerWidth, window.innerHeight)
rederer_div.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

const material = new THREE.MeshPhysicalMaterial({
    //color: 0x999999,
    color: 0x1F4AB8,
    metalness: 0.25,
    roughness: 1,
    opacity: 0.9,
    transparent: true,

})

const loader = new STLLoader()
loader.load(

    model_path,

    function (geometry) {
        geometry.center()
        const mesh = new THREE.Mesh(geometry, material)
        mesh.rotation.set(Math.PI, 0, 0);
        scene.add(mesh)
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

const stats = new Stats()
rederer_div.appendChild(stats.dom)

function animate() {
    requestAnimationFrame(animate)

    controls.update()

    render()

    stats.update()
}

function render() {
    renderer.render(scene, camera)
}

animate()
