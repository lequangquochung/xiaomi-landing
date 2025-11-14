// src/components/TopProducts/TopProducts.tsx
import Image from "next/image";
import styles from "./Top-selling.module.scss";

type Product = {
    rank: number;
    name: string;
    quantity: string;
    price: string;
};

const products: Product[] = [
    { rank: 1, name: "XIAOMI MAX 24", quantity: "1,424,042", price: "$ 7,090,099" },
    { rank: 2, name: "XIAOMI MAX 24", quantity: "1,424,042", price: "$ 7,090,099" },
    { rank: 3, name: "XIAOMI MAX 24", quantity: "1,424,042", price: "$ 7,090,099" },
    { rank: 4, name: "XIAOMI MAX 24", quantity: "1,424,042", price: "$ 7,090,099" },
    { rank: 5, name: "XIAOMI MAX 24", quantity: "1,424,042", price: "$ 7,090,099" },
];


const rowVariant: Record<number, string> = {
    0: styles.rank_1,
    1: styles.rank_2,
    2: styles.rank_3,
};


const rankIcon = (rank: number) => `/icons/rank_${rank}.svg`; // 1–5

export default function TopProducts() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.inner}>
                <h2 className={styles.title}>TOP BEST-SELLING PRODUCTS</h2>

                {/* header */}
                <div className={`${styles.row} ${styles.rowHeader} ${styles.colDetails} ${styles.fontSizeMobile}`}>
                    <p className={`${styles.colRank} ${styles.fontSizeMobile}`}>No.</p>
                    <p className={`${styles.fontSizeMobile}`}>Products</p>
                    <p className={`${styles.colQty} ${styles.fontSizeMobile}`}>Quantity</p>
                    <p className={`${styles.colPrice} ${styles.fontSizeMobile}`}>Price</p>
                </div>

                {/* items */}
                <div className={styles.items}>
                    {products.map((item: Product, index: number) => (
                        <div key={item.rank} className={`${styles.row} ${index < 2 ? rowVariant[index] : `${styles.rank_default}`} ${styles.colDetails}`}>
                            <div className={styles.colRank}>
                                <div className={styles.rankBadge}>
                                    <Image
                                        src={rankIcon(item.rank)}
                                        alt={`Rank ${item.rank}`}
                                        width={index > 2 ? 25 : 40}
                                        height={index > 2 ? 25 : 40}
                                        className={`${styles.rank_mobile} ${index > 2 ? "ml-1" : ""}`}
                                    />
                                </div>
                            </div>

                            <div className={`${styles.fontSizeMobile} font-italic font-weight-900`}>{item.name}</div>
                            <div className={`${styles.colQty} ${styles.fontSizeMobile} font-italic font-weight-900`}>{item.quantity}</div>

                            <div className={`${styles.colPrice} ${styles.fontSizeMobile} font-italic font-weight-900`}>
                                <span className={`${styles.priceBadge} ${styles.fontSizeMobile} background-secondary-900`}>{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
