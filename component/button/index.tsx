import React from 'react'
import style from './style.module.css'

type Props = {
  text: string,
  onClick?:any,
}

const Button: React.FC<Props> = ({text,onClick}) => {
  const calcelClick=()=>{
    if(onClick) onClick()
  }
  return (
      <button type='submit'onClick={calcelClick} className={style.button} style={{margin:'2px'}}>{text}</button>
  )
}

export default Button