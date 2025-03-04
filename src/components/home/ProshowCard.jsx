import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import '../../styles/proshow.css';

const ProshowCard = ({ imgurl, index, title, date }) => {
    const cardRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const isInview = useInView(cardRef, { amount: 0.3, once: false });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); 
            setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024); 
        };
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); 
    }, []);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const yTitle = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [50, 0, 50]
    );
    
    const yDate = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [70, 0, 70]
    );

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            x: index % 2 !== 0 ? -100 : 100 
        },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 1.2, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: { 
                duration: 0.7
            }
        }
    };

    const borderVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                delay: 0.3, 
                duration: 0.5 
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                delay: 0.4, 
                duration: 0.5 
            }
        }
    };

    return (
        <motion.div 
            className={`relative flex ${index % 2 !== 0 ? '' : 'flex-row-reverse'}`} 
            variants={cardVariants}
            animate={isInview ? "visible" : "hidden"}
            initial="hidden"
            ref={cardRef}
            style={{
                justifyContent: index % 2 !== 0 ? 'flex-start' : 'flex-end', 
                width: '100%'
            }}
        >
            <div className="flex justify-center items-center relative">
                <motion.div 
                    className="lg:w-[650px] sm:h-64 sm:w-[400px] h-52 w-[220px] lg:h-[400px] border-[#8E0A15] z-0 overflow-hidden"
                    variants={imageVariants}
                >
                    <img 
                        src={imgurl} 
                        className="object-fill w-full h-full canvas" 
                        alt={title}
                    />
                </motion.div>
                <motion.div
                    className={`lg:w-[650px] sm:h-64 sm:w-[400px] h-52 w-[220px] lg:h-[400px] border border-[#E6B62E] absolute z-10 
                            ${index % 4 === 0 ? 'mr-4 mb-4' :
                            index % 4 === 1 ? 'ml-4 mb-4' :
                            index % 4 === 2 ? 'ml-4 mt-4' :
                            'mr-4 mt-4'}`}
                    variants={borderVariants}
                ></motion.div>
            </div>
            <div className="relative w-full">
                <motion.h1 
                    className={`font-poppins lg:text-5xl md:text-3xl text-2xl text-white absolute ${index % 2 !== 0 ? 'mt-4 md:-left-10 -left-10' : 'mt-4 -right-10'}`}
                    variants={textVariants}
                    style={{ y: yTitle }}
                >
                    {title}
                </motion.h1>
                <motion.p 
                    style={{ fontFamily: "rubik", y: yDate }} 
                    className={`lg:text-5xl md:text-2xl text-sm text-white mt-20 absolute ${index % 2 !== 0 ? '' : 'right-0'}`}
                    transition={{ delay: 0.6 }}
                >
                    {date}
                </motion.p>
            </div>
        </motion.div>
    );
};

export default ProshowCard;