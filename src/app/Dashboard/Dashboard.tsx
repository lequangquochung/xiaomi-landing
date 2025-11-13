import Navbar from "@components/Navbar/Navbar";
import Image from "next/image";
import styles from "./Dashboard.module.scss";

export default function Dashboard() {
    return (
        <div>
            <Navbar />
            <div
                className="w-full">
                <div className="relative w-full aspect-[1600/722] overflow-hidden">
                    <Image
                        src="/images/dashboard.jpg"
                        alt="Xiaomi TV Max Series"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                </div>
            </div>
        </div>
    );
}