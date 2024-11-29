import React, { useEffect, useRef, useState } from 'react';
import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

const ArApp = () => {
  const videoRef = useRef(null);
  const targetEntityRef = useRef(null);
  const [isTargetVisible, setIsTargetVisible] = useState(false);
  const [isLearnButtonVisible, setIsLearnButtonVisible] = useState(false);
  const [isPreviewButtonVisible, setIsPreviewButtonVisible] = useState(true);
  const [isFocusVisible, setIsFocusVisible] = useState(false); // Initially hidden

  // Ensure correct asset paths
  const learnIcon = new URL("../../../images/learn.png", import.meta.url).toString();
  const playVideo = new URL("../../../images/play.mp4", import.meta.url).toString();
  const playPreview = new URL("../../../images/play.png", import.meta.url).toString();
  const targetFile = new URL("../../../images/targets.mind", import.meta.url).toString();

  useEffect(() => {
    const videoElement = document.querySelector("#video");
    const previewButton = document.querySelector("#play-preview-button");
    const learnButton = document.querySelector("#learn-button");
    const targetEntity = document.querySelector('#mytarget');

    // Keep video paused initially
    videoElement.pause();

    let isTargetVisible = false; // Flag to track target visibility

    // Show focus message after 5 seconds of opening the AR scene
    const focusTimer = setTimeout(() => {
      setIsFocusVisible(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    previewButton.addEventListener('click', () => {
      previewButton.setAttribute("visible", false);

      // Ensure video restarts even on click
      videoElement.currentTime = 0;
      videoElement.play();

      isTargetVisible = true; // Mark target as visible after play button click

      // Schedule learn button visibility with 10 seconds delay
      const learnButtonTimer = setTimeout(() => {
        if (isTargetVisible) {
          learnButton.setAttribute("visible", true);
        }
      }, 10000); // 10000 milliseconds = 10 seconds
    });

    learnButton.addEventListener('click', () => {
      videoElement.pause();
      previewButton.setAttribute("visible", true);
      learnButton.setAttribute("visible", false);
      window.open("https://www.youthbuzz.in", '_blank');
    });

    targetEntity.addEventListener("targetLost", event => {
      console.log("target lost");
      videoElement.pause();
      previewButton.setAttribute("visible", true);
      learnButton.setAttribute("visible", false);
      isTargetVisible = false; // Reset flag on target lost
      setIsFocusVisible(true); // Show focus message again when the target is lost
    });

    targetEntity.addEventListener("targetFound", event => {
      console.log("target found");
      clearTimeout(focusTimer); // Clear any pending focus timer
      setIsFocusVisible(false); // Hide the focus message when the target is found
    });

    return () => {
      clearTimeout(focusTimer); // Cleanup timeout when component unmounts
    };
  }, []);

  return (
    <div>
      {/* Focus message div positioned above the scanner */}
      {isFocusVisible && (
        <div
          id="focus"
          style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '10px 20px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            borderRadius: '8px',
            zIndex: 10, // Ensures it's on top of the AR scene
            textAlign: 'center',
            fontSize: '18px',
          }}
        >
          Focus on the front side of the card
        </div>
      )}

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
          <img id="learn-icon"  src={learnIcon} />
          <img id="play-preview" src={playPreview} />
          <video
            id="video"
            autoplay="false"
            loop="true"
            style={{ width: '100%', height: 'auto' }}
            crossorigin="anonymous"
            src={playVideo}
          ></video>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: 10000; objects: .clickable">
        </a-camera>

        <a-entity id="mytarget" mytarget mindar-image-target="targetIndex:0">
          <a-video id="video-link" src="#video" webkit-playsinline playsinline width="1" height="0.662" position="0 -0.1 0"></a-video>
          <a-image visible="true" id="play-preview-button" class="clickable" src="#play-preview" alpha-test="0" width="0.2" height="0.2" position="0 -0.1 0.1"></a-image>
          <a-image visible="false" id="learn-button" class="clickable" src="#learn-icon" position="0 -0.58 0" height="0.15" width="0.4"></a-image>
        </a-entity>
      </a-scene>
    </div>
  );
};

export default ArApp;
