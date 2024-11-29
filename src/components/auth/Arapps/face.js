import React from "react";
import "mind-ar/dist/mindar-face.prod.js";
import "aframe";
import "mind-ar/dist/mindar-face-aframe.prod.js";

function Face() {
  return (
    <div>
       <a-scene
       style={{height:"100vh",overflowY:"hidden"}}
        mindar-face="true"
        embedded
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
      >
        <a-camera active="true" position="0 0 0"></a-camera>
        <a-entity mindar-face-target="anchorIndex: 4">
          <a-sphere color="pink" radius="0.3"></a-sphere>
        </a-entity>
      </a-scene>
    </div>
  );
}
export default Face;
