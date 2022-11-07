import React, {useEffect, useState} from 'react';
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
const init:Info = {
    type: '',
    amount: 2,
    values: 0
}
const currentScene = allScenes[0]
const NewArray = () => {
    const [info,setInfo] = useState(init)
    useEffect(() => {
        const localStorage = window.localStorage
        setInfo(JSON.parse(localStorage.getItem('infoUser')))
    },[])
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