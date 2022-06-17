import React from 'react'
import {  BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className='app__social'>
    <div>
        <FaFacebook />
      </div>

      <div>
        <BsInstagram />
       </div>

      <div>
        <AiFillGithub />
       </div>
    </div>
  )
}

export default SocialMedia