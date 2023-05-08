import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './styles.scss'

// import required modules
import { Pagination, Mousewheel } from 'swiper'

export default function App() {
  return (
    <>
      <Swiper
        pagination={{ type: 'bullets', clickable: true }}
        mousewheel={{ forceToAxis: true }}
        modules={[Pagination, Mousewheel]}
        className="mySwiper"
      >
        {Array.from({ length: 5 }).map((d, i) => (
          <SwiperSlide key={i}>
            <img src={`https://picsum.photos/1280?random=${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
