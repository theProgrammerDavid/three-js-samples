function init(scene) {
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow=true;
    spotLight.shadowMapHeight=1024;
    spotLight.shadowMapWidth=1024;
    scene.add(spotLight);
}

module.exports = init;