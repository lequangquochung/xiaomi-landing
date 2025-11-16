"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import styles from "./SaleProducts.module.scss";
import "swiper/css";

export default function PromoSection() {
    return (
        <div className="wrapperBlock">
            <div className={` ${styles.inner} grid grid-cols-1 lg:grid-cols-2 gap-8`}>
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
                            <Image src="/images/black_friday.png" alt="Black Friday" width={500} height={500} className="w-full h-full" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/images/black_friday.png" alt="Black Friday" width={500} height={500} className="w-full h-full" />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="grid grid-cols-2 gap-6">

                    <div className={`${styles.imgShow} space-y-4`}>
                        <h2 className={`${styles.fontSizeMobile} titleTopic !text-left`}>NEW PRODUCTS</h2>
                        <Image src="/images/new_product.png" alt="Sale Products" width={500} height={500} />
                    </div>

                    <div className={`${styles.imgShow} space-y-4`}>
                        <h2 className={`${styles.fontSizeMobile} titleTopic !text-left`}>SALES</h2>
                        <Image src="/images/sale_product.png" alt="Sale Products" width={500} height={500} />
                    </div>
                </div>
            </div>
        </div>
    );
}
