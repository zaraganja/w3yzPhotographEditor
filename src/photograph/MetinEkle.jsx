import React, { useState, useEffect } from "react";
import { ReactComponent as Pc } from '../assets/icons/computer.svg';
import { ReactComponent as Phone } from '../assets/icons/smartphone.svg';
import { ReactComponent as Back } from '../assets/icons/reply.svg';
import { ReactComponent as Forward } from '../assets/icons/forward.svg';


const MetinEkle = (props) => {
    const [PhoneIconSelected,setPhoneIconSelected]=useState(false);
    const  [PcSelected,setPcSelected]=useState(true);
    return (
        <div className={` relative flex flex-row h-11 bg-white self-center mt-[9.5px] place-items-center border-l-2 place-content-between`}>
            <div className=" flex flex-row place-items-center w-1/3 justify-center">
                <Pc fill={PcSelected ? '#1163FA': '#D0D5DD'} onClick={()=> {setPcSelected(true);setPhoneIconSelected(false)}} className=" mr-4 bg-['#E5EEFE'] hover:bg-['#E5EEFE'] " />
                <Phone fill={PhoneIconSelected ? '#1163FA': '#D0D5DD'} onClick={()=> {setPhoneIconSelected(true);setPcSelected(false)}} className="bg-['#E5EEFE'] hover:bg-['#E5EEFE'] " />
            </div>
            <div className=" border-l-2 flex flex-row h-full place-items-center w-2/3 justify-center">
                <Back fill="#888888" className=" mr-[8.5px] "/>
                <button className=" mr-3 text-bar-offline-0  ">Geri</button>
                <Forward fill="#888888" className=" mr-[7.5px] "/>
                <button className=" text-bar-offline-0">İleri</button>
            </div>
        </div>
    )
}

export default MetinEkle;