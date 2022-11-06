import React from 'react';
import styles from '../style.module.scss'
import {winStarBigSvg, winStarSmSvg, winSvg} from "./DataAssets";
import Link from "next/link";

function FinishComponent() {
    return (
        <div className={styles.background}>
        <div className={styles.wrapperFinishComponent}>
            <div className={styles.finishComponent}>
                <img src={winSvg} alt={'winPicture'} className={styles.finishComponent_textPic}/>
                <img src={winStarBigSvg} alt={'bigStar1'}  className={styles.finishComponent_star1}/>
                <img src={winStarBigSvg} alt={'bigStar2'}  className={styles.finishComponent_star2}/>
                <img src={winStarSmSvg} alt={'smStar1'}  className={styles.finishComponent_star3}/>
                <img src={winStarSmSvg} alt={'smStar2'}  className={styles.finishComponent_star4}/>
                <h3>Молодец! Ты успешно справился с заданием!</h3>
                <Link href={'/'} className={styles.finishComponent_button}>Заново</Link>
            </div>
        </div>
        </div>
    );
}

export default FinishComponent;