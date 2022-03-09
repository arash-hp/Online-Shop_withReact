import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Grid } from '@mui/material';
import pic1 from '../../../../../asset/images/Cat-Image-Outdoor-Dining-832x864.jpg';
import pic2 from '../../../../../asset/images/Cat-Image-Sleeping-Bags-Mats-832x864.jpg';
import pic3 from '../../../../../asset/images/FURNITURE-CAMP-832x864px.jpg';
import pic4 from '../../../../../asset/images/PACKS-BAGS-CAMP-832x864px.jpg';
import pic5 from '../../../../../asset/images/TENTS-CAMP-832x864px.jpg';


export function Slider() {
  return (<Grid container justifyContent={'center'}>
    <Grid container sx={{width:864,height:400}}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={pic1} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={pic2} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={pic3} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={pic4} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={pic5} alt="Logo" /></SwiperSlide>
      </Swiper>
    </Grid>
  </Grid>
  );
}
