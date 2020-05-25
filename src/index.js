import _ from 'lodash';


const Object = require('./Object');
const lighting = require('./lighting');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setClearColor(0x222222, 1);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;

var axes = new THREE.AxisHelper(20);
scene.add(axes);

var plane = new Object();
plane.setShadow('receive');
plane.addGeometry(new THREE.PlaneGeometry(60, 20, 1, 1));
plane.addMaterial(new THREE.MeshLambertMaterial({
    color:
        0xffffff
}));
plane.setPosition(15, 0, 0);
plane.rotation.x = -0.5 * Math.PI;

scene.add(plane);

var cube = new Object();
//cube.castShadow = true;
cube.setShadow('cast');
cube.addGeometry(new THREE.BoxGeometry(4, 4, 4))
cube.addMaterial(new THREE.MeshLambertMaterial({
    color:
        0xff0000
}))
cube.createMesh();
cube.setPosition(-4, 3, 0);
scene.add(cube);

var ob1 = new Object();
//ob1.castShadow = true;
ob1.setShadow('cast');
ob1.addGeometry(new THREE.SphereGeometry(4, 20, 20));
ob1.addMaterial(new THREE.MeshLambertMaterial({
    color:
        0x7777ff
}));
ob1.createMesh();

ob1.setPosition(20, 4, 2);


scene.add(ob1);
lighting(scene);

camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(scene.position);

document.getElementById("WebGL-output").appendChild(renderer.domElement);
renderer.render(scene, camera);
