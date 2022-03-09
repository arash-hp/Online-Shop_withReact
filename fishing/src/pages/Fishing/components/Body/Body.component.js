import React from 'react';
import styles from './body.module.scss'
import credit from 'assets/images/credit-card.png'
import keypad from 'assets/images/keypad.png'
import captcha from 'assets/images/captcha.png'
import repeat from 'assets/images/repeat.png'
import delivery from 'assets/images/delivery.png'
import payment from 'assets/images/payment.jpg'

function Body(props) {

const handlePaySuccess=()=>{
    window.location.replace("http://localhost:3000/result?result=success")
}

const handlePayFailed=()=>{
    window.location.replace("http://localhost:3000/result?result=failed")
}
    return (
        <div className='container'>
            <section className={`${styles.body} margin-t-10`}>
                <div className={styles.body_right}>


                    <div className={`${styles.body_right_header}`}>
                        <div className={styles.body_right_header_info}>
                            اطلاعات کارت
                        </div>

                        <div className={`${styles.body_right_header_time} padding-l-15`}>
                            <span>زمان باقی مانده :</span>
                            <span>14:25</span>
                        </div>

                    </div>

                    <div className={styles.body_right_main}>

                        <form className={`${styles.form} padding-15`} action="">
                            <div className={styles.form_titles}>
                                <div className={`${styles.form_titles_unit} margin-vertical-10`}>
                                    <span>شماره کارت</span>
                                    <span>شماره کارت 16 رقمی درج شده روی کارت را وارد نمایید</span>
                                </div>

                                <div className={`${styles.form_titles_unit} margin-vertical-10`}>
                                    <span>شماره شناسایی دوم (CVV2)</span>
                                    <span>شماره سه یا چهار رقمی درج شده روی کارت را وارد نمایید</span>
                                </div>

                                <div className={`${styles.form_titles_unit} margin-vertical-10`}>
                                    <span>تاریخ انقضای کارت</span>
                                    <span>تاریخ انقضای کارت را وارد نمایید</span>
                                </div>

                                <div className={`${styles.form_titles_unit} margin-vertical-10`}>
                                    <span>کد امنیتی</span>
                                    <span>لطفا کد امنیتی داخل کادر را وارد نمایید</span>
                                </div>

                                <div className={`${styles.form_titles_unit} margin-vertical-10`}>
                                    <span>رمز اینترنتی کارت</span>
                                    <span>رمز اینترنتی را وارد نمایید</span>
                                </div>

                                <div className={`${styles.form_titles_unit} margin-vertical-10`}>
                                    <span>ایمیل</span>
                                    <span>لطفا ایمیل معتبر وارد نمایید (اختیاری)</span>
                                </div>

                            </div>

                            <div className={styles.form_inputs}>
                                <div className={styles.input}>
                                    <figure className={styles.credit}>
                                        <img src={credit} alt=""/>
                                    </figure>

                                    <input type="text"></input>
                                </div>
                                <div className={styles.input}>
                                    <figure className={styles.keypad}>
                                        <img src={keypad} alt=""/>
                                    </figure>
                                    <input type="text"></input>
                                </div>
                                <div className={styles.input}>
                                    <div className={styles.date}>

                                        <input placeholder='ماه' type="text"></input>
                                        <input placeholder="سال" type="text"></input>

                                    </div>
                                </div>
                                <div className={styles.input}>
                                    <div className={styles.password}>
                                        <input type="text"></input>

                                        <figure>
                                            <img className={styles.captcha} src={captcha} alt=""/>
                                        </figure>


                                        <figure className={styles.repeat}>
                                            <img src={repeat} alt=""/>
                                        </figure>
                                    </div>
                                </div>
                                <div className={styles.input}>

                                    <figure className={styles.keypad}>
                                        <img src={keypad} alt=""/>
                                    </figure>
                                    <input type="text"></input>

                                    <figure className={styles.delivery}>
                                        <figcaption>دریافت رمز پویا</figcaption>
                                        <img src={delivery} alt=""/>
                                    </figure>
                                </div>
                                <div className={styles.input}>
                                    <input type="text"></input>
                                </div>


                            </div>


                        </form>


                        <div className={styles.button}>
                            <button onClick={handlePaySuccess}>پرداخت</button>
                            <button onClick={handlePayFailed}>انصراف</button>
                        </div>

                    </div>

                </div>

                <div className={styles.body_left}>

                    <div className={`${styles.body_left_header}`}>
                        <div className={styles.body_left_header_info}>
                            اطلاعات کارت
                        </div>
                    </div>

                    <figure className={styles.body_left_logo}>
                        <img src={payment} alt=""/>
                    </figure>

                    <div className={styles.body_left_titles}>
                        <span>نام پذیرنده : </span>
                        <span>فروشگاه کمپینگ</span>
                    </div>

                    <div className={styles.body_left_titles}>
                        <span>شماره پذیرنده : </span>
                        <span>8567489 </span>
                    </div>

                    <div className={styles.body_left_titles}>
                        <span>آدرس وب سایت : </span>
                        <span className={styles.body_left_titles_url}>https://www.camping.co</span>
                    </div>

                    <div className={styles.body_left_price}>
                        <span>مبلغ قابل پرداخت : </span>
                        <span> 10,000 ریال</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export {Body};