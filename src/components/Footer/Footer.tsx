import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="wrapperBlock">
            <div className={`${styles.inner}`}>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
                    {/* ABOUT US */}
                    <div className="space-y-3">
                        <h4 className="font-weight-900 font-italic text-white">
                            ABOUT US
                        </h4>
                        <ul className="space-y-1 text-sm">
                            <li className="color-neutral-200"><Link href={"/"}>Company Details</Link></li>
                            <li className="color-neutral-200"><Link href={"/"}>Terms &amp; Conditions</Link></li>
                            <li className="color-neutral-200"><Link href={"/"}>Privacy Policy</Link></li>
                            <li className="color-neutral-200"><Link href={"/"}>Affiliate</Link></li>
                        </ul>

                    </div>

                    {/* HELP */}
                    <div className="space-y-3">
                        <h4 className="font-weight-900 font-italic text-white">
                            HELP
                        </h4>
                        <ul className="space-y-1 text-sm">
                            <li className="color-neutral-200"><Link href={"/"}>F.A.Q (Frequently Asked Questions)</Link></li>
                            <li className="color-neutral-200"><Link href={"/"}>AML/KYC Policy</Link></li>
                            <li className="color-neutral-200"><Link href={"/"}>Refund Policy</Link></li>
                            <li className="color-neutral-200"><Link href={"/"}>Dispute Resolution</Link></li>
                        </ul>
                    </div>

                    {/* OUR PRODUCTS */}
                    <div className="space-y-3">
                        <h4 className="font-weight-900 font-italic text-white">
                            OUR PRODUCTS
                        </h4>
                        <ul className="space-y-1 text-sm">
                            <li className="color-neutral-200"><Link href={"/"}>Product</Link></li>
                            <li className="color-neutral-200"><Link href={"/"}>Contact</Link></li>
                            <li className="color-neutral-200"><Link href={"/"}>Price</Link></li>
                            <li className="color-neutral-200"><Link href={"/"}>Sales</Link></li>
                        </ul>
                    </div>

                    {/* CONTACT US */}
                    <div className="space-y-3">
                        <h4 className="font-weight-900 font-italic text-white">
                            CONTACT US
                        </h4>
                        <ul className="space-y-1 text-sm">
                            <li className="color-neutral-200">support@xiaomi.email</li>
                            <li className="color-neutral-200">affiliate@xiaomi.com</li>
                        </ul>
                        <Link href={"/"}>
                            <Image
                                src="/images/installApp.png"
                                alt="Install App"
                                height={44}
                                width={120}
                                className="cursor-pointer"
                            />
                        </Link>


                    </div>
                </div>

                <div className="mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-3 text-center md:text-left">
                        <div className="flex justify-center md:justify-start gap-3">
                            <Image
                                src="/images/18plus.png"
                                alt="18+"
                                height={31}
                                width={31}
                            />
                            <Image
                                src="/images/ssl.png"
                                alt="SSL"
                                height={30}
                                width={80}
                            />
                        </div>
                        <p className="color-neutral-200 text-xs md:text-sm">
                            For designated models of Xiaomi smartphone, you can enjoy the
                            warranty services for your device at designated Xiaomi.
                        </p>
                    </div>
                </div>

                <p className="color-neutral-200 text-xs md:text-sm mb-6">
                    Customers should provide a valid purchase proof and warranty card.
                    After inspected by the Xiaomi authorized service center and confirmed
                    that the smartphone meets the warranty conditions, you can enjoy the
                    in-warranty service for free. Warranty determination rules are
                    subjected to the local service center.
                </p>

                <div className={`${styles.copyRightBar} w-full text-center color-neutral-200 text-xs md:text-sm mb-6`}>
                    © Copyright 2025. All Rights Reserved
                </div>

                {/* payment method desktop */}
                <div className="hidden md:flex flex flex-wrap items-center justify-center gap-6 mb-6">
                    <Image src="/icons/visa.svg" alt="Visa" height={24} width={73} className="cursor-pointer" />
                    <Image src="/icons/mastercard.svg" alt="MasterCard" height={24} className="cursor-pointer" width={133} />
                    <Image src="/icons/astropay.svg" alt="SSL" height={24} className="cursor-pointer" width={73} />
                    <Image src="/icons/interac.svg" alt="SSL" height={24} width={24} className="cursor-pointer" />
                    <Image src="/icons/jetonbank.svg" alt="SSL" height={24} width={40} className="cursor-pointer" />
                </div>

                {/* payment method mobile */}
                <div className="md:hidden lg:hidden flex flex-col mb-6">
                    <div className="flex w-full justify-between ">
                        <Image src="/icons/visa.svg" alt="Visa" height={24} width={73} className="cursor-pointer" />
                        <Image src="/icons/mastercard.svg" alt="MasterCard" height={24} className="cursor-pointer" width={133} />
                        <Image src="/icons/astropay.svg" alt="SSL" height={24} className="cursor-pointer" width={73} />
                    </div>

                    <div className="flex w-full justify-center mt-3 gap-6">
                        <Image src="/icons/interac.svg" alt="SSL" height={24} width={24} className="cursor-pointer" />
                        <Image src="/icons/jetonbank.svg" alt="SSL" height={24} width={40} className="cursor-pointer" />
                    </div>
                </div>


            </div>
        </footer>
    );
}
