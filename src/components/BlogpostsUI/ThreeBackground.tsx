// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";
// const ThreeBackground: React.FC = () => {
//   const mountRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({ alpha: true });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
//     const material = new THREE.MeshBasicMaterial({
//       color: 0x6366f1,
//       wireframe: true,
//     });
//     const torus = new THREE.Mesh(geometry, material);

//     scene.add(torus);
//     camera.position.z = 30;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       torus.rotation.x += 0.01;
//       torus.rotation.y += 0.01;
//       renderer.render(scene, camera);
//     };

//     animate();

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       mountRef.current?.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />
//   );
// };

// export default ThreeBackground;
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2); // Larger size for animation
    mountRef.current.appendChild(renderer.domElement);

    // Create balcony base
    const balconyGeometry = new THREE.BoxGeometry(4.2, 0.2, 2);
    const balconyMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
    });
    const balcony = new THREE.Mesh(balconyGeometry, balconyMaterial);
    balcony.position.set(0, 0, 0);

    // Create glass railings
    const glassGeometry = new THREE.PlaneGeometry(4, 1);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x66ccff,
      transparent: true,
      opacity: 0.6,
      roughness: 0.1,
      transmission: 0.9,
      thickness: 0.05,
    });
    const glassPanel = new THREE.Mesh(glassGeometry, glassMaterial);
    glassPanel.position.set(0, 0.5, 1);

    // Create handrails
    const handrailGeometry = new THREE.BoxGeometry(4.2, 0.1, 0.1);
    const handrailMaterial = new THREE.MeshStandardMaterial({
      color: 0x666666,
    });

    const topHandrail = new THREE.Mesh(handrailGeometry, handrailMaterial);
    topHandrail.position.set(0, 1, 1);

    const bottomHandrail = new THREE.Mesh(handrailGeometry, handrailMaterial);
    bottomHandrail.position.set(0, 0, 1);

    const railingGroup = new THREE.Group();
    railingGroup.add(balcony);
    railingGroup.add(glassPanel);
    railingGroup.add(topHandrail);
    railingGroup.add(bottomHandrail);
    scene.add(railingGroup);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      railingGroup.rotation.y += 0.01; // Circular rounding effect

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / 2 / (window.innerHeight / 2);
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="flex justify-between items-center w-full h-full">
      <div className="ml-16 p-4 text-[#292929]">
        <h1 className="text-4xl font-bold">Glass Railing</h1>
        <p className="mt-2 text-lg">Enhance your home's aesthetics.</p>
        <p className="mt-1 text-lg">Durable, modern, and sleek design.</p>
      </div>
      <div ref={mountRef} className="mr-16" />
    </div>
  );
};

export default ThreeBackground;
