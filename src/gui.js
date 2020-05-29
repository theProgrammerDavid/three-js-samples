var gui = new dat.GUI();
class GUI {

    constructor() {
        this.controls = {
            'rotationSpeed': 0.02,
            'bouncingSpeed': 0.03,
            'lightMapMultiplier': 6,
            'dynamicUpdate': false
        };

        this.obj = {
            updateShadow: function () {
                var light = scene.getObjectByName("light");

                light.shadow.mapSize.set(128 * this.controls['lightMapMultiplier'], 128 * this.controls['lightMapMultiplier']);
                light.shadow.map.dispose();
                light.shadow.map = null;
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

        let lighting = gui.addFolder('Lighting');
        let physics = gui.addFolder('Physics');
        let simulation = gui.addFolder('Simulation');

        simulation.add(this.controls, "rotationSpeed", 0, 0.5);
        simulation.add(this.controls, "bouncingSpeed", 0, 0.5);


        let shadowController = lighting.add(this.controls, "lightMapMultiplier", 1, 15, 1);
        shadowController.onChange((value) => {
            var light = scene.getObjectByName("light");

            light.shadow.mapSize.set(128 * value, 128 * value);
            light.shadow.map.dispose();
            light.shadow.map = null;
        })
       
        physics.add(this.physics, "addCubes");
        gui.add(this.info, "info");
    }


}

module.exports = new GUI();