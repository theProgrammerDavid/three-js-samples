class GUI {
    constructor() {
        this.controls = {
            rotationSpeed = 0.02,
            bouncingSpeed = 0.03,
            lightMapMultiplier = 6,
            dynamicUpdate = false
        };

        this.obj = {
            updateShadow: function () {
                var light=scene.getObjectByName("light");
                light.shadow.mapSize.set(128*this.controls.lightMapMultiplier, 128*this.controls.lightMapMultiplier);
                light.shadow.map.dispose();
                light.shadow.map=null;
            },
        };

        this.info = {
            info: function () {
                window.open("https://github.com/theProgrammerDavid/three-js-samples/blob/master/README.md", '_blank');
            },
        };

        this.physics = {
            addCubes: function () {

            }
        }

        addGUI();
    }

    addGUI() {
        gui.add(this.controls, "rotationSpeed", 0, 0.5);
        gui.add(this.controls, "bouncingSpeed", 0, 0.5);
        gui.add(this.controls, "lightMapMultiplier", 1, 15, 1);
        gui.add(this.controls, "dynamicUpdate", true, false)
        gui.add(this.obj, "updateShadow");
        gui.add(this.physics, "addCubes");
        gui.add(this.info, "info");
    }
}

module.exports = new GUI();