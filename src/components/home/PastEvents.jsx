import { useAnimate } from "framer-motion";
import React, { useRef } from "react";

import img1 from "../../assets/images/pastEvents/img1.jpg"
import img4 from "../../assets/images/pastEvents/img4.jpg"
import img6 from "../../assets/images/pastEvents/img6.jpg"
import img2 from "../../assets/images/pastEvents/img2.JPG"
import img3 from "../../assets/images/pastEvents/img3.JPG"
import img5 from "../../assets/images/pastEvents/img5.JPG"
import img7 from "../../assets/images/pastEvents/img7.JPG"
import img8 from "../../assets/images/pastEvents/img8.JPG"
import img9 from "../../assets/images/pastEvents/img9.JPG"
import img10 from "../../assets/images/pastEvents/img10.JPG"
import img11 from "../../assets/images/pastEvents/img11.JPG"
import img12 from "../../assets/images/pastEvents/img12.JPG"
import img13 from "../../assets/images/pastEvents/img13.JPG"
import img14 from "../../assets/images/pastEvents/img14.JPG"
import img15 from "../../assets/images/pastEvents/img15.JPG"
import img16 from "../../assets/images/pastEvents/img16.JPG"
import img17 from "../../assets/images/pastEvents/img17.JPG"
import img18 from "../../assets/images/pastEvents/img18.JPG"
import img19 from "../../assets/images/pastEvents/img19.JPG"
import img20 from "../../assets/images/pastEvents/img20.JPG"
import img21 from "../../assets/images/pastEvents/img21.JPG"
import img22 from "../../assets/images/pastEvents/img22.JPG"
import img23 from "../../assets/images/pastEvents/img23.JPG"
import img24 from "../../assets/images/pastEvents/img24.JPG"
import img25 from "../../assets/images/pastEvents/img25.JPG"
import img26 from "../../assets/images/pastEvents/img26.JPG"
import img27 from "../../assets/images/pastEvents/img27.JPG"
import img28 from "../../assets/images/pastEvents/img28.JPG"

const PastEvents = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[img1, img2, img3, img4, img5, img6, img7, img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28]}
    >
      <section className="grid h-screen w-full place-content-center bg-black">
        <p className="flex justify-center gap-2 font-bold uppercase z-50">
          <span className="text-white text-4xl md:text-8xl text-center" style={{ fontFamily: 'okami' }}>EXPLORE HESTIA</span>
        </p>
      </section>
    </MouseImageTrail>
  );
};

const MouseImageTrail = ({
  children,
  images,
  renderImageBuffer,
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();
  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;
      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;
    const el = document.querySelector(selector);

    if (!el) return;

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2 ? `rotate(${rotation}deg)` : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2 ? `rotate(-${rotation}deg)` : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      { opacity: [1, 0] },
      { ease: "linear", duration: 0.1, delay: 1 }
    );

    imageRenderCount.current++;
  };

  return (
    <div ref={scope} className="relative overflow-hidden" onMouseMove={handleMouseMove}>
      {children}
      {images.map((img, index) => (
        <img
          className="z-200 pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0"
          src={img}
          alt={`Event Image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};

export default PastEvents;
