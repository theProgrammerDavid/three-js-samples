import THREE from 'three';

class Object extends THREE.Object {
    constructor(){

    }
     addGeometry(geometry){
        this.geometry = geometry;
    }
    addMaterial(material){
        this.material = material;
    }
}