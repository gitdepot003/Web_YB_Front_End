import React, { useEffect, useRef, useState } from 'react';
import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js'

const ArApp7 = () => {
  const videoRef = useRef(null);
  const targetEntityRef = useRef(null);
  const [isTargetVisible, setIsTargetVisible] = useState(false);
  const [isLearnButtonVisible, setIsLearnButtonVisible] = useState(false);
  const [isPreviewButtonVisible, setIsPreviewButtonVisible] = useState(true);

  // Ensure correct asset paths
  const learnIcon = new URL("../../../images/learn.png", import.meta.url).toString();
  const playVideo = new URL("../../../images/play.mp4", import.meta.url).toString();
  const playPreview = new URL("../../../images/play.png", import.meta.url).toString();
  const targetFile = new URL("../../../images/targets.mind", import.meta.url).toString();
  const phone = new URL("../../../images/pp.png", import.meta.url).toString();
  const email = new URL("../../../images/emails.png", import.meta.url).toString();
  const website = new URL("../../../images/website.png", import.meta.url).toString();
  const youtube = new URL("../../../images/youtube.png", import.meta.url).toString();
  const facebook = new URL("../../../images/facebook.png", import.meta.url).toString();
  const twitter = new URL("../../../images/twitter.png", import.meta.url).toString();

  useEffect(() => {
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
          learnButton.emit('startAnimation'); // Trigger the animation

          // Show social media buttons with animation
          document.querySelectorAll('.social-button').forEach(button => {
            button.setAttribute('visible', true);
            button.emit('startAnimation');
          });
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
      document.querySelectorAll('.social-button').forEach(button => button.setAttribute('visible', false));
      isTargetVisible = false; // Reset flag on target lost
    });

    targetEntity.addEventListener("targetFound", event => {
      console.log("target found");
      if (!isTargetVisible) { // Only if target was previously lost
        // Clear existing timer directly (optional)
        clearTimeout(setTimeout(() => {}, 0)); // Empty setTimeout to clear timer
      }
    });
  }, []);

  return (
    <a-scene videohandler style={{height:"100vh"}} mindar-image={`imageTargetSrc: ${targetFile}`} color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <img id="learn-icon" crossorigin="anonymous" src={learnIcon}/>
        <img id="play-preview" crossorigin="anonymous" src={playPreview} />
        <video id="video" autoplay="false" loop="true" style={{ width: '100%', height: 'auto' }} crossorigin="anonymous" src={playVideo}></video>
        <img id="facebook" crossorigin="anonymous" src={facebook} />
        <img id="youtube" crossorigin="anonymous" src={youtube} />
        <img id="twitter" crossorigin="anonymous" src={twitter} />
        <img id="email" crossorigin="anonymous" src={email} />
        <img id="website" crossorigin="anonymous" src={website} />
       
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: 10000; objects: .clickable">
      </a-camera>

      <a-entity id="mytarget" mindar-image-target="targetIndex:0">
        <a-video id="video-link" src="#video" webkit-playsinline playsinline width="1" height="0.552" position="0 0 0"
          animation__rotate="property: rotation; to: 0 360 0; dur: 5000; easing: easeInOutQuad; startEvents: startAnimation; loop: true"
        ></a-video>
        <a-image visible="true" id="play-preview-button" class="clickable" src="#play-preview" alpha-test="0" width="0.2" height="0.2" position="0 0 0.1"></a-image>
        <a-image 
          visible="false" 
          id="learn-button" 
          class="clickable" 
          src="#learn-icon" 
          position="0 -0.48 0" 
          height="0.15" 
          width="0.4"
          animation__scale="property: scale; to: 1.5 1.5 1.5 1.5; dur: 1000; easing: easeInOutQuad; startEvents: startAnimation; loop: false"
        >
        </a-image>
        <a-image visible="false" id="facebook-button" class="clickable social-button" src="#facebook" position="0.3 -0.78 0" height="0.1" width="0.1"
          animation__rotate="property: rotation; to: 0 360 0; dur: 5000; easing: easeInOutQuad; startEvents: startAnimation; loop: true"
        ></a-image>
        <a-image visible="false" id="youtube-button" class="clickable social-button" src="#youtube" position="0.2 -0.78 0" height="0.1" width="0.1"
          animation__rotate="property: rotation; to: 0 360 0; dur: 5000; easing: easeInOutQuad; startEvents: startAnimation; loop: true"
        ></a-image>
        <a-image visible="false" id="twitter-button" class="clickable social-button" src="#twitter" position="0.1 -0.78 0" height="0.1" width="0.1"
          animation__rotate="property: rotation; to: 0 360 0; dur: 5000; easing: easeInOutQuad; startEvents: startAnimation; loop: true"
        ></a-image>
        <a-image visible="false" id="email-button" class="clickable social-button" src="#email" position="0 -0.78 0" height="0.1" width="0.1"
          animation__rotate="property: rotation; to: 0 360 0; dur: 5000; easing: easeInOutQuad; startEvents: startAnimation; loop: true"
        ></a-image>
        <a-image visible="false" id="website-button" class="clickable social-button" src="#website" position="-0 -0.78 0" height="0.1" width="0.1"
          animation__rotate="property: rotation; to: 0 360 0; dur: 5000; easing: easeInOutQuad; startEvents: startAnimation; loop: true"
        ></a-image>
        
      </a-entity>
    </a-scene>
  );
}

export default ArApp7;
