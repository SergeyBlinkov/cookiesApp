import styles from '../style.module.scss';
import {backgroundFirstPage} from "../Components/DataAssets";
import styled from "styled-components";
import React, {useState} from "react";
import Link from "next/link";

const Input = styled.input`
    width:100%;
    background: #FFD748;
    height: 21px !important;
    -webkit-appearance: none;
    border-radius: 10px;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 21px;
      height: 21px;
      cursor: pointer;
      border-radius: 50%;
      background: #104987;
    }
  `
const Button = styled.button`
  width: 100%;
  height: 44.44px;
  background: #FFD748;
  border-radius: 20px;
  border: none;
  cursor:pointer;
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
`

const Ul = styled.ul`
  margin: 18px 0 2px 0;
  font-family: 'Calibri';
  font-weight: 700;
  font-size: 24px;
  display: flex;
  width: 100%;
  padding: 0;
  flex-direction: row;
  text-decoration: none;
  list-style: none;
  justify-items: center;
  justify-content: space-between;
  li {
    width: 25px;
    text-align: center;
  }
`
const H3 = styled.h3`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  margin-bottom: 16px;
`

const init = {
    amount:2,
    values:0,
    type:'ascend'
}
type InputEvent = React.ChangeEvent<HTMLInputElement>;
function Index() {
    const [storage,setStorage] = useState(init)

    const handleChangeNumber = (e:InputEvent) => {
        e.preventDefault()
            const {name,value} = e.target
        return setStorage(prev=> ({...prev,[name]:+value}))
    }
    const handleClick = (text:string) => {
        setStorage(prev => ({...prev,type:text}))
    }
    const setItems = () => {
        let values = 0
        if(storage.values === 0) values = Math.floor(Math.random() * 999)
        if(storage.values === 1) values = 9
        if(storage.values === 2) values = 19
        if(storage.values === 3) values = 50
        if(storage.values === 4) values = 99
        if(storage.values === 5) values = 999
       localStorage.setItem("infoUser",`{"type":"${storage.type}","amount":${storage.amount},"values":${values}}`)
    }
    return (
        <div className={styles.container}>
            <div className={styles.MainGame}>
                    <img src={backgroundFirstPage} alt={'backgroundFirstPage'} className={styles.MainGame__picture}/>
                <div className={styles.borderWrapper}>
                    <form className={styles.MainGame_firstSlide}>
                        <div className={styles.firstSlide_amount}>
                            <H3>Кол-во предметов</H3>
                            <Ul>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                            </Ul>
                            <Input type={'range'} value={storage.amount} min={2} max={5} onChange={handleChangeNumber} name={'amount'}/>
                        </div>
                        <div className={styles.firstSlide_values}>
                            <H3>Значение</H3>
                            <Ul>
                                <li>A</li>
                                <li>9</li>
                                <li>19</li>
                                <li>50</li>
                                <li>99</li>
                                <li>999</li>
                            </Ul>
                            <Input type='range' min={0} max={5} onChange={handleChangeNumber} value={storage.values} name={'values'}/>
                        </div>
                        <div className={styles.firstSlide_buttonBlock}>
                            <Button
                                type='click'
                                onClick={() =>handleClick('ascend')}
                                className={storage.type === 'ascend' ? styles.ButtonDisabled:styles.Button}
                                disabled={storage.type === 'ascend'}>
                                По возрастанию</Button>
                            <Button
                                type='click'
                                onClick={() =>handleClick('descend')}
                                className={styles.Button}
                                disabled={storage.type === 'descend'}>
                                По убыванию</Button>
                        </div>
                        <Link
                            href={'/game'}
                            className={styles.firstSlide_gameButton}
                            onClick={setItems}
                        >
                            Играть</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Index;