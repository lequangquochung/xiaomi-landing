"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./TopProducts.module.scss";
import "swiper/css";
import "swiper/css/navigation";

const products = [
    { id: 1, image: "/images/product_1.png" },
    { id: 2, image: "/images/product_2.png" },
    { id: 3, image: "/images/product_3.png" },
    { id: 4, image: "/images/product_4.png" },
    { id: 5, image: "/images/product_5.png" },
    { id: 6, image: "/images/product_6.png" },
];

export default function TopProducts() {
    return (
        <div className="wrapperBlock">
            <div className={`${styles.inner} relative overflow-hidden`}>
                <div className="flex items-center justify-between mb-3">
                    <h2 className="titleTopic">
                        TOP PRODUCTS
                    </h2>
                    <div className="flex gap-3">
                        <button
                            className={`slideButton tp-arrow-prev`}
                            aria-label="Previous"
                        >
                            ‹
                        </button>
                        <button
                            className={`slideButton tp-arrow-next`}
                            aria-label="Next"
                        >
                            ›
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".tp-arrow-next",
                        prevEl: ".tp-arrow-prev",
                    }}
                    slidesPerView={1}
                    spaceBetween={0}
                    breakpoints={{
                        360: {
                            slidesPerView: 2.7,
                            spaceBetween: 0,
                        },
                        640: {
                            slidesPerView: 3.5,
                            spaceBetween: 0,
                        },
                        1280: {
                            slidesPerView: 5.2,
                            spaceBetween: 32,
                        },
                    }}
                >
                    {products.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className={`${styles.productCard} md:h-[320px] lg:h-[340px] rounded-2xl 
              overflow-hidden bg-black cursor-pointer transition-transform`}>
                
                                <img src={item.image}
                                    alt={`Top product ${item.id}`}
                                    className={` w-full h-full object-fill`}
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

