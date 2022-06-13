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
                        <div className='img-wrap'
                        onClick={() => {
                            setSelectedImg(doc.url);
                        }}
                        >
                            <img src={doc.url} alt="uploadImg"></img>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ImageGrid;