import React, { useEffect, useRef } from "react";
import torn_paper from "../../assets/images/torn_paper.png"; // Torn paper remains constant
import img1 from '../../assets/images/eventSample/backgroundProshows.png'

const SponsorCard = ({ image ,align}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!image) return; // Ensure an image is provided

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const maskImage = new Image();
    const backgroundImage = new Image();

    maskImage.src = torn_paper;
    backgroundImage.src = img1; 

    maskImage.onload = () => {
      canvas.width = maskImage.width;
      canvas.height = maskImage.height;

      backgroundImage.onload = () => {

        ctx.drawImage(backgroundImage, 0, 0, maskImage.width, maskImage.height);

        ctx.globalCompositeOperation = "destination-in";
        ctx.drawImage(maskImage, 0, 0, maskImage.width, maskImage.height);
  
        ctx.globalCompositeOperation = "source-over";
      };
    };
  }, [image]); 

  return (
    <div className={`w-full max-w-sm sm:max-w-md md:max-w-2xl xl:max-w-4xl ${
        align === "left" ? "self-center text-center md:self-start md:text-left" : "self-center md:text-center md:self-end md:text-right"
      }`}>
      <canvas ref={canvasRef} className="w-full h-auto"></canvas>
    </div>
  );
};

export default SponsorCard;
