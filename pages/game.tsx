import styles from '../style.module.scss'
import {
    makeArray
} from "../Components/DataAssets";
import {useEffect, useRef, useState} from "react";
import FinishComponent from "../Components/FinishComponent";
import NewArray from "../Components/NewArray";
import direction from '../public/direction.svg';

type Cookies = {
    number: number,
    picture: string
}

type XYPos = {
    xPos: number,
    yPos: number
}



function Game() {
    const {info,cookies,currentScene} = NewArray()
    const MainGameRef = useRef(null)
    const [finish,setFinish] = useState(false)
    let count = 0

    const compareArray: Cookies[] = []
    const check: boolean = info.type === 'ascend'

    const filtered: Cookies[] = cookies.sort((a, b) => a.number - b.number)
    const reversedArr = check ? filtered : filtered.concat().reverse()
    const emptyBlock = useRef(null)
    compareArray.push(reversedArr[0])
    const cookiesPosition: XYPos[] = makeArray(info.amount)
    useEffect(() => {
        if (!check && emptyBlock.current) {
            const style = emptyBlock.current.style
            style.flexDirection = 'row-reverse'
            style.left = '-95px'

        }
        for (let i = 0; i < info.amount; i++) {
            const target = document.getElementById(`id${i}`)
            target.ondragstart = function () {
                return false;
            };
            const getCoords = (elem: Element): { top: number, left: number } => {
                let box = elem.getBoundingClientRect();
                return {
                    top: box.top + scrollY,
                    left: box.left + scrollX
                };
            }
                const onTouchStart = (e:TouchEvent) => {
                    const coords = getCoords(target)
                    const centerTargetW = target.offsetWidth / 2;
                    const centerTargetH = target.offsetHeight / 2;
                    const shiftX = e.touches[0].pageX - coords.left;
                    const shiftY = e.touches[0].pageY - coords.top
                    const {top,left} = getCoords(MainGameRef.current)
                    const onTouchMove = (mouseX,mouseY) => {
                        target.style.left = mouseX - left - shiftX + 'px';
                        target.style.top = mouseY - top - shiftY + 'px';
                    }
                    target.ontouchmove = (event:TouchEvent) => {
                        onTouchMove(event.touches[0].pageX,event.touches[0].pageY)
                    }
                    target.ontouchend =  (ev:TouchEvent) => {
                        document.ontouchmove = null
                        const value: string = target.getAttribute('data-value')
                        const elemBelow: Element = document.elementsFromPoint(ev.changedTouches[0].clientX, ev.changedTouches[0].clientY).filter(newId => newId.id === 'emptyId')[0]
                        const centerWidth = elemBelow?.clientWidth / 2
                        const centerHeight = elemBelow?.clientHeight / 2
                        const data: string = elemBelow?.getAttribute('data-value')
                        if (value !== data || +data !== compareArray[count]?.number) {
                            target.style.top = cookiesPosition[i].yPos + 'px'
                            target.style.left = cookiesPosition[i].xPos + 'px'
                        } else {
                            const xPosElem = getCoords(elemBelow).left
                            const yPosElem = getCoords(elemBelow).top
                            const currCenterX: number = xPosElem - left + centerWidth - centerTargetW
                            const currCenterY: number = yPosElem - top + centerHeight - centerTargetH
                            count++
                            compareArray.push(reversedArr[count])
                            target.onmouseup = null;
                            target.style.pointerEvents = 'none'
                            target.style.top = currCenterY + 'px'
                            target.style.left = currCenterX + 'px'
                            if(count === info.amount) setFinish(true)
                        }
                    }
                }


                target.ontouchstart = (e) => onTouchStart(e)
                target.onmousedown = (event) => {
                const coords = getCoords(target)
                const shiftX = event.pageX - coords.left;
                const shiftY = event.pageY - coords.top
                const centerTargetW = target.offsetWidth / 2;
                const centerTargetH = target.offsetHeight / 2;
                const {top,left} = getCoords(MainGameRef.current)
                function moveAt(mouseX, mouseY) {
                    target.style.left = mouseX - left - shiftX + 'px';
                    target.style.top = mouseY - top - shiftY + 'px';
                }
                moveAt(event.pageX, event.pageY)
                document.onmousemove = function (mouseEvent) {
                    moveAt(mouseEvent.pageX, mouseEvent.pageY);
                }
                target.onmouseup = function (ev) {
                    document.onmousemove = null;
                    const value: string = target.getAttribute('data-value')
                    const elemBelow: Element = document.elementsFromPoint(ev.pageX, ev.pageY).filter(newId => newId.id === 'emptyId')[0]
                    const centerWidth = elemBelow?.clientWidth / 2
                    const centerHeight = elemBelow?.clientHeight / 2
                    const data: string = elemBelow?.getAttribute('data-value')
                    if (value !== data || +data !== compareArray[count]?.number) {
                        target.style.top = cookiesPosition[i].yPos + 'px'
                        target.style.left = cookiesPosition[i].xPos + 'px'
                    } else {
                        const xPosElem = getCoords(elemBelow).left
                        const yPosElem = getCoords(elemBelow).top
                        const currCenterX: number = xPosElem - left + centerWidth - centerTargetW
                        const currCenterY: number = yPosElem - top + centerHeight - centerTargetH
                        count++
                        compareArray.push(reversedArr[count])
                        target.onmouseup = null;
                        target.style.pointerEvents = 'none'
                        target.style.top = currCenterY + 'px'
                        target.style.left = currCenterX + 'px'
                        if(count === info.amount) setFinish(true)
                    }
                }
            }
        }
    }, [])

    return (
        <div className={styles.container}>

            <div className={styles.MainGame} ref={MainGameRef}>
                {finish && <FinishComponent />}
                {currentScene.background}
                    <div className={styles.cookies}>
                        {cookies.map((data, index) => {
                            return (
                                <div
                                    id={`id${index}`}
                                    className={styles.cookies_item}
                                    key={index}
                                    data-value={data.number}
                                    style={
                                        {
                                            top: cookiesPosition[index].yPos,
                                            left: cookiesPosition[index].xPos
                                        }}
                                >
                                    <img src={data.picture} alt={`pic${index}`} style={{pointerEvents: 'none'}}/>
                                    <span style={{pointerEvents: 'none'}}>{data.number}</span>
                                </div>
                            )
                        })}
                        {check ?<div className={styles.directionBlock}>
                            <p>По возрастанию</p>
                            <img src={direction.src} alt={'direction'}/>
                        </div> : <div className={styles.directionBlockRight}>
                            <img src={direction.src} alt={'direction'}/>
                            <p>По убыванию</p>
                        </div>}
                    </div>
                    <div className={styles.emptyBlockWrapper}>
                        <img src={currentScene.emptySlots} alt={'emptySlots'}/>
                        <div className={styles.emptyBlock} ref={emptyBlock}>
                            {Array.from(Array(info.amount)).map((_, index) => {
                                return (
                                    <div
                                        key={index}
                                        data-value={reversedArr[index]?.number}
                                        id={`emptyId`}
                                        className={styles.emptyBlock_item}
                                    ></div>
                                )
                            })}
                        </div>
                    </div>


            </div>

        </div>
    );
}

export default Game;