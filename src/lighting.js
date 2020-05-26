function init(scene) {
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow=true;
    spotLight.shadowMapHeight=128*4;
    spotLight.shadowMapWidth=128*4;
    scene.add(spotLight);
}

module.exports = init;