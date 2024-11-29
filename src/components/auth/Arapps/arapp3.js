import React, { useEffect, useRef, useState } from "react";
import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js'
import * as THREE from 'three';

const ArApp3 = () => {
  const videoRef = useRef(null);
  const [isTargetVisible, setIsTargetVisible] = useState(false);

  // Ensure correct asset paths
  const learnIcon = new URL("../../../images/learn.png", import.meta.url).toString();
  const playVideo = new URL("../../../images/play5.mp4", import.meta.url).toString();
  const playPreview = new URL("../../../images/play.png", import.meta.url).toString();
  const targetFile = new URL("../../../images/targets7.mind", import.meta.url).toString();
  const earth = new URL("../../../images/earth-sphere.jpg", import.meta.url).toString();

  const xpos = new URL("../../../images/xpos.png", import.meta.url).toString();
  const xneg = new URL("../../../images/xneg.png", import.meta.url).toString();
  const ypos = new URL("../../../images/ypos.png", import.meta.url).toString();
  const yneg = new URL("../../../images/yneg.png", import.meta.url).toString();
  const zpos = new URL("../../../images/zpos.png", import.meta.url).toString();
  const zneg = new URL("../../../images/zneg.png", import.meta.url).toString();

  useEffect(() => {
    const sceneEl = document.querySelector("a-scene");
    const earthEl = document.querySelector("#earth");

    // Listen for touch events
    sceneEl.addEventListener("click", (e) => {
      const camera = sceneEl.querySelector("a-camera");
      const screenPosition = new THREE.Vector2(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(screenPosition, camera.getObject3D("camera"));

      const intersects = raycaster.intersectObject(sceneEl.object3D, true);

      if (intersects.length > 0) {
        const intersect = intersects[0];
        const newPos = intersect.point;
        earthEl.setAttribute("position", `${newPos.x} ${newPos.y} ${newPos.z}`);
      }
    });
  }, []);

  return (
    <a-scene
      videohandler
      style={{ height: "100vh" }}
      mindar-image={`imageTargetSrc: ${targetFile}`}
      color-space="sRGB"
      renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
    >
      <a-assets>
        <img id="earth-sphere-texture" src={earth} />
        <img id="moon-sphere-texture" src={earth} />
      </a-assets>

      <a-camera
        position="0 0 0"
        look-controls="enabled: false"
        cursor="fuse: false; rayOrigin: mouse;"
        raycaster="far: 10000; objects: .clickable"
      ></a-camera>

      <a-entity id="mytarget" mindar-image-target="targetIndex:0">
        {/* Earth Sphere */}
        <a-sphere
          id="earth"
          position="0 0 -1"
          radius="0.5"
          material={`src: ${earth}`}
          animation__rotate="property: rotation; dur: 8000; easing: linear; dir: normal; from: 0 0 0; to: 0 360 0; loop: true;"
        ></a-sphere>
        
        {/* Moon Sphere */}
        <a-entity
          id="moon-orbit"
          position="0 0 -1"
          animation__orbit="property: rotation; dur: 5000; easing: linear; dir: normal; from: 0 0 0; to: 0 360 0; loop: true;"
        >
          <a-sphere
            id="moon"
            position="0.75 0 0"
            radius="0.15"
            material={`src: #moon-sphere-texture`}
          ></a-sphere>
        </a-entity>
      </a-entity>
    </a-scene>
  );
};

export default ArApp3;
