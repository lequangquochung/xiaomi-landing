"use client";

import { useEffect } from "react";
import styles from "./Popup.module.scss";

type ProductPopupProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    subtitle?: string;
    imageSrc: string;
};

export default function Popup({
    open,
    onClose,
    title,
    subtitle = "",
}: ProductPopupProps) {
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
            aria-modal="true"
            role="dialog"
        >
            <button
                aria-label="Close popup"
                className="absolute inset-0 w-full h-full cursor-default"
                onClick={onClose}
            />

            <div className={`${styles.mainPopup} relative z-10`}>
                <button
                    onClick={onClose}
                    className={`${styles.closeBtn} absolute right-4 top-4 z-20 flex items-center justify-center`}
                >
                    <span className="text-base">✕</span>
                </button>

                <div className="px-6 pt-12 pb-4 text-center text-white">
                    <p className={`font-bold text-2xl titlePopup`}>
                        {title}
                    </p>
                    {subtitle && (
                        <p className="mt-1 text-neutral-300 text-base">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className={`pb-7 flex justify-center absolute ${styles.seeMoreBtn}`}>
                    <button className="titleTopic text-base">
                        <span>SEE MORE</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
