import React, { useState } from "react";
import img2 from '../assets/images/Rectangle2.png';
import img1 from '../assets/images/Rectangle1.png';
import { ReactComponent as Pc } from '../assets/icons/computer.svg';
import { ReactComponent as Phone } from '../assets/icons/smartphone.svg';
import { ReactComponent as Back } from '../assets/icons/reply.svg';
import { ReactComponent as Forward } from '../assets/icons/forward.svg';


const RenkAyarlari = (props) => {
    const filters = [
        {
            id: 1,
            image: img1
        },
        {
            id: 2,
            image: img2
        },
        {
            id: 3,
            image: img2
        },
        {
            id: 4,
            image: img1
        },
        {
            id: 5,
            image: img2
        },
        {
            id: 6,
            image: img2
        },
        {
            id: 7,
            image: img1
        },
        {
            id: 8,
            image: img2
        },
        {
            id: 9,
            image: img2
        }
    ];
    const [PhoneIconSelected, setPhoneIconSelected] = useState(false);
    const [PcSelected, setPcSelected] = useState(true);
    return (
        <div className={` mt-4 flex flex-col`}>
            <div className={` w-[300px] relative flex flex-row h-11  self-center place-items-center place-content-between mb-[28px]`}>
                <div className=" flex flex-row place-items-center w-1/3 justify-center">
                    <Pc fill={PcSelected ? '#1163FA' : '#D0D5DD'} onClick={() => { setPcSelected(true); setPhoneIconSelected(false) }} className="hover:cursor-pointer mr-4 bg-['#E5EEFE'] hover:bg-['#E5EEFE'] " />
                    <Phone fill={PhoneIconSelected ? '#1163FA' : '#D0D5DD'} onClick={() => { setPhoneIconSelected(true); setPcSelected(false) }} className="hover:cursor-pointer bg-['#E5EEFE'] hover:bg-['#E5EEFE'] " />
                </div>
                <div className=" border-l-2 flex flex-row h-full place-items-center w-2/3 justify-center">
                    <Back fill="#888888" className=" mr-[8.5px] " />
                    <button className=" mr-3 text-bar-offline-0  ">Geri</button>
                    <Forward fill="#888888" className=" mr-[7.5px] " />
                    <button className=" text-bar-offline-0 ">İleri</button>
                </div>
            </div>
            <h className={` ml-4 text-popNormal12 text-text-color-0`} >Renk Ayarları</h>
            <button className={` text-bar-offline-0 text-popNormal12 border border-box-stroke-0 place-items-center w-[263px] h-[32px] self-center mt-[15px] rounded hover:bg-gray-200`}>ayarları sıfırla</button>

            <div className={`flex flex-col place-items-center  overflow-hidden h-11 bg-white self-center mt-7`}>
                <h className={` self-start text-bar-offline-0 text-popNormal12`}>Parlaklık</h>
                <input type="range" id="volume" name="volume"
                    min="0" max="100" step="1" className="w-[263px] h-[3px] accent-btn-blue-0 cursor-pointer mt-4  bg-white rounded-lg " />
            </div>
            <div className={`flex flex-col place-items-center  overflow-hidden h-11 bg-white self-center mt-4`}>
                <h className={` self-start text-bar-offline-0 text-popNormal12`}>Kontrast</h>
                <input type="range" id="volume" name="volume"
                    min="0" max="100" step="1" className="w-[263px] h-[3px] accent-btn-blue-0 cursor-pointer mt-4  bg-white rounded-lg " />
            </div>
            <div className={`flex flex-col place-items-center  overflow-hidden h-11 bg-white self-center mt-4`}>
                <h className={` self-start text-bar-offline-0 text-popNormal12`}>Keskinlik</h>
                <input type="range" id="volume" name="volume"
                    min="0" max="100" step="1" className="w-[263px] h-[3px] accent-btn-blue-0 cursor-pointer mt-4  bg-white rounded-lg " />
            </div>
            <div className={`flex flex-col place-items-center  overflow-hidden h-11 bg-white self-center mt-4`}>
                <h className={` self-start text-bar-offline-0 text-popNormal12`}>Sıcaklık</h>
                <input type="range" id="volume" name="volume"
                    min="0" max="100" step="1" className="w-[263px] h-[3px] accent-btn-blue-0 cursor-pointer mt-4  bg-white rounded-lg " />
            </div>
            <div className={`flex flex-col place-items-center  overflow-hidden h-11 bg-white self-center mt-4`}>
                <h className={` self-start text-bar-offline-0 text-popNormal12`}>Doygunluk</h>
                <input type="range" id="volume" name="volume"
                    min="0" max="100" step="1" className="w-[263px] h-[3px] accent-btn-blue-0 cursor-pointer mt-4  bg-white rounded-lg " />
            </div>
            <div className={`flex flex-col place-items-center  overflow-hidden h-11 bg-white self-center mt-4`}>
                <h className={` self-start text-bar-offline-0 text-popNormal12`}>Vinyet</h>
                <input type="range" id="volume" name="volume"
                    min="0" max="100" step="1" className="w-[263px] h-[3px] accent-btn-blue-0 cursor-pointer mt-4  bg-white rounded-lg " />
            </div>
            <div className={`flex flex-col place-items-center  overflow-hidden h-11 bg-white self-center mt-4`}>
                <h className={` self-start text-bar-offline-0 text-popNormal12`}>Bulanıklık</h>
                <input type="range" id="volume" name="volume"
                    min="0" max="100" step="1" className="w-[263px] h-[3px] accent-btn-blue-0 cursor-pointer mt-4  bg-white rounded-lg " />
            </div>
            <h className={` text-popNormal12 text-text-color-0 ml-4 mt-[23px]`}>Renk Filtreleri</h>
            <div className="grid grid-cols-3 gap-9 bg-white place-items-center mx-4 mt-4">
                {filters.map((item) => (
                    <div>
                        <img src={item.image} className=" bg-blue-300 w-[65px] h-[65px] rounded " />
                        <h className={` text-pop40012 text-bar-offline-0`}>Sepya</h>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RenkAyarlari;