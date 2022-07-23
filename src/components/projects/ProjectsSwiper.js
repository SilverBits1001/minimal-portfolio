import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectsDB from "./ProjectsDB";
import SingleProject from "./SingleProject";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import { Container } from "react-bootstrap";

const swiperParallax = {
    fast: '-100',
    medium: '-200',
    slow: '-300'
}

export default function ProjectsSwiper() {
    return (
        <Container id='projects' >
            <h2 className='mb-3 ms-5'>
                Projects
            </h2>

            <Swiper
               pagination={{
                clickable: true,
                dynamicBullets:true,
              }}
                style={{
                    "--swiper-navigation-color": "rgb(240, 84, 22)",
                    "--swiper-pagination-color": "#7404dd",
                }}
                speed={600}
                parallax={true}
                navigation={true}
                modules={[ Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
 
                    data-swiper-parallax="-23%"
                ></div>
                {ProjectsDB.map((project, index) => (
                    <SwiperSlide key={index}>

                        <SingleProject project={project} parallax={swiperParallax} />

                    </SwiperSlide>
                ))}


            </Swiper>
        </Container>
    );
}



/* {ProjectsDB.map((project, index) => (
    <SwiperSlide>
        <SingleProject key={index} project={project} />

    </SwiperSlide>
))} */