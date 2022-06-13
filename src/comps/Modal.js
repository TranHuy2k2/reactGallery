import React from "react";
import {motion} from 'framer-motion'
function Modal({selectedImg, setSelectedImg}) {
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')){
            setSelectedImg(null)
        }
    }
    return (
        <motion.div
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         className="backdrop" onClick={handleClick}>
            <motion.img
             initial={{y:'-100vh', opacity: 0}}
             animate={{y:0, opacity: 1}}
             src={selectedImg} alt="enlarged-pic" />
        </motion.div>
    )
}

export default Modal;