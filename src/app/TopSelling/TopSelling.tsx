import Image from "next/image";
import styles from "./TopSelling.module.scss";

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

export default function TopSelling() {
    return (
        <div className={`wrapperBlock pt-4`}>
            <div className={styles.inner}>
                <h2 className={`${styles.titleTopicBackground} titleTopic mb-6`}>TOP BEST-SELLING PRODUCTS</h2>

                <div className={`${styles.row} ${styles.rowHeader} ${styles.colDetails} text-sm fontSizeMobile`}>
                    <p className={`${styles.colRank} fontSizeMobile text-sm`}>No.</p>
                    <p className={`fontSizeMobile text-sm`}>Products</p>
                    <p className={`${styles.colQty} fontSizeMobile text-sm`}>Quantity</p>
                    <p className={`${styles.colPrice} fontSizeMobile text-sm`}>Price</p>
                </div>

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

                            <div className={`fontSizeMobile font-italic font-weight-900`}>{item.name}</div>
                            <div className={`${styles.colQty} fontSizeMobile font-italic font-weight-900`}>{item.quantity}</div>

                            <div className={`${styles.colPrice} fontSizeMobile font-italic font-weight-900`}>
                                <span className={`${styles.priceBadge} fontSizeMobile background-secondary-900`}>{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}
