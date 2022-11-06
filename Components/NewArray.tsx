import React from 'react';
import {allScenes} from "./DataAssets";
type Cookies = {
    number: number,
    picture: string
}
type Info = {
    type: string,
    amount: number,
    values: number
}
const currentScene = allScenes[0]
const NewArray = () => {
    const info: Info | undefined = JSON.parse(localStorage.getItem('infoUser'))

    let cookies: Cookies[] = []
    for (let i = 0; i < +info.amount; i++) {
        let number = 1 + +Math.floor(Math.random() * +(info.values - 1))
        while (cookies.filter(data => data.number === number).length !== 0) {
            number++
            if (number > info.values) number = 1
        }
        cookies.push({
            number,
            picture: currentScene.items[Math.floor(Math.random() * currentScene.items.length)]
        })
    }
    return {cookies,info,currentScene}
};

export default NewArray;