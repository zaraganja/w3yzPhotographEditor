import React from "react";
import img2 from '../assets/images/Rectangle2.png';
import img1 from '../assets/images/Rectangle1.png';


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
    return (
        <div className={` mt-4 flex flex-col`}>
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