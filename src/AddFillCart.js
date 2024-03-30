import React from 'react';

import Boywork from './Section1/c2.jpg'
import { RiArrowDropRightLine } from "react-icons/ri";
import Gift from './Section4/Kitchen.jpg';
import Yellow from './Section4/Kitchen.jpg';
import { CgServerless } from "react-icons/cg";
import { MdContactPage } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Addfilecard= () => {
  return (
    <Row className='sub-cate-gory'>
    <Col className='sub-class'>
    <div className='sub-training'>
    <img src={Boywork} alt='text'></img>
   
    <div className='sub-con-tent'>
    <div className='go-o-gles'>Google Ads Training 2021:Profit With Pay</div>
    <div className='les-son-6'><CgServerless style={{marginTop:"4px"}}/> Lesson:6
    <div className='st-u-de-nts'><MdContactPage /> Student :198</div><div className='aw-er-age'><GiTrophyCup />Awerage</div></div>
    <img src={Yellow} alt='text' className='poi-nts'></img>
    <div className='pai-nts-3'>Paints:75/100
    <div className='days-er'>Days:56</div></div>
    <div className='jon-3'><img src={Gift}alt='text' width= "10%" height="50px"></img><div className='kan-te-r'>Jon Kantner<br /> SEO</div>
    <div className='letgo'> Let's Go <RiArrowDropRightLine /></div>
    </div>
    </div> </div>
</Col>
</Row>
    
  )
}
export default Addfilecard;