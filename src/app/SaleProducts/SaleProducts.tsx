"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import styles from "./SaleProducts.module.scss";
import "swiper/css";

export default function PromoSection() {
    return (
        <div className="wrapperBlock !pt-0">

            <div className={` ${styles.inner} grid grid-cols-1 lg:grid-cols-2 gap-8 !pt-0`}>

                {/* LEFT: BLACK FRIDAY (50%) */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="titleTopic text-yellow-400 font-bold text-2xl">BLACK FRIDAY</h2>

                        <div className="flex gap-3">
                            <button className="slideButton nav-prev ">‹</button>
                            <button className="slideButton nav-next ">›</button>
                        </div>
                    </div>

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: ".nav-prev",
                            nextEl: ".nav-next",
                        }}
                        loop={true}
                        spaceBetween={20}
                        className={`${styles.imgShow} overflow-hidden`}
                    >
                        <SwiperSlide>
                            <img src="/images/black_friday.png" className="w-full h-full" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/black_friday.png" className="w-full h-full" />
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* RIGHT: NEW PRODUCTS + SALES (50%) */}
                <div className="grid grid-cols-2 gap-6">

                    {/* NEW PRODUCTS */}
                    <div className={`${styles.imgShow} space-y-4`}>
                        <h2 className={`${styles.fontSizeMobile} titleTopic !text-left`}>NEW PRODUCTS</h2>
                        <img src="/images/new_product.png" className="rounded-xl w-full " />
                    </div>

                    {/* SALES */}
                    <div className={`${styles.imgShow} space-y-4`}>
                        <h2 className={`${styles.fontSizeMobile} titleTopic !text-left`}>SALES</h2>
                        <img src="/images/sale_product.png" className="rounded-xl w-full" />
                    </div>

                </div>

            </div>
        </div>
    );
}
