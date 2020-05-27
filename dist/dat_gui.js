var controls = new (function () {
    this.rotationSpeed = 0.02;
    this.bouncingSpeed = 0.03;
    this.lightMapMultiplier = 2;
  })();

  var gui = new dat.GUI();
  var obj = {
    updateShadow: function () {
      updateLighting();
    },
  };
  gui.add(controls, "rotationSpeed", 0, 0.5);
  gui.add(controls, "bouncingSpeed", 0, 0.5);
  gui.add(controls, "lightMapMultiplier", 1, 15, 1);
  gui.add(obj, "updateShadow");

  function updateLighting() {
    var light=scene.getObjectByName("light");
    light.shadowMapHeight=128*controls.lightMapMultiplier;
    light.shadowMapWidth=128*controls.lightMapMultiplier;
    light.shadow.map.dispose();
    light.shadow.map=null;
  }