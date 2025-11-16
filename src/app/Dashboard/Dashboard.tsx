import Navbar from "@components/Navbar/Navbar";
import Image from "next/image";
import styles from "./Dashboard.module.scss";
import TopSelling from "app/TopSelling/TopSelling";
import TopProducts from "app/TopProducts/TopProducts";
import SaleProducts from "app/SaleProducts/SaleProducts";


export default function Dashboard() {
    return (
        <div>
            <Navbar />
            {/* main picture */}
            <div
                className="w-full">
                <div className="relative w-full aspect-[1600/722] overflow-hidden">
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
        </div>
    );
}