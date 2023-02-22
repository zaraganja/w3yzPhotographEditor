import React, { useState } from "react";
import { ReactComponent as Pc } from '../assets/icons/computer.svg';
import { ReactComponent as Phone } from '../assets/icons/smartphone.svg';
import { ReactComponent as Back } from '../assets/icons/reply.svg';
import { ReactComponent as Forward } from '../assets/icons/forward.svg';
import { ReactComponent as Expand } from '../assets/icons/expand_more.svg';


const MetinEkle = (props) => {
    const [DropdpwnFont, setDropdpwnFont] = useState(false);
    const [DropdpwnFontSize, setDropdpwnFontSize] = useState(false);
    const [SelectedFont, setSelectedFont] = useState('Poppins');
    const [SelectedFontSize, setSelectedFontSize] = useState('16');
    const [PhoneIconSelected, setPhoneIconSelected] = useState(false);
    const [PcSelected, setPcSelected] = useState(true);
    return (
        <section >
            <div className={` relative flex flex-row h-11  self-center mt-[9.5px] place-items-center border-l-2 place-content-between mb-[28px]`}>
                <div className=" flex flex-row place-items-center w-1/3 justify-center">
                    <Pc fill={PcSelected ? '#1163FA' : '#D0D5DD'} onClick={() => { setPcSelected(true); setPhoneIconSelected(false) }} className=" mr-4 bg-['#E5EEFE'] hover:bg-['#E5EEFE'] " />
                    <Phone fill={PhoneIconSelected ? '#1163FA' : '#D0D5DD'} onClick={() => { setPhoneIconSelected(true); setPcSelected(false) }} className="bg-['#E5EEFE'] hover:bg-['#E5EEFE'] " />
                </div>
                <div className=" border-l-2 flex flex-row h-full place-items-center w-2/3 justify-center">
                    <Back fill="#888888" className=" mr-[8.5px] " />
                    <button className=" mr-3 text-bar-offline-0  ">Geri</button>
                    <Forward fill="#888888" className=" mr-[7.5px] " />
                    <button className=" text-bar-offline-0 ">İleri</button>
                </div>
            </div>
            <h className="text-text-color-0 text-popNormal12 ml-7">Yazı Ekle</h>
            <div className=" ml-7 mt-3">
                <h className=" text-bar-offline-0 text-popNormal12">Yazı Fontu</h>
                <button onClick={() => setDropdpwnFont(!DropdpwnFont)} className={` flex flex-row place-content-between place-items-center w-56 h-8 bg-[#F2F4F7] px-2 mt-1 hover:bg-gray-200 text-text-color-0 text-popNormal12`}>
                    {SelectedFont}
                    <Expand />
                </button>

                <div className={` ${DropdpwnFont ? 'flex' : 'hidden'} z-10 bg-[#F2F4F7] mt-[2px] divide-y divide-gray-100 rounded shadow w-56`}  >
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" >
                        <li onClick={() => { setSelectedFont('Poppins'); setDropdpwnFont(false) }}>
                            <a class="block text-text-color-0 px-4 py-2 hover:bg-gray-200 hover:text-gray-400 w-56">Poppins</a>
                        </li>
                        <li onClick={() => { setSelectedFont('Sans serif'); setDropdpwnFont(false) }}>
                            <a class="block text-text-color-0 px-4 py-2 hover:bg-gray-200 hover:text-gray-400">Sans serif</a>
                        </li>
                        <li onClick={() => { setSelectedFont('Font3'); setDropdpwnFont(false) }}>
                            <a class="block text-text-color-0 px-4 py-2 hover:bg-gray-200 hover:text-gray-400">Font3</a>
                        </li>
                        <li onClick={() => { setSelectedFont('Font4'); setDropdpwnFont(false) }}>
                            <a class="block text-text-color-0 px-4 py-2 hover:bg-gray-200 hover:text-gray-400">Font4</a>
                        </li>
                    </ul>
                </div>
                <div className={` mt-4 bg-white w-56 h-8 flex flex-row place-content-between place-items-center`}>
                    <h className={` text-bar-offline-0 text-popNormal12`}>Font büyüklüğü</h>
                    <button onClick={() => setDropdpwnFontSize(!DropdpwnFontSize)} className={` flex flex-row place-content-between place-items-center w-[60px] h-8 bg-[#F2F4F7] hover:bg-gray-200 text-text-color-0 text-popNormal12 px-2`}>
                        {SelectedFontSize}
                        <Expand />
                    </button>
                </div>
                <div className={` ${DropdpwnFontSize ? 'flex' : 'hidden'} z-10 bg-[#F2F4F7] mt-[2px] divide-y divide-gray-100 rounded shadow w-[60px] ml-[164px]`}  >
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" >
                        <li onClick={() => { setSelectedFontSize('14'); setDropdpwnFontSize(false) }}>
                            <a class="block text-text-color-0 px-4 py-2 hover:bg-gray-200 hover:text-gray-400 w-[60px] ">14</a>
                        </li>
                        <li onClick={() => { setSelectedFontSize('16'); setDropdpwnFontSize(false) }}>
                            <a class="block text-text-color-0 px-4 py-2 hover:bg-gray-200 hover:text-gray-400">16</a>
                        </li>
                        <li onClick={() => { setSelectedFontSize('18'); setDropdpwnFontSize(false) }}>
                            <a class="block text-text-color-0 px-4 py-2 hover:bg-gray-200 hover:text-gray-400">18</a>
                        </li>
                        <li onClick={() => { setSelectedFontSize('22'); setDropdpwnFontSize(false) }}>
                            <a class="block text-text-color-0 px-4 py-2 hover:bg-gray-200 hover:text-gray-400">22</a>
                        </li>
                        <li onClick={() => { setSelectedFontSize('24'); setDropdpwnFontSize(false) }}>
                            <a class="block text-text-color-0 px-4 py-2 hover:bg-gray-200 hover:text-gray-400">24</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MetinEkle;