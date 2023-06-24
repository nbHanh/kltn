import React, { useState } from "react";
import styles from "../styles/productOfCartMini.module.scss";
import clsx from "clsx";

function ProductsOfCartMini() {
    const [quantity, setQuantity] = useState(0);

    /**
     * @param {type}
     * 0: increase quantity
     * 1: decrease quantity
     * */

    const handleDecreaseAndIncrease = (type: 0 | 1) => {
        switch (type) {
            case 1: {
                setQuantity((prev) => {
                    if (prev <= 0) {
                        return prev;
                    }

                    return --prev;
                });
                break;
            }
            default:
                setQuantity((prev) => {
                    return ++prev;
                });
        }
    };

    return (
        <div className={styles.wrapper_product}>
            <div className={styles.wrapper_img}>
                <img
                    src="https://bizweb.dktcdn.net/thumb/compact/100/307/433/products/hat-cho-cho-apro-adult-grilled-beef-20kg-cutepets3.jpg"
                    alt=""
                />
            </div>
            <div className={styles.wrapper_info}>
                <div className={styles.product_title}>
                    <p>
                        Hạt cho chó Apro Adult Grilled Beef Flavor 20kg Hạt cho
                        chó lớn giá rẻ
                    </p>
                </div>
                <div className={styles.product_price}>
                    <span>580.000₫</span>
                </div>
                <div className={styles.product_quantity}>
                    <div
                        className={clsx(
                            styles.style_btn_quantity,
                            styles.flex_center
                        )}
                        onClick={() => handleDecreaseAndIncrease(1)}
                    >
                        -
                    </div>
                    <div className={styles.quantity}>{quantity}</div>
                    <div
                        className={clsx(
                            styles.style_btn_quantity,
                            styles.flex_center
                        )}
                        onClick={() => handleDecreaseAndIncrease(0)}
                    >
                        +
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsOfCartMini;
