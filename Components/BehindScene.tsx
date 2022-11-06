import backgroundFlashlightLeft from '../public/backgroundFlashlightLeft.svg'
import backgroundFlashlightRight from '../public/backgroundFlashlightRight.svg'
import backgroundLightsTreeLeft from '../public/backgroundLightsTreeLeft.svg'
import backgroundLightsTreeRight from '../public/backgroundLightsTreeRight.svg'
import backgroundFlowersLD from '../public/backgroundFlowersLD.svg'
import backgroundFlowersLU from '../public/backgroundFlowersLU.svg'
import backgroundFlowersRU from '../public/backgroundFlowersRU.svg'
import backgroundFlowersRD from '../public/backgroundFlowersRD.svg'
import backgroundCoinsLeft from '../public/coinsBackgroundLeft.svg'
import backgroundCoinsRight from '../public/coinsBackgroundRight.svg'
import backgroundCookies1 from '../public/backgroundCookies1.svg';
import backgroundCookies2 from '../public/backgroundCookies2.svg'
import styles from  '../style.module.scss'

import styled from 'styled-components';

const BackCookiesLeft = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`
const BackCookiesRight = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`

export const BehindSceneCookies = () => {

    return (
        <>
            <BackCookiesLeft src={backgroundCookies1.src} alt={'backgroundCookies'}/>
            <BackCookiesRight src={backgroundCookies2.src} alt={'backgroundCookiesSm'}/>
        </>
    )
}

export const BehindSceneCoins = () => {
    return (
        <>
            <BackCookiesLeft src={backgroundCoinsLeft.src} alt={'backgroundCoins'}/>
            <BackCookiesRight src={backgroundCoinsRight.src} alt={'backgroundCoinsRight'}/>
        </>
    )
}

export const BehindSceneFlowers = () => {
    return (
        <div className={styles.FlowersBehind}>
            <img src={backgroundFlowersLU.src} className={styles.FlowersBehind_LU} alt="flowers1"/>
            <img src={backgroundFlowersLD.src} className={styles.FlowersBehind_LD} alt="flowers2"/>
            <img src={backgroundFlowersRU.src} className={styles.FlowersBehind_RU} alt="flowers3"/>
            <img src={backgroundFlowersRD.src} className={styles.FlowersBehind_RD} alt="flowers4"/>
        </div>
    )
}

export const BehindSceneLights = () => {
    return (
        <>
            <img src={backgroundLightsTreeLeft.src} alt="backlights1"/>
            <img src={backgroundLightsTreeRight.src} alt="backlights2"/>
            <img src={backgroundFlashlightLeft.src} alt="backlights3"/>
            <img src={backgroundFlashlightRight.src} alt="backlights4"/>
        </>
    )
}