"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function HomeSection() {
    return (
        <div className="w-full bg-[#111] text-white py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* BLACK FRIDAY */}
                <div>
                    <h2 className="text-yellow-400 text-xl font-bold mb-3">BLACK FRIDAY</h2>

                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={20}
                        className="rounded-xl overflow-hidden"
                    >
                        <SwiperSlide>
                            <img
                                src="/images/black-friday-1.jpg"
                                alt="Black Friday 1"
                                className="rounded-xl w-full"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                src="/images/black-friday-2.jpg"
                                alt="Black Friday 2"
                                className="rounded-xl w-full"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                src="/images/black-friday-3.jpg"
                                alt="Black Friday 3"
                                className="rounded-xl w-full"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* NEW PRODUCTS */}
                <div>
                    <h2 className="text-yellow-400 text-xl font-bold mb-3">NEW PRODUCTS</h2>

                    <img
                        src="/images/new-products.jpg"
                        alt="New Products"
                        className="rounded-xl w-full"
                    />
                </div>

                {/* SALES */}
                <div>
                    <h2 className="text-yellow-400 text-xl font-bold mb-3">SALES</h2>

                    <img
                        src="/images/sales.jpg"
                        alt="Sales"
                        className="rounded-xl w-full"
                    />
                </div>

            </div>
        </div>
    );
}
