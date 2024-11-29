import React, { useEffect, useRef } from "react";
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";

const Snow = () => {
  const videoRef = useRef(null);
  const targetEntityRef = useRef(null);

  // Ensure correct asset paths
  const learnIcon = new URL("../../../images/learn.png", import.meta.url).toString();
  const playVideo = new URL("../../../images/snow.mp4", import.meta.url).toString();
  const targetFile = new URL("../../../images/snow.mind", import.meta.url).toString();

  useEffect(() => {
    const videoElement = document.querySelector("#video");
    const targetEntity = document.querySelector("#mytarget");

    // Keep video paused initially
    videoElement.pause();

    targetEntity.addEventListener("targetFound", () => {
      console.log("target found");
      videoElement.currentTime = 0; // Start from the beginning
      videoElement.play(); // Play video when target is found
    });

    targetEntity.addEventListener("targetLost", () => {
      console.log("target lost");
      videoElement.pause(); // Pause video when target is lost
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
        <img id="learn-icon" crossorigin="anonymous" src={learnIcon} />
        <video
          id="video"
          autoPlay="false"
          loop="true"
          style={{ width: "100%", height: "auto" }}
          crossorigin="anonymous"
          playsinline
          webkit-playsinline
          src={playVideo}
        ></video>
      </a-assets>

      <a-camera
        position="0 0 0"
        look-controls="enabled: false"
        cursor="fuse: false; rayOrigin: mouse;"
        raycaster="far: 10000; objects: .clickable"
      ></a-camera>

      <a-entity id="mytarget" mytarget mindar-image-target="targetIndex:0">
        <a-video
          id="video-link"
          src="#video"
          position="0 -0.1 0"
          width="1"
          height="0.625"
        ></a-video>
        <a-image
          visible="false"
          class="clickable"
          src="#learn-icon"
          position="0 -0.38 0"
          height="0.15"
          width="0.4"
        ></a-image>
      </a-entity>
    </a-scene>
  );
};

export default Snow;
