



import React, { useEffect, useRef, useState } from 'react';
import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ArApp2 = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };
  const videoRef = useRef(null);
  const targetEntityRef = useRef(null);
  const [isTargetVisible, setIsTargetVisible] = useState(false);
  const [isLearnButtonVisible, setIsLearnButtonVisible] = useState(false);
  const [isPreviewButtonVisible, setIsPreviewButtonVisible] = useState(true);

  // Ensure correct asset paths
  const learnIcon = new URL("../../../images/learn.png", import.meta.url).toString();
  const playVideo = new URL("../../../images/play5.mp4", import.meta.url).toString();
  const playPreview = new URL("../../../images/play.png", import.meta.url).toString();
  const targetFile = new URL("../../../images/targets4.mind", import.meta.url).toString();

 
       useEffect(()=>{
        const videoElement = document.querySelector("#video");
        const previewButton = document.querySelector("#play-preview-button");
        const learnButton = document.querySelector("#learn-button");
        const targetEntity = document.querySelector('#mytarget');
  
        // Keep video paused initially
        videoElement.pause();
  
        let isTargetVisible = false; // Flag to track target visibility
  
        previewButton.addEventListener('click', () => {
          previewButton.setAttribute("visible", false);
  
          // Ensure video restarts even on click
          videoElement.currentTime = 0;
          videoElement.play();
  
          // Clear existing timer directly (optional)
          clearTimeout(setTimeout(() => {}, 0)); // Empty setTimeout to clear timer
  
          isTargetVisible = true; // Mark target as visible after play button click
  
          // Schedule learn button visibility with 10 seconds delay
          const learnButtonTimer = setTimeout(() => {
            if (isTargetVisible) { // Check if target is still visible
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
        });
  
        targetEntity.addEventListener("targetFound", event => {
          console.log("target found");
          if (!isTargetVisible) { // Only if target was previously lost
            // Clear existing timer directly (optional)
            clearTimeout(setTimeout(() => {}, 0)); // Empty setTimeout to clear timer
          }
        });

       },[]) 
 
    
  

  return (
    <a-scene videohandler style={{height:"100vh"}}  mindar-image={`imageTargetSrc: ${targetFile}`} color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
    <a-assets>

    </a-assets>

    <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: 10000; objects: .clickable">
    </a-camera>

    <a-entity id="mytarget" mytarget mindar-image-target="targetIndex:0">
      <a-video id="video-link" src="#video" webkit-playsinline playsinline width="1" height="0.552" position="0 0 0"></a-video>
      <a-image visible="true" id="play-preview-button" class="clickable" src="#play-preview" alpha-test="0" width="0.2" height="0.2" position="0 0 0.1"></a-image>
      <a-image visible="false" id="learn-button" class="clickable" src="#learn-icon" position="0 -0.38 0" height="0.15" width="0.4"></a-image>
    </a-entity>
  </a-scene>
  );
};

export default ArApp2;
