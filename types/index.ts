import { MouseEventHandler } from "react";
export interface CustomButtonProps{
    title: string;
    containerStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btntype?: 'button' | 'submit';
}
export interface SearchManufacturerProps{
    manufacturer?:string;
    setManufacturer?: (manufacturer : string) => void;
}