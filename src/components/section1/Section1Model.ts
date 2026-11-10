import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const draco = new DRACOLoader().setDecoderPath('/draco/');
const loader = new GLTFLoader().setDRACOLoader(draco);

export async function loadSection1Model(): Promise<THREE.Group> {
    const gltf = await loader.loadAsync('/hero_compressed.glb');
    return gltf.scene;
}
