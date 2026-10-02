import * as THREE from 'three';

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

export function animate(): void {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
