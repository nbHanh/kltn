"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/header.module.scss";
import optionsData from "../data/dataHeader/options";
import ProductsOfCartMini from "./ProductsOfCartMini";

function Header() {
    const [optionTitle, setOptionTitle] = useState("Tất cả");

    const handleSetOptionTitle = (title: string) => {
        console.log("Vao day");
        setOptionTitle(title);
    };

    return (
        <div className={styles.wrapper_header}>
            {/* logo */}
            <div className={styles.wrapper_header__logo}>
                <Image
                    src={require("@/assets/images/home/logo.webp")}
                    alt=""
                    height={97}
                />
            </div>

            {/* search */}
            <div className={styles.wrapper_header__search}>
                <div className={styles.wrapper_header__search__options}>
                    <span>{optionTitle}</span>
                    <i className="fa-solid fa-caret-down"></i>

                    {/* options */}
                    <div
                        className={styles.wrapper_header__search__options__list}
                    >
                        {optionsData.map((option, index) => (
                            <div
                                onClick={() => handleSetOptionTitle(option)}
                                key={index}
                                className={
                                    styles.wrapper_header__search__options__list__item
                                }
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.wrapper_header__search__search_input}>
                    <input type="text" placeholder="Tìm kiếm sản phẩm" />
                </div>
                <div className={styles.wrapper_header__search__btn}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

            {/* actions */}
            <div className={styles.wrapper_header__actions}>
                <div className={styles.wrapper_header__actions__phone}>
                    <i className="fa-solid fa-phone"></i>
                    <div
                        className={styles.wrapper_header__actions__phone__info}
                    >
                        <span>Gọi đặt hàng: 0123 456 789</span>
                    </div>
                </div>
                <div className={styles.wrapper_header__actions__bag}>
                    <i className="fa fa-shopping-bag">
                        <div className={styles.badge}>1</div>
                    </i>
                    <div className={styles.wrapper_header__actions__bag__info}>
                        <p>Giỏ hàng</p>
                    </div>

                    {/* products mini */}
                    <div
                        className={
                            styles.wrapper_header__actions__bag__products
                        }
                    >
                        <div
                            className={
                                styles.wrapper_header__actions__bag__products__list
                            }
                        >
                            <ProductsOfCartMini />
                            <ProductsOfCartMini />
                            <ProductsOfCartMini />
                        </div>
                        <div
                            className={
                                styles.wrapper_header__actions__bag__products__bottom
                            }
                        >
                            <div
                                className={
                                    styles.wrapper_header__actions__bag__products__bottom__wrapper_price
                                }
                            >
                                Giá
                            </div>
                            <div
                                className={
                                    styles.wrapper_header__actions__bag__products__bottom__wrapper_btns
                                }
                            >
                                2 btn
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
