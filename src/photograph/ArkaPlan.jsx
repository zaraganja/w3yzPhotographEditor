import React, { useEffect, useState } from "react";
import img from '../assets/images/backgroundimg.jpg';
import { SketchPicker, SliderPicker, HuePicker } from 'react-color';




const ArkaPlan = (props) => {

    const [Background, setBackground] = useState('#233CF5');
    const handleChangeComplete = (color) => {
        // this.setState({ background: color.hex });
        // console.log(color.hex);
        setBackground(color.hex);
        console.log(Background);
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
        };
        
        getSliderRange2();

    })


    // range.addEventListener('input', () => {
    //   const minPrice = range.value - 25;
    //   const maxPrice = parseInt(range.value) + 25;
    //   priceDisplay.innerHTML = `$${minPrice} - $${maxPrice}`;
    // });

    return (

        <div className={` mt-4 flex flex-col`}>
            <h className={` ml-4 text-popNormal12`} >Arka Plan</h>
            <div className={` flex flex-row mt-5 place-content-between px-4 place-items-center`}>
                <h className={` text-pop40012 text-bar-offline-0`}>Görseli Arka plana Ekle</h>
                {/* Toggle checkbox */}
                <label class="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked onClick={() => { setchecked(!checked); console.log(checked) }} type="checkbox" value="" class="sr-only peer" checked={checked} />
                    <div class="w-11 h-6 bg-gray-200 rounded-full peer    dark:bg-[#EAECF0] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1163FA] "></div>
                </label>
                {/*  */}

            </div>
            <h className={` text-pop40010 text-bar-offline-0 px-4 mt-1`}>Orijinal Fotoğrafı arkaplana yayar <br />
                ve fotoğrafa bulanıklaştırır</h>
            {checked ?
                <div className={` mx-4 mt-[14px] flex flex-col`}>
                    <h className={` text-pop40012 text-bar-offline-0`}>Bulanıklık</h>
                    <div className={`flex place-content-between place-items-center justify-between overflow-hidden h-8 w-full bg-bar-section-0  rounded mt-[3px] pl-[4px] pr-[6px] `}>

                        <input type="range" id="volume" name="volume"
                            min="0" max="100" step="1" className="w-[180px] h-[5px] accent-btn-blue-0 cursor-pointer bg-white rounded-lg" />
                        {/* <label for="volume" className=" text-popNormal12 text-bar-offline-0" ></label> */}
                        <p id="volumdisplay" class=" text-popNormal12 text-bar-offline-0">%0</p>

                    </div>
                </div>
                :
                <></>
            }



            <div className={` mx-4 mt-[14px] `}>
                <h className={` text-pop40012 text-bar-offline-0`}>Saydamlık</h>
                <div className={` h-8 w-full bg-bar-section-0 rounded mt-[3px] flex place-content-between place-items-center pr-[6px] pl-[4.5px]`}>
                    {/* left grid  */}
                    <div class="grid grid-cols-2 gap-0 place-content-center h-[23px] w-[23px] ">
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
                <div className={`w-[45px] h-[45px] rounded  `} style={{backgroundColor:Background}} />
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