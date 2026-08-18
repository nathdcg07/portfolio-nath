"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { serviceData } from '@/data';

const SliderServices = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="h-[400px] md:h-[340px] w-full"
        >

            {serviceData.map((item, index) => (
                <SwiperSlide key={index} >
                    <div className="flex flex-col justify-center p-6 h-[320px] md:h-[300px] rounded-lg cursor-pointer bg-white/10 backdrop-blur-sm group hover:bg-white/15 transition-all duration-300 border border-white/5 hover:border-pink-300 select-none">
                        <div className="mb-4 text-4xl text-pink-300 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div>
                        <div>
                            <h3 className="mb-2 text-lg text-white">{item.title}</h3>
                            <p className="text-sm text-gray-300 leading-normal line-clamp-4">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SliderServices;