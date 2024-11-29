import React, { useEffect, useRef } from "react";
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";

const Bombay4 = () => {
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
  const playVideo1 = "https://youthbuzzdata.s3.ap-south-1.amazonaws.com/bombayvideo1.mp4"
  const playVideo2 = "https://youthbuzzdata.s3.ap-south-1.amazonaws.com/bombayvideo2.mp4"
  const playVideo3 = "https://youthbuzzdata.s3.ap-south-1.amazonaws.com/bombayvideo3.mp4"
  const playVideo4 = "https://youthbuzzdata.s3.ap-south-1.amazonaws.com/bombayvideo4.mp4"
  const playVideo5 = "https://youthbuzzdata.s3.ap-south-1.amazonaws.com/bombayvideo5.mp4"
  const playVideo6 = "https://youthbuzzdata.s3.ap-south-1.amazonaws.com/bombayvideo6.mp4"
  const playVideo7 = "https://youthbuzzdata.s3.ap-south-1.amazonaws.com/bombayvideo7.mp4"
  const playVideo8 = "https://youthbuzzdata.s3.ap-south-1.amazonaws.com/bombayvideo8.mp4"
  const playVideo9 = "https://youthbuzzdata.s3.ap-south-1.amazonaws.com/bombayvideo9.mp4"
  const playVideo10 ="https://youthbuzzdata.s3.ap-south-1.amazonaws.com/bombayvideo10.mp4"

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
    handleTargetEvents(videoRef4, targetRef4);
    handleTargetEvents(videoRef5, targetRef5);
    handleTargetEvents(videoRef6, targetRef6);
    handleTargetEvents(videoRef7, targetRef7);
    handleTargetEvents(videoRef8, targetRef8);
    handleTargetEvents(videoRef9, targetRef9);
    handleTargetEvents(videoRef10, targetRef10);
  }, []);

  return (
    <a-scene videohandler style={{height:"100vh"}}  mindar-image={`imageTargetSrc: ${targetFile}`} color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">      <a-assets>
        <video id="video1" ref={videoRef1} src={playVideo1} autoPlay={false} loop="true" playsinline crossorigin="anonymous"></video>
        <video id="video2" ref={videoRef2} src={playVideo2} autoPlay={false} loop="true" playsinline crossorigin="anonymous"></video>
        <video id="video3" ref={videoRef3} src={playVideo3} autoPlay={false} loop="true" playsinline crossorigin="anonymous"></video>
        <video id="video4" ref={videoRef4} src={playVideo4} autoPlay={false} loop="true" playsinline crossorigin="anonymous"></video>
        <video id="video5" ref={videoRef5} src={playVideo5} autoPlay={false} loop="true" playsinline crossorigin="anonymous"></video>
        <video id="video6" ref={videoRef6} src={playVideo6} autoPlay={false} loop="true" playsinline crossorigin="anonymous"></video>
        <video id="video7" ref={videoRef7} src={playVideo7} autoPlay={false} loop="true" playsinline crossorigin="anonymous"></video>
        <video id="video8" ref={videoRef8} src={playVideo8} autoPlay={false} loop="true" playsinline crossorigin="anonymous"></video>
        <video id="video9" ref={videoRef9} src={playVideo9} autoPlay={false} loop="true" playsinline crossorigin="anonymous"></video>
        <video id="video10" ref={videoRef10} src={playVideo10} autoPlay={false} loop="true" playsinline crossorigin="anonymous"></video>
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

      <a-entity id="mytarget4" ref={targetRef4} mindar-image-target="targetIndex: 3">
        <a-video src="#video4" position="0 -0.1 0" width="1" height="0.662"></a-video>
      </a-entity>

      <a-entity id="mytarget5" ref={targetRef5} mindar-image-target="targetIndex: 4">
        <a-video src="#video5" position="0 -0.1 0" width="1" height="0.662"></a-video>
      </a-entity>

      <a-entity id="mytarget6" ref={targetRef6} mindar-image-target="targetIndex: 5">
        <a-video src="#video6" position="0 -0.1 0" width="1" height="0.662"></a-video>
      </a-entity>
      <a-entity id="mytarget7" ref={targetRef7} mindar-image-target="targetIndex: 6">
        <a-video src="#video7" position="0 -0.1 0" width="1" height="0.662"></a-video>
      </a-entity>
      
      <a-entity id="mytarget8" ref={targetRef8} mindar-image-target="targetIndex: 7">
        <a-video src="#video8" position="0 -0.1 0" width="1" height="0.662"></a-video>
      </a-entity>
      <a-entity id="mytarget9" ref={targetRef9} mindar-image-target="targetIndex: 8">
        <a-video src="#video9" position="0 -0.1 0" width="1" height="0.662"></a-video>
      </a-entity>
      <a-entity id="mytarget10" ref={targetRef10} mindar-image-target="targetIndex: 9">
        <a-video src="#video10" position="0 -0.1 0" width="1" height="0.662"></a-video>
      </a-entity>
      </a-scene>
      
    )}

    export default Bombay4