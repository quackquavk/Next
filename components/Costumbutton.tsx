"use client"
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

const CostumButton = ({title,containerStyles,handleClick,btntype}:CustomButtonProps) => {
  return (
    <button className={`custom-btn ${containerStyles}`}
    disabled={false}
    type={"button"}
    onClick={()=>{}}
    >
        <span  className={`flex-1`}>
          {title}
        </span></button>
  )
}

export default CostumButton
