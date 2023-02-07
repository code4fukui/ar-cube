import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export const loadGLB = async (path) => new Promise((resolve) => {
	const loader = new GLTFLoader();
	loader.load(path, resolve);
});
