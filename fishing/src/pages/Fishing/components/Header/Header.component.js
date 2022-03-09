import React from 'react';
import styles from './Header.module.scss'
import main_logo from 'assets/images/Behpardakht-Mellat.png'
import second_logo from 'assets/images/Shaparak.jpg'

function Header(props) {
    return (
        <div className='container'>
            <header>
                <div className={styles.header}>
                    <div className={styles.header_logo_second}>
                        <figure>
                            <img src={second_logo} alt=""/>
                        </figure>
                    </div>
                    <div className={styles.header_title}>

                        <h2>
                            پرداخت اینترنتی به پرداخت ملت
                        </h2>

                    </div>

                    <div className={styles.header_logo_main}>
                        <figure>
                            <img src={main_logo} alt=""/>
                        </figure>
                    </div>
                </div>


                <div className={styles.url}>
                    <div className={styles.url_name}>
                        <span>www.Camping.com</span>
                    </div>
                </div>
            </header>
        </div>
    );
}

export {Header};