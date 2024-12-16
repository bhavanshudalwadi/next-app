import React from 'react'
import Image from 'next/image';
import LoaderImg from '@/../public/loader.gif';

const Loader = () => {
  return (
    <div>
        <Image src={LoaderImg} width={100} height={100} alt='Loading...'/>
    </div>
  )
}

export default Loader