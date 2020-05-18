import _ from 'lodash';
import * as THREE from 'three';

const Object = require('Object');

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setClearColor(0xEEEEEE, 1);
renderer.setSize(window.innerWidth, window.innerHeight);

var axes = new THREE.AxisHelper(20);
scene.add(axes);

var planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
var planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
var plane = new THREE.Mesh(planeGeometry, planeMaterial);

plane.rotation.x = -0.5 * Math.PI;
plane.position.x = 15;
plane.position.y = 0;
plane.position.z = 0;

scene.add(plane);
var cubeGeometry = new THREE.BoxGeometry(4, 4, 4)

var cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true
});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

cube.position.x = -4;
cube.position.y = 3;
cube.position.z = 0;

scene.add(cube);

var ob1 = new Object();

ob1.addGeometry(new THREE.SphereGeometry(4, 20, 20));
ob1.addMaterial(new THREE.MeshBasicMaterial({
    color:
        0x7777ff, wireframe: true
}));
ob1.createMesh();

ob1.setPosition(20,4,2);


scene.add(ob1);

camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(scene.position);

document.getElementById("WebGL-output").appendChild(renderer.domElement);
renderer.render(scene, camera);
