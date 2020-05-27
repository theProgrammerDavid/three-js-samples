const Object = require('./Object');
const lighting = require('./lighting');
const stats = require('./stats')();



scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setClearColor(0x222222, 1);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
renderer.shadowMapType = THREE.PCFSoftShadowMap;

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
cube.addGeometry(new THREE.BoxGeometry(4, 4, 4, 10, 10))
cube.addMaterial(new THREE.MeshLambertMaterial({
    color:
        0xff0000
}))
cube.createMesh();
cube.setPosition(-4, 3, 0);
scene.add(cube);

var sphere = new Object();
//sphere.castShadow = true;
sphere.setShadow('cast');
sphere.addGeometry(new THREE.SphereGeometry(4, 20, 20));
sphere.addMaterial(new THREE.MeshLambertMaterial({
    color:
        0x7777ff
}));
sphere.createMesh();

sphere.setPosition(20, 4, 2);


scene.add(sphere);
lighting(scene);

camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(scene.position);

var step = 0;

function renderScene() {
    stats.update();

    if (controls.dynamicUpdate)
        updateLighting();

    cube.rotation.x += controls.rotationSpeed;
    cube.rotation.y += controls.rotationSpeed;
    cube.rotation.z += controls.rotationSpeed;

    step += controls.bouncingSpeed;

    sphere.position.x = 20 + (10 * (Math.cos(step)));
    sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)));

    requestAnimationFrame(renderScene);

    renderer.render(scene, camera)

}


document.getElementById("WebGL-output").appendChild(renderer.domElement);
renderer.render(scene, camera);
renderScene();
