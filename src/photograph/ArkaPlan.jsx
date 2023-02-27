import React, { useEffect, useState } from "react";
import img from '../assets/images/backgroundimg.jpg';
import { SketchPicker, SliderPicker, HuePicker } from 'react-color';
import { ReactComponent as Pc } from '../assets/icons/computer.svg';
import { ReactComponent as Phone } from '../assets/icons/smartphone.svg';
import { ReactComponent as Back } from '../assets/icons/reply.svg';
import { ReactComponent as Forward } from '../assets/icons/forward.svg';




const ArkaPlan = (props) => {

    const BlurBackground = () => {
        var photo_div = document.getElementById('photo_div');
        var prc = document.getElementById('volume');
        prc.addEventListener('input', () => {
            var pixel = prc.value * 0.100;
            photo_div.style.filter = `blur(${pixel + ''}px)`;
        })
    }

    const TansparencyOpacityBackground = () => {
        var photo_div = document.getElementById('photo_div');
        const prc2 = document.getElementById('transparency');
        prc2.addEventListener('input', () => { 
            var pixel = prc2.value /100;
            photo_div.style.opacity = `${pixel}`;
        })
    }

    const [Background, setBackground] = useState('#233CF5');
    const handleChangeComplete = (color) => {
        // this.setState({ background: color.hex });
        // console.log(color.hex);
        setBackground(color.hex);
        var photo_div = document.getElementById('photo_div');
        photo_div.style.backgroundImage = 'none';
        photo_div.style.backgroundColor = color.hex;
    };

    const backlist = [
        {
            id: 1,
            image: img
        },
        {
            id: 2,
            image: img
        },
        {
            id: 3,
            image: img
        },
        {
            id: 4,
            image: img
        },
        {
            id: 5,
            image: img
        },
        {
            id: 6,
            image: img
        }
    ];

    const [checked, setchecked] = useState(false);
    const [colorhex, setcolorhex] = useState();

    const handleSetChecked = (state) => {
        setchecked(state);
        var photo_image = document.getElementById('photo_image');
        var photo_div = document.getElementById('photo_div');
        if (!checked) {
            photo_div.style.backgroundImage = 'url(' + photo_image.src + ')';
        } else {
            photo_div.style.backgroundImage = "url('http://localhost:3000/static/media/backgroundimg.9a582df1eb22e5096422.jpg')";
        }
    }

    const getSliderRange1 = () => {
        const prc = document.getElementById('volume');
        const Display = document.getElementById('volumdisplay');
        prc.addEventListener('input', () => {
            Display.innerHTML = `%${prc.value}`;

        })
    };

    const getSliderRange2 = () => {
        const prc2 = document.getElementById('transparency');
        const Display2 = document.getElementById('transparencydisplay');
        prc2.addEventListener('input', () => {
            Display2.innerHTML = `%${prc2.value}`;
        })
    };


    useEffect(() => {
        if (checked) {
            getSliderRange1();
            BlurBackground();
        };

        getSliderRange2();
        TansparencyOpacityBackground();

    })
    const [PhoneIconSelected, setPhoneIconSelected] = useState(false);
    const [PcSelected, setPcSelected] = useState(true);

    // range.addEventListener('input', () => {
    //   const minPrice = range.value - 25;
    //   const maxPrice = parseInt(range.value) + 25;
    //   priceDisplay.innerHTML = `$${minPrice} - $${maxPrice}`;
    // });

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
            <label className={` ml-4 text-popNormal12`} >Arka Plan</label>
            <div className={` flex flex-row mt-5 place-content-between px-4 place-items-center`}>
                <label className={` text-pop40012 text-bar-offline-0`}>Görseli Arka plana Ekle</label>
                {/* Toggle checkbox */}
                <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked onClick={() => handleSetChecked(!checked)} type="checkbox" value=""
                        className="sr-only peer" checked={checked} />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer    dark:bg-[#EAECF0] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1163FA] "></div>
                </label>
                {/*  */}

            </div>
            <label className={` text-pop40010 text-bar-offline-0 px-4 mt-1`}>Orijinal Fotoğrafı arkaplana yayar <br />
                ve fotoğrafa bulanıklaştırır</label>
            {checked ?
                <div className={` mx-4 mt-[14px] flex flex-col`}>
                    <label className={` text-pop40012 text-bar-offline-0`}>Bulanıklık</label>
                    <div className={`flex place-content-between place-items-center justify-between overflow-hidden h-8 w-full bg-bar-section-0  rounded mt-[3px] pl-[4px] pr-[6px] `}>

                        <input type="range" id="volume" name="volume"
                            min="0" max="100" step="1" className="w-[180px] h-[5px] accent-btn-blue-0 cursor-pointer bg-white rounded-lg" />
                        {/* <label for="volume" className=" text-popNormal12 text-bar-offline-0" ></label> */}
                        <p id="volumdisplay" className=" text-popNormal12 text-bar-offline-0">%0</p>

                    </div>
                </div>
                :
                <></>
            }



            <div className={` mx-4 mt-[14px] `}>
                <label className={` text-pop40012 text-bar-offline-0`}>Saydamlık</label>
                <div className={` h-8 w-full bg-bar-section-0 rounded mt-[3px] flex place-content-between place-items-center pr-[6px] pl-[4.5px]`}>
                    {/* left grid  */}
                    <div className="grid grid-cols-2 gap-0 place-content-center h-[23px] w-[23px] ">
                        <div className={` h-[11px] w-[11px] bg-bar-offline-0`}></div>
                        <div className={` h-[11px] w-[11px] bg-[#EBEBEB]`}></div>
                        <div className={` h-[11px] w-[11px] bg-[#EBEBEB]`}></div>
                        <div className={` h-[11px] w-[11px] bg-bar-offline-0`}></div>
                    </div>

                    <input type="range" id="transparency" name="volume"
                        min="0" max="100" step="1" className="w-[180px] h-[5px] accent-btn-blue-0 cursor-pointer bg-white rounded-lg mr-4" />
                    <p id="transparencydisplay" className=" text-popNormal12 text-bar-offline-0" >%0</p>
                </div>
            </div>

            <div className="mx-4 mt-[22px] flex flex-row place-items-end place-content-between ">
                <div className={`w-[45px] h-[45px] rounded  `} style={{ backgroundColor: Background }} />
                <HuePicker
                    width="200px"
                    color={Background}
                    onChangeComplete={(color) => handleChangeComplete(color)}
                    onChange={(color) => handleChangeComplete(color)}
                // onChange={(color)=>handleChangeComplete(color)}
                />

            </div>

            <div className="grid grid-cols-4 gap-4 bg-white px-3 mt-[22px] place-items-center ">
                {backlist.map((item) => (
                    <img src={item.image} className=" bg-blue-300 w-[45px] h-[45px] rounded " />
                ))}
            </div>
        </div>
    )
}
export default ArkaPlan;