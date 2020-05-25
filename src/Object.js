class Object extends THREE.Mesh {
    constructor() {
        super();
    }

    addGeometry(geometry) {
        this.geometry = geometry;
    }
    addMaterial(material) {
        this.material = material;
    }
    createMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }
    get getMesh() {
        return this.mesh;
    }
    /**
     * @param {number} x
     */
    setPosition(x, y, z) {
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    }

    /**
     * 
     * @param {*} shadow receive/cast
     */

    setShadow(shadow) {
        if (shadow) {
            if (shadow === 'receive') {
                this.receiveShadow = true;
            }
            else if(shadow === 'cast') {
                this.castShadow = true;
            }
        }
    }
}
module.exports = Object;