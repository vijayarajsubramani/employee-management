import React from 'react'
import Image from "next/image";
type Tprops = {
  thumbnail?: any
}

const PhotoView: React.FC<Tprops> = ({ thumbnail }) => {
  const url=`http://localhost:3000/${thumbnail}`
  return (
    <>
      <div>
          <Image src={url} alt='imgae upload' width='50' height='50' />
      </div>
    </>
  )
}
export default PhotoView