import Image from 'next/image'
import React from 'react'
import styles from '../styles/header.module.scss'

function Header() {
    return (
        <div className={styles.wrapper_header}>
            {/* logo */}
            <div className={styles.wrapper_header__logo}>
                <Image
                    src={require("@/assets/images/home/logo.webp")}
                    alt=''
                    height={97}
                />
            </div>

            {/* search */}
            <div className={styles.wrapper_header__search}>
                <div className={styles.wrapper_header__search__options}>
                    <span>Tất cả</span>
                    <i className="fa-solid fa-caret-down"></i>
                </div>
                <div className={styles.wrapper_header__search__search_input}>
                    <input type="text" placeholder='Tìm kiếm sản phẩm' />
                    <div className={styles.wrapper_header__search__search_input__btn}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>

            {/* actions */}
            <div className={styles.wrapper_header__actions}>
                <div className={styles.wrapper_header__actions__phone}>
                    <i className="fa-solid fa-phone"></i>
                    <div className={styles.wrapper_header__actions__phone__info}>
                        <span>Gọi đặt hàng:
                            0123 456 789
                        </span>
                    </div>
                </div>
                <div className={styles.wrapper_header__actions__bag}>
                    <i className="fa fa-shopping-bag">
                        <div className={styles.badge}>1</div>
                    </i>
                    <div className={styles.wrapper_header__actions__bag__info}>
                        <p>Giỏ hàng</p>
                    </div>
                    <div className={styles.wrapper_header__actions__bag__products}>
                        <p>Danh sách đơn hàng</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header