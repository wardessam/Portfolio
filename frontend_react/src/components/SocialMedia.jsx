import React from 'react';
import { BsLinkedin, BsInstagram,BsGithub} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://github.com/wardessam'> <BsGithub/></a>
    </div>
    <div>
     <a href='https://www.linkedin.com/in/wardshan-essam-612aab1a8/'> <BsLinkedin /></a>
    </div>
    <div>
      <a href='https://www.facebook.com/rose.essam.108/'><FaFacebookF /></a>
    </div>
   
  </div>
);

export default SocialMedia;