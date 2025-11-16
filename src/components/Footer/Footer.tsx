import styles from "./Footer.module.scss";


export default function Footer() {
    return (
        <footer className="wrapperBlock">
            <div className={`${styles.inner}`}>

                {/* 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {/* ABOUT US */}
                    <div className="space-y-3">
                        <h4 className="">
                            ABOUT US
                        </h4>
                        <ul className="space-y-1 text-sm">
                            <li className="color-neutral-200">Company Details</li>
                            <li className="color-neutral-200">Terms &amp; Conditions</li>
                            <li className="color-neutral -200">Privacy Policy</li>
                            <li className="color-neutral-200">Affiliate</li>
                        </ul>

                    </div>

                    {/* HELP */}
                    <div className="space-y-3">
                        <h4 className="">
                            HELP
                        </h4>
                        <ul className="space-y-1 text-sm">
                            <li className="color-neutral-200">F.A.Q (Frequently Asked Questions)</li>
                            <li className="color-neutral-200">AML/KYC Policy</li>
                            <li className="color-neutral-200">Refund Policy</li>
                            <li className="color-neutral-200">Dispute Resolution</li>
                        </ul>
                    </div>

                    {/* OUR PRODUCTS */}
                    <div className="space-y-3">
                        <h4 className="">
                            OUR PRODUCTS
                        </h4>
                        <ul className="space-y-1 text-sm">
                            <li className="color-neutral-200">Product</li>
                            <li className="color-neutral-200">Contact</li>
                            <li className="color-neutral-200">Price</li>
                            <li className="color-neutral-200">Sales</li>
                        </ul>
                    </div>

                    {/* CONTACT US */}
                    <div className="space-y-3">
                        <h4 className="">
                            CONTACT US
                        </h4>
                        <ul className="space-y-1 text-sm">
                            <li className="color-neutral-200">support@xiaomi.email</li>
                            <li className="color-neutral-200">affiliate@xiaomi.com</li>
                        </ul>

                        <button className="mt-3 inline-flex items-center justify-center rounded-lg px-4 py-2 bg-[#00b894] text-white text-sm font-semibold shadow-md hover:bg-[#00a183] transition">
                            {/* nếu có icon app thì thêm <img ... /> ở đây */}
                            Install App
                        </button>
                    </div>
                </div>

                {/* 18+ + secure + short text */}
                <div className="flex flex-col items-center gap-3 text-xs md:text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-500 text-xs">
                                18+
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full border border-gray-500 flex items-center justify-center text-[10px]">
                                SSL
                            </div>
                            <span className="font-semibold text-gray-200">SECURE</span>
                        </div>

                        <p className="max-w-3xl text-center md:text-left">
                            For designated models of Xiaomi smartphone, you can enjoy the
                            warranty services for your device at designated Xiaomi.
                        </p>
                    </div>
                </div>

                {/* long warranty text */}
                <p className="text-xs md:text-sm text-gray-400 max-w-4xl mx-auto text-center leading-relaxed">
                    Customers should provide a valid purchase proof and warranty card.
                    After inspected by the Xiaomi authorized service center and confirmed
                    that the smartphone meets the warranty conditions, you can enjoy the
                    in-warranty service for free. Warranty determination rules are
                    subjected to the local service center.
                </p>

                {/* copyright bar */}
                <div className="w-full bg-[#181818] rounded-xl py-3 text-center text-xs text-gray-400">
                    © Copyright 2025. All Rights Reserved
                </div>

                {/* payment methods */}
                <div className="flex flex-wrap items-center justify-center gap-6 pt-2 pb-4">
                    {/* thay src bằng logo thật của bạn */}
                    <img src="/images/visa.png" alt="Visa" className="h-6 object-contain" />
                    <img src="/images/mastercard.png" alt="Mastercard" className="h-6 object-contain" />
                    <img src="/images/astropay.png" alt="AstroPay" className="h-6 object-contain" />
                    <img src="/images/jcb.png" alt="JCB" className="h-6 object-contain" />
                </div>
            </div>
        </footer>
    );
}
