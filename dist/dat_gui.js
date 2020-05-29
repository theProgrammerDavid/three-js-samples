var controls = new (function () {
  this.rotationSpeed = 0.02;
  this.bouncingSpeed = 0.03;
  this.lightMapMultiplier = 6;

})();

var gui = new dat.GUI();

var info = {
  info: function () {
    window.open("https://github.com/theProgrammerDavid/three-js-samples/blob/master/README.md", '_blank');
  },
};

var physics = {
  addCubes: function () {

  }
}
gui.add(controls, "rotationSpeed", 0, 0.5);
gui.add(controls, "bouncingSpeed", 0, 0.5);
var shadowController = gui.add(controls, "lightMapMultiplier", 1, 15, 1);


gui.add(physics, "addCubes");
gui.add(info, "info");

shadowController.onChange((value) => {
  updateLighting();
});

function updateLighting() {
  var light = scene.getObjectByName("light");
  light.shadow.mapSize.set(128 * controls.lightMapMultiplier, 128 * controls.lightMapMultiplier);
  light.shadow.map.dispose();
  light.shadow.map = null;
}