import React, { useState } from "react";
import { ReactComponent as Pc } from '../assets/icons/computer.svg';
import { ReactComponent as Phone } from '../assets/icons/smartphone.svg';
import { ReactComponent as Back } from '../assets/icons/reply.svg';
import { ReactComponent as Forward } from '../assets/icons/forward.svg';
import { ReactComponent as Expand } from '../assets/icons/expand_more.svg';
import { ReactComponent as Bold } from '../assets/icons/bold.svg';
import { ReactComponent as Italic } from '../assets/icons/italic.svg';
import { ReactComponent as Strick } from '../assets/icons/strick.svg';
import { ReactComponent as Underline } from '../assets/icons/underline.svg';
import { ReactComponent as Left } from '../assets/icons/left.svg';
import { ReactComponent as Center } from '../assets/icons/center.svg';
import { ReactComponent as Right } from '../assets/icons/right.svg';
import { ReactComponent as Justify } from '../assets/icons/justify.svg';
import one from '../assets/images/one.png';
import two from '../assets/images/two.png';
import three from '../assets/images/three.png';
import four from '../assets/images/four.png';
import five from '../assets/images/five.png';
import six from '../assets/images/six.png';
import seven from '../assets/images/seven.png';
import eight from '../assets/images/eight.png';
import nine from '../assets/images/nine.png';
import ten from '../assets/images/ten.png';
import eleven from '../assets/images/eleven.png';
import twelve from '../assets/images/twelve.png';
import { SketchPicker, SliderPicker, HuePicker } from 'react-color';

const MetinEkle = (props) => {
    const [Background, setBackground] = useState('#233CF5');
    const handleChangeComplete = (color) => {
        // this.setState({ background: color.hex });
        // console.log(color.hex);
        setBackground(color.hex);
        console.log(Background);
    };
    const etiketler = [
        {
            id: 1,
            image: one,

        },
        {
            id: 2,
            image: two,
        },
        {
            id: 3,
            image: three
        },
        {
            id: 4,
            image: four
        },
        {
            id: 5,
            image: five
        },
        {
            id: 6,
            image: six
        },
        {
            id: 7,
            image: seven
        },
        {
            id: 8,
            image: eight
        },
        {
            id: 9,
            image: nine
        },
        {
            id: 10,
            image: ten
        },
        {
            id: 11,
            image: eleven
        },
        {
            id: 12,
            image: twelve
        }
    ]
    const [DropdpwnFont, setDropdpwnFont] = useState(false);
    const [DropdpwnFontSize, setDropdpwnFontSize] = useState(false);
    const [SelectedFont, setSelectedFont] = useState('Poppins');
    const [SelectedFontSize, setSelectedFontSize] = useState('16');
    const [PhoneIconSelected, setPhoneIconSelected] = useState(false);
    const [PcSelected, setPcSelected] = useState(true);
    const [Hizalama,setHizalama]=useState('left');
    return (
        <section >
            <div className={` relative flex flex-row h-11  self-center mt-[9.5px] place-items-center place-content-between mb-[28px]`}>
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
                <div className={` mt-4 bg-white w-56 h-8 flex flex-row place-content-between place-items-center mb-[20.5px]`}>
                    <h className={` text-bar-offline-0 text-popNormal12`}>stil</h>
                    <div className={` flex flex-row `}>
                        <Bold className=" mr-[23.5px] hover:cursor-pointer" />
                        <Italic className=" mr-[23.5px] hover:cursor-pointer" />
                        <Strick className=" mr-[23.5px] hover:cursor-pointer" />
                        <Underline className="hover:cursor-pointer" />
                    </div>
                </div>
                <div className={` bg-white w-56 h-8 flex flex-row place-content-between place-items-center mb-[18px]`}>
                    <h className={` text-bar-offline-0 text-popNormal12`}>Hizalama</h>
                    <div className={` flex flex-row place-content-between w-32 bg-bar-section-0 py-1 px-[5px] `}>
                        <div onClick={()=> setHizalama('left')} className={`${ Hizalama === 'left' ? ` bg-white` :` bg-transparent`} p-1 hover:cursor-pointer`} >
                            <Left fill={ Hizalama === 'left' ? '#1D2939' : '#888888'}  />
                        </div>
                        <div onClick={()=> setHizalama('center')}  className={`${ Hizalama === 'center' ? ` bg-white` :` bg-transparent`} p-1 hover:cursor-pointer`}>
                            <Center fill={ Hizalama === 'center' ? '#1D2939' : '#888888'}  />
                        </div>
                        <div onClick={()=>setHizalama('right')}   className={`${ Hizalama === 'right' ? ` bg-white` :` bg-transparent`} p-1 hover:cursor-pointer`}>
                            <Right fill={ Hizalama === 'right' ? '#1D2939' : '#888888'} />
                        </div>
                        <div onClick={()=> setHizalama('justify')} className={`${ Hizalama === 'justify' ? ` bg-white` :` bg-transparent`} p-1 hover:cursor-pointer`}>
                            <Justify fill={ Hizalama === 'justify' ? '#1D2939' : '#888888'} />
                        </div>
                    </div>
                </div>

                <div className="   mb-[39px] flex flex-col  pr-10 ">
                    <h className=" text-bar-offline-0 text-popNormal12">Yazı rengi</h>
                    <div className=" flex flex-row place-items-end place-content-between mt-4">
                        <div className={`w-[45px] h-[45px] rounded  `} style={{ backgroundColor: Background }} />
                        <HuePicker
                            width="170px"
                            color={Background}
                            onChangeComplete={(color) => handleChangeComplete(color)}
                            onChange={(color) => handleChangeComplete(color)}
                        // onChange={(color)=>handleChangeComplete(color)}
                        />
                    </div>
                </div>
                <h className={` text-popNormal12 text-text-color-0`}>Etiket  Ekle</h>
                <div className="grid grid-cols-3 gap-[26.5px] bg-white mt-4">
                    {etiketler.map((item) => (
                        <div>
                            <img src={item.image} className="" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MetinEkle;