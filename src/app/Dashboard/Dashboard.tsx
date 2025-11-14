import Navbar from "@components/Navbar/Navbar";
import Image from "next/image";
import styles from "./Dashboard.module.scss";
import TopProducts from "app/Top-selling/Top-seliing";

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
            <TopProducts />
        </div>
    );
}