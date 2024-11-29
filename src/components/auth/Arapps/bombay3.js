import React, { useEffect, useRef } from "react";
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";

const Bombay3 = () => {
  // Refs for each video and target
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);
  const videoRef6 = useRef(null);
  const videoRef7 = useRef(null);
  const videoRef8 = useRef(null);
  const videoRef9 = useRef(null);
  const videoRef10 = useRef(null);

  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
  const targetRef4 = useRef(null);
  const targetRef5 = useRef(null);
  const targetRef6 = useRef(null);
  const targetRef7 = useRef(null);
  const targetRef8 = useRef(null);
  const targetRef9 = useRef(null);
  const targetRef10 = useRef(null);
  const targetFile = new URL("../../../images/bombay/Bombay.mind", import.meta.url).toString();
  const playVideo1 = new URL("../../../images/comp/bombayvideo1.mp4", import.meta.url).toString();
  const playVideo2 = new URL("../../../images/comp/bombayvideo2.mp4", import.meta.url).toString();
  const playVideo3 = new URL("../../../images/comp/bombayvideo3.mp4", import.meta.url).toString();
 
  const targetFile1 = new URL("../../../images/bombay/Artarget1.mind", import.meta.url).toString();
  const targetFile2 = new URL("../../../images/bombay/Artarget2.mind", import.meta.url).toString();
  const targetFile3 = new URL("../../../images/bombay/Artarget3.mind", import.meta.url).toString();
  const targetFile4 = new URL("../../../images/bombay/Artarget4.mind", import.meta.url).toString();
  const targetFile5 = new URL("../../../images/bombay/Artarget5.mind", import.meta.url).toString();
  const targetFile6 = new URL("../../../images/bombay/Artarget6.mind", import.meta.url).toString();
  const targetFile7 = new URL("../../../images/bombay/Artarget7.mind", import.meta.url).toString();
  const targetFile8 = new URL("../../../images/bombay/Artarget8.mind", import.meta.url).toString();
  const targetFile9 = new URL("../../../images/bombay/Artarget9.mind", import.meta.url).toString();
  const targetFile10 = new URL("../../../images/bombay/Artarget10.mind", import.meta.url).toString();

  useEffect(() => {
    const handleTargetEvents = (videoRef, targetRef) => {
      const videoElement = videoRef.current;
      const targetEntity = targetRef.current;

      videoElement.pause();

      targetEntity.addEventListener("targetFound", () => {
        console.log("target found");
        videoElement.currentTime = 0;
        videoElement.play();
      });

      targetEntity.addEventListener("targetLost", () => {
        console.log("target lost");
        videoElement.pause();
      });
    };

    // Add event listeners for all targets and videos
    handleTargetEvents(videoRef1, targetRef1);
    handleTargetEvents(videoRef2, targetRef2);
    handleTargetEvents(videoRef3, targetRef3);

  }, []);

  return (
    <a-scene videohandler style={{height:"100vh"}}  mindar-image={`imageTargetSrc: ${targetFile}`} color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">      <a-assets>
        <video id="video1" ref={videoRef1} src={playVideo1} autoPlay={false} loop="true" playsinline crossorigin="anonymous"></video>
        <video id="video2" ref={videoRef2} src={playVideo2} autoPlay={false} loop="true" playsinline crossorigin="anonymous"></video>
        <video id="video3" ref={videoRef3} src={playVideo3} autoPlay={false} loop="true" playsinline crossorigin="anonymous"></video>
       
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: 10000; objects: .clickable"></a-camera>

      <a-entity id="mytarget1" ref={targetRef1} mindar-image-target="targetIndex: 0">
        <a-video src="#video1" position="0 -0.1 0" width="1" height="0.662"></a-video>
      </a-entity>

      <a-entity id="mytarget2" ref={targetRef2} mindar-image-target="targetIndex: 1">
        <a-video src="#video2" position="0 -0.1 0" width="1" height="0.662"></a-video>
      </a-entity>

      <a-entity id="mytarget3" ref={targetRef3} mindar-image-target="targetIndex: 2">
        <a-video src="#video3" position="0 -0.1 0" width="1" height="0.662"></a-video>
      </a-entity>

      </a-scene>
      
    )}

    export default Bombay3