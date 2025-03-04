import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import bg from "../../assets/images/proshow/bg_proshow.png"
import pro1 from '../../assets/images/proshow/pro1.png'
import prb1 from '../../assets/images/proshow/imageyellow.png'
import pro2 from '../../assets/images/proshow/pro2.png'
import pro3 from '../../assets/images/proshow/pro3.png'
import '../../styles/proshow.css'
import ProshowCard from './ProshowCard'

const proshowitem = [
    {imag:pro1,performer:"DJ STRELLA",date:"04 04 2025"},
    {imag:pro1,performer:"DJ STRELLA",date:"04 04 2025"},
    {imag:pro1,performer:"DJ STRELLA",date:"04 04 2025"},
]

function App() {
    
    const headingVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.8, 
                ease: "easeOut" 
            }
        }
    }
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    }
    
    return (
        <div>
            <div className="container mx-auto px-4 py-8 scroll-smooth ">
                <motion.h1 
                    className="text-center font-bold mb-8 lg:text-8xl md:text-6xl text-5xl" 
                    style={{ fontFamily: 'rubik'}}
                    initial="hidden"
                    animate="visible"
                    variants={headingVariants}
                >
                    PROSHOWS
                </motion.h1>
            </div>
            <motion.div 
                className='flex flex-col p-10 2xl:mr-64 2xl:ml-64 xl:mr-28 xl:ml-28   sm:mr-4 sm:ml-4  gap-10     '
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {
                    proshowitem.map((item,index)=>{
                        return(
                            <div className=' py-20 sm:py-32 lg:py-40 flex items-center'>
                            <ProshowCard 
                                key={index}
                                imgurl={item.imag} 
                                index={index} 
                                title={item.performer} 
                                date={item.date}
                            />
                            </div>
                        )
                    })
                }
            </motion.div>
        </div>
    )
}

export default App