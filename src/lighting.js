function init(scene) {
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow=true;
    scene.add(spotLight);
}

module.exports = init;