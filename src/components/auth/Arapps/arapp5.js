import React from 'react';
import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js'

const ArApp4 = () => {
  // Ensure correct asset paths
  const targetFile = new URL("../../../images/targets8.mind", import.meta.url).toString();

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
      <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: 10000; objects: .clickable"></a-camera>

      <a-entity id="mytarget" mindar-image-target="targetIndex:0">
        {/* Large 3D Text */}
        <a-text value="Hello, friends"
                align="center"
                color="#FF0000"
                position="0 3 -5"  // Positioned farther from the camera
                rotation="0 0 0"  // No rotation
                width="10"        // Larger width for big text
                scale="2 2 2">    
        </a-text>

        {/* Add particle system */}
        <a-entity
          particle-system="preset: snow; particleCount: 1000; size: 0.1; color: #FFFFFF; velocityValue: 0 1 0; opacity: 0.7;">
        </a-entity>
      </a-entity>
    </a-scene>
  );
};

export default ArApp4;
