"use client";
import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import Popup from "@components/PopupWelcome/Popup";
import SaleProducts from "app/SaleProducts/SaleProducts";
import TopProducts from "app/TopProducts/TopProducts";
import TopSelling from "app/TopSelling/TopSelling";
import Image from "next/image";
import { useState } from "react";
import styles from "./Dashboard.module.scss";

const dashBoardTitle = "XIAOMI TV Max Series"
const subTitle = "View to the max";

export default function Dashboard() {
    const [openPopup, setOpenPopup] = useState(true);

    return (
        <section>
            <Navbar />
            <div className="w-full">
                <div className="relative w-full aspect-[1600/746] overflow-hidden">
                    <p className={`mainTitle absolute z-49 font-weight-900 ${styles.dashboardTitle}`}>{dashBoardTitle}</p>
                    <p className={`absolute z-49 ${styles.subTitle} font-weight-300`}>{subTitle}</p>
                    <Image
                        src="/images/dashboard.jpg"
                        alt="Xiaomi TV"
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
            </div>
            <TopSelling />
            <TopProducts />
            <SaleProducts />
            <Footer />
            <Popup
                open={openPopup}
                onClose={() => setOpenPopup(false)}
                title={dashBoardTitle}
                subtitle={subTitle}
                imageSrc="/images/dashboard.jpg"
            />
        </section>
    );
}