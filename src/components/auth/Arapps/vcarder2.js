import React, { useEffect, useRef, useState } from 'react';
import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

const ArApp8 = () => {
  const videoRef = useRef(null);
  const targetEntityRef = useRef(null);
  const [isTargetVisible, setIsTargetVisible] = useState(false);
  const [isPreviewButtonVisible, setIsPreviewButtonVisible] = useState(true);

  // Ensure correct asset paths
  const playVideo = new URL("../../../images/play.mp4", import.meta.url).toString();
  const playPreview = new URL("../../../images/play.png", import.meta.url).toString();
  const targetFile = new URL("../../../images/targets.mind", import.meta.url).toString();
  const Services = new URL("../../../images/Services.png", import.meta.url).toString();
  const contact = new URL("../../../images/contact.png", import.meta.url).toString();
  const MileStones = new URL("../../../images/MileStones.png", import.meta.url).toString();
  const Certified = new URL("../../../images/Certified.png", import.meta.url).toString();
  const Clients = new URL("../../../images/Clients.png", import.meta.url).toString();
  const about = new URL("../../../images/about.png", import.meta.url).toString();
  const aboutus = new URL("../../../images/Aboutus.png", import.meta.url).toString();
  const servicess = new URL("../../../images/servicess.png", import.meta.url).toString();
  const clientss = new URL("../../../images/clientss.png", import.meta.url).toString();
  const contactss = new URL("../../../images/contacts.png", import.meta.url).toString();
  const Milestones = new URL("../../../images/milestone.png", import.meta.url).toString();
  const Certifieds = new URL("../../../images/certifieds.png", import.meta.url).toString();

  useEffect(() => {
    const videoElement = document.querySelector("#video");
    const previewButton = document.querySelector("#play-preview-button");
    const targetEntity = document.querySelector('#mytarget');
    const aboutImage = document.querySelector("#about-image");
    const clientsImage = document.querySelector("#clients-image");
    const servicesImage = document.querySelector("#services-image");
    const contactImage = document.querySelector("#contact-image");
    const milestonesImage = document.querySelector("#milestones-image");
    const certifiedsImage = document.querySelector("#certifieds-image");

    const buttons = {
      about: document.querySelector("#facebook-button"),
      clients: document.querySelector("#twitter-button"),
      services: document.querySelector("#youtube-button"),
      contact: document.querySelector("#contact-button"),
      milestones: document.querySelector("#milestones-button"),
      certifieds: document.querySelector("#certifieds-button"),
    };

    // Keep video paused initially
    videoElement.pause();

    let isTargetVisible = false; // Flag to track target visibility

    previewButton.addEventListener('click', () => {
      previewButton.setAttribute("visible", false);

      // Ensure video restarts even on click
      videoElement.currentTime = 0;
      videoElement.play();

      isTargetVisible = true; // Mark target as visible after play button click

      // Show social media buttons with animation after 10 seconds
      setTimeout(() => {
        if (isTargetVisible) { // Check if target is still visible
          document.querySelectorAll('.social-button').forEach(button => {
            button.setAttribute('visible', true);
            button.emit('startAnimation');
          });
        }
      }, 10000); // 10000 milliseconds = 10 seconds
    });

    targetEntity.addEventListener("targetLost", () => {
      console.log("target lost");
      videoElement.pause();
      previewButton.setAttribute("visible", true);
      document.querySelectorAll('.social-button').forEach(button => button.setAttribute('visible', false));
      hideAllImages();
      isTargetVisible = false; // Reset flag on target lost
    });

    targetEntity.addEventListener("targetFound", () => {
      console.log("target found");
      if (!isTargetVisible) { // Only if target was previously lost
        clearTimeout(setTimeout(() => {}, 0)); // Empty setTimeout to clear timer
      }
    });

    // Helper function to hide all images
    const hideAllImages = () => {
      aboutImage.setAttribute('visible', false);
      clientsImage.setAttribute('visible', false);
      servicesImage.setAttribute('visible', false);
      contactImage.setAttribute('visible', false);
      milestonesImage.setAttribute('visible', false);
      certifiedsImage.setAttribute('visible', false);
    };

    // Event listeners for buttons to toggle visibility of images
    buttons.about.addEventListener('click', () => {
      hideAllImages(); // Hide all images first
      aboutImage.setAttribute('visible', true); // Show the about image
    });

    buttons.clients.addEventListener('click', () => {
      hideAllImages(); // Hide all images first
      clientsImage.setAttribute('visible', true); // Show the clients image
    });

    buttons.services.addEventListener('click', () => {
      hideAllImages(); // Hide all images first
      servicesImage.setAttribute('visible', true); // Show the services image
    });

    buttons.contact.addEventListener('click', () => {
      hideAllImages(); // Hide all images first
      contactImage.setAttribute('visible', true); // Show the contact image
    });

    buttons.milestones.addEventListener('click', () => {
      hideAllImages(); // Hide all images first
      milestonesImage.setAttribute('visible', true); // Show the milestones image
    });

    buttons.certifieds.addEventListener('click', () => {
      hideAllImages(); // Hide all images first
      certifiedsImage.setAttribute('visible', true); // Show the certifieds image
    });

  }, []);

  return (
    <a-scene  videohandler style={{ height: "100vh" }} mindar-image={`imageTargetSrc: ${targetFile}`} color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <img id="play-preview" crossorigin="anonymous" src={playPreview} />
        <video id="video" autoplay="false" loop="true" style={{ width: '100%', height: 'auto' }} crossorigin="anonymous" src={playVideo}></video>
        <img id="Certified" crossorigin="anonymous" src={Certified} />
        <img id="Milestone" crossorigin="anonymous" src={MileStones} />
        <img id="Clients" crossorigin="anonymous" src={Clients} />
        <img id="Services" crossorigin="anonymous" src={Services} />
        <img id="contact" crossorigin="anonymous" src={contact} />
        <img id="about" crossorigin="anonymous" src={about} />
        <img id="aboutus" crossorigin="anonymous" src={aboutus} />
        <img id="clientss" crossorigin="anonymous" src={clientss} />
        <img id="servicess" crossorigin="anonymous" src={servicess} />
        <img id="contactsss" crossorigin="anonymous" src={contactss} />
        <img id="milestones" crossorigin="anonymous" src={Milestones} />
        <img id="certifieds" crossorigin="anonymous" src={Certifieds} />
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: 10000; objects: .clickable">
      </a-camera>

      <a-entity id="mytarget" mindar-image-target="targetIndex:0">
        <a-video id="video-link" crossorigin="anonymous" src="#video" webkit-playsinline playsinline width="1" height="0.552" position="0 0 0"
          animation__rotate="property: rotation; to: 0 360 0; dur: 5000; easing: easeInOutQuad; startEvents: startAnimation; loop: true"
        ></a-video>
        <a-image visible="true" id="play-preview-button" class="clickable" src="#play-preview" alpha-test="0" width="0.2" height="0.2" position="0 0 0.1"></a-image>
        
        {/* Social buttons */}
        <a-image visible="false" id="facebook-button" class="clickable social-button" src="#aboutus" position="-0.5 0.5 0" height="0.2" width="0.4"></a-image>
        <a-image visible="false" id="twitter-button" class="clickable social-button" src="#Clients" position="0.5 0.5 0" height="0.2" width="0.4"></a-image>
        <a-image visible="false" id="youtube-button" class="clickable social-button" src="#Services" position="0 0.5 0" height="0.2" width="0.4"></a-image>
        <a-image visible="false" id="contact-button" class="clickable social-button" src="#contact" position="-0.5 -0.78 0" height="0.2" width="0.4"></a-image>
        <a-image visible="false" id="milestones-button" class="clickable social-button" src="#Milestone" position="0 -0.78 0" height="0.2" width="0.4"></a-image>
        <a-image visible="false" id="certifieds-button" class="clickable social-button" src="#Certified" position="0.5 -0.78 0" height="0.2" width="0.4"></a-image>

        {/* Image displays for buttons */}
        <a-image visible="false" id="about-image" src="#about" position="0 1 0" height="0.4" width="1"></a-image>
        <a-image visible="false" id="clients-image" src="#clientss" position="0 1 0" height="0.4" width="1"></a-image>
        <a-image visible="false" id="services-image" src="#servicess" position="0 1 0" height="0.4" width="1"></a-image>
        <a-image visible="false" id="contact-image" src="#contactsss" position="0 1 0" height="0.4" width="1"></a-image>
        <a-image visible="false" id="milestones-image" src="#milestones" position="0 1 0" height="0.4" width="1"></a-image>
        <a-image visible="false" id="certifieds-image" src="#certifieds" position="0 1 0" height="0.4" width="1"></a-image>
      </a-entity>
    </a-scene>
  );
};

export default ArApp8;
