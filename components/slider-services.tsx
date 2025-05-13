"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { serviceData } from '@/data';

const SliderServices = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
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
            className="h-[380px] md:h-[340px] w-[370px] md:w-[650px]"
        >

            {serviceData.map((item, index) => (
                <SwiperSlide key={index} >
                    <div className="flex px-6 py-8 h-auto md:h-[290px] rounded-lg cursor-pointer bg-[rgba(253, 253, 253, 0.9)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(253, 253, 253, 0.9)] transition-all duration-300 hover:border-secondary border-2">
                        <div className="mb-4 text-4xl text-pink-300">{item.icon}</div>
                        <div>
                            <h3 className="mb-4 text-lg">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SliderServices;