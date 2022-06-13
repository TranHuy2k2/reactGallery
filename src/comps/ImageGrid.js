import React from 'react'
import useFireStore from '../hooks/useFireStore'
import {motion} from 'framer-motion'
function ImageGrid({setSelectedImg}){
    const {docs} = useFireStore('images');
    return (
        <div className='img-grid'>
            {
                docs && docs.map((doc) => {
                    return (
                        <motion.div className='img-wrap'
                            layout
                            whileHover={{opacity : 1}}
                            onClick={() => {
                                setSelectedImg(doc.url);
                            }}
                            >
                                <motion.img
                                 initial={{opacity: 0}}
                                 animate={{opacity: 1}}
                                 transition={{delay: 1}}
                                 src={doc.url} alt="uploadImg"></motion.img>
                        </motion.div>
                    )
                })
            }
        </div>
    )
}

export default ImageGrid;