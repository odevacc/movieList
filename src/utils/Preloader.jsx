import { Image } from 'antd'
import React from 'react'
import loader from './img/loader.gif'
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={s.wrap}>
            <Image preview={false} width={150} src={loader}/>
        </div>
    )
}

export default Preloader
