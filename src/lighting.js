var GUI = require('./gui');
function lightingInit(scene) {
    var spotLight = new THREE.SpotLight(0xffffff);

    spotLight.name = "light";

    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;

    spotLight.shadow.mapSize.set(128 * GUI.controls.lightMapMultiplier, 128 * GUI. controls.lightMapMultiplier);
    scene.add(spotLight);
}

module.exports = lightingInit;