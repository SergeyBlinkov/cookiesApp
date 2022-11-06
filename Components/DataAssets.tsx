import cookie1 from '../public/cookie1.svg';
import cookie2 from '../public/cookie2.svg';
import cookie3 from '../public/cookie3.svg';
import cookie4 from '../public/cookie4.svg';
import win from '../public/win.svg';
import winStarBig from  '../public/winStar.svg'
import winStarSm from '../public/winStarSm.svg';
import emptySlots1 from '../public/emptySlots1.svg';
import emptySlots3 from '../public/emptySlots3.svg';
import emptySlots4 from '../public/emptySlots4.svg';
import emptySlots5 from '../public/emptySlots5.png';
import backgroundFirstPagePic from '../public/backgroundFirstPage.png';
import flowers1 from '../public/flower1.svg'
import flowers2 from '../public/flower2.svg'
import flowers3 from '../public/flower3.svg'
import coins1 from '../public/coins1.svg'
import coins2 from '../public/coins2.svg'
import coins3 from '../public/coins3.svg'
import coins5 from '../public/coins5.svg'
import lights1 from '../public/lights1.svg'
import lights2 from '../public/lights2.svg'
import lights3 from '../public/lights3.svg'
import lights4 from '../public/lights4.svg'
import lights5 from '../public/lights5.svg'
import {BehindSceneCoins, BehindSceneCookies, BehindSceneFlowers, BehindSceneLights} from "./BehindScene";


export const backgroundFirstPage = backgroundFirstPagePic.src
export const winSvg = win.src
export const winStarBigSvg = winStarBig.src
export const winStarSmSvg = winStarSm.src

export const sceneCookies = {
    items: [cookie1.src,cookie2.src,cookie3.src,cookie4.src],
    background: <BehindSceneCookies />,
    emptySlots: emptySlots1.src
}
export const sceneFlowers = {
    items: [flowers1.src,flowers2.src,flowers3.src],
    background:<BehindSceneFlowers />,
    emptySlots: emptySlots3.src
}
export const sceneCoins = {
    items: [coins1.src,coins2.src,coins3.src,coins5.src],
    background:<BehindSceneCoins />,
    emptySlots: emptySlots4.src
}
export const sceneLights = {
    items: [lights1.src,lights2.src,lights3.src,lights4.src,lights5.src],
    background: <BehindSceneLights />,
    emptySlots: emptySlots5.src
}

export const allScenes = [sceneCoins,sceneCookies,sceneFlowers,sceneLights]
const element1of5 = {
    xPos: 62,
    yPos: 233
}
const element2of5 = {
    xPos: 269,
    yPos: 133
}
const element3of5 = {
    xPos: 399,
    yPos: 281
}
const element4of5 = {
    xPos: 514,
    yPos: 138
}
const element5of5 = {
    xPos: 738,
    yPos: 240
}
const positionCookies5 = [element1of5,element2of5,element3of5,element4of5,element5of5]

const element1of4 = {
    xPos: 109,
    yPos: 233
}
const element2of4 = {
    xPos: 316,
    yPos: 133
}
const element3of4 = {
    xPos: 506,
    yPos: 233
}
const element4of4 = {
    xPos: 715,
    yPos: 132
}
const positionCookies4 = [element1of4,element2of4,element3of4,element4of4]
const element1of3 = {
    xPos: 213,
    yPos: 233
}
const element2of3 = {
    xPos: 428,
    yPos: 133
}
const element3of3 = {
    xPos: 618,
    yPos: 233
}
const positionCookies3 = [element1of3,element2of3,element3of3]

const element1of2 = {
    xPos: 311,
    yPos: 168
}
const element2of2 = {
    xPos: 513,
    yPos: 168
}

const positionCookies2 = [element1of2,element2of2]

export const makeArray = (amount:number) => {
    if(amount === 2) return positionCookies2
    if(amount === 3) return positionCookies3
    if(amount === 4) return positionCookies4
    if(amount === 5) return positionCookies5
}