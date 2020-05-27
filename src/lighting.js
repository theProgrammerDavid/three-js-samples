function lightingInit(scene) {
    var spotLight = new THREE.SpotLight(0xffffff);

    spotLight.name = "light";

    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;

    spotLight.shadow.mapSize.set(128 * controls.lightMapMultiplier, 128 * controls.lightMapMultiplier);
    scene.add(spotLight);
}

module.exports = lightingInit;