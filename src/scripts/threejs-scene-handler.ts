import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

export const scene: THREE.Scene = new THREE.Scene();
export const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);
export const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

export function initScene(): void {
    const container = document.getElementById('canvas-container');
    if (container && !container.querySelector('canvas')) {
        container.appendChild(renderer.domElement);
    }
}

const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.4, // strength
    0.3, // radius
    0.85, // threshold (luminance cutoff)
);

const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
composer.addPass(bloomPass);
composer.addPass(new OutputPass());

export function animate(): void {
    requestAnimationFrame(animate);
    composer.render();
}
