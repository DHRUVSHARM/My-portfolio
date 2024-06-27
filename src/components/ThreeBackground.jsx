import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();


    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add your 3D elements to the scene here

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);


    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // Update your animations here

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={sceneRef} />;
};

export default ThreeBackground;
