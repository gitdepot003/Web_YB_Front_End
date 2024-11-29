import React, { useEffect } from "react";
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import * as THREE from "three";

const Heart = () => {
  const targetFile = new URL("../../../images/targets7.mind", import.meta.url).toString();
  const gltfModel = new URL("../../../images/scene.gltf", import.meta.url)

  return (
    <a-scene
      videohandler
      style={{ height: "100vh" }}
      mindar-image={`imageTargetSrc: ${targetFile}`}
      color-space="sRGB"
      renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: true"
    >
      <a-assets>
        <a-asset-item id="gltf-model" src={gltfModel} preload="true"></a-asset-item>

      </a-assets>

      <a-camera
        position="0 0 0"
  
      ></a-camera>

      <a-entity id="mytarget" mindar-image-target="targetIndex:0">
      <a-entity
        gltf-model={gltfModel}
        position="0 0 0"
        scale="0.1 0.1 0.1" 
        size="3"
      ></a-entity>
      </a-entity>
    </a-scene>
  );
};

export default Heart;
