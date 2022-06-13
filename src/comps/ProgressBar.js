import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import {motion} from 'framer-motion'
function ProgressBar({file, setFile}){
    const {progress, error, url} = useStorage(file);
    console.log(progress, url);
    useEffect(() => {
        if (url){
            setFile(null);
        }
    }, [url])
    return (
        <motion.div
         initial={{width: 0}}
         animate={{width: progress + '%'}}
         className='progress-bar'></motion.div>
    )
}

export default ProgressBar;