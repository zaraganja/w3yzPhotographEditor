import React, { useEffect, useState } from "react";
import img2 from '../assets/images/Rectangle2.png';
import img1 from '../assets/images/Rectangle1.png';
import defaultimg from '../assets/images/yummyphoto.jpg';
import { ReactComponent as Pc } from '../assets/icons/computer.svg';
import { ReactComponent as Phone } from '../assets/icons/smartphone.svg';
import { ReactComponent as Back } from '../assets/icons/reply.svg';
import { ReactComponent as Forward } from '../assets/icons/forward.svg';


const RenkAyarlari = (props) => {

    const Brightness = () => {
        var photo_image = document.getElementById('photo_image');
        var photo_image_hidden = document.getElementById('photo_image_hidden');
        var BRI = document.getElementById('brightness');
        BRI.addEventListener('input', () => {
            photo_image.style.filter = `brightness(${BRI.value}%)`;
            photo_image_hidden.style.filter = `brightness(${BRI.value}%)`;
        })
    }

    const Contrast = () => {
        var photo_image = document.getElementById('photo_image');
        var photo_image_hidden = document.getElementById('photo_image_hidden');
        var CRT = document.getElementById('contrast');
        CRT.addEventListener('input', () => {
            photo_image.style.filter = `contrast(${CRT.value}%)`;
            photo_image_hidden.style.filter = `contrast(${CRT.value}%)`;
        })
    }

    const Sharpness = () => {
        var photo_image = document.getElementById('photo_image');
        var photo_image_hidden = document.getElementById('photo_image_hidden');
        var SHRP = document.getElementById('sharpness');
        SHRP.addEventListener('input', () => {
            photo_image.style.filter = `contrast(${SHRP.value}%)`;
            photo_image.style.filter = `brightness(${SHRP.value}%)`;
            photo_image.style.filter = `saturate(${SHRP.value}%)`;

            photo_image_hidden.style.filter = `contrast(${SHRP.value}%)`;
            photo_image_hidden.style.filter = `brightness(${SHRP.value}%)`;
            photo_image_hidden.style.filter = `saturate(${SHRP.value}%)`;

        })
    }

    const Temprature = () => {
        var photo_image = document.getElementById('photo_image');
        var photo_image_hidden = document.getElementById('photo_image_hidden');
        var TMP = document.getElementById('temprature');
        TMP.addEventListener('input', () => {
            photo_image.style.filter = `hue-rotate(${-TMP.value}deg)`;
            photo_image_hidden.style.filter = `hue-rotate(${-TMP.value}deg)`;
            //  photo_image.style.filter = `brightness(${TMP.value}%)`;
            //  photo_image.style.filter= `contrast(${TMP.value}%)`;

        })
    }

    const Saturation = () => {
        var photo_image = document.getElementById('photo_image');
        var photo_image_hidden = document.getElementById('photo_image_hidden');
        var STR = document.getElementById('saturation');
        STR.addEventListener('input', () => {
            photo_image.style.filter = `saturate(${STR.value}%)`;
            photo_image_hidden.style.filter = `saturate(${STR.value}%)`;
        })
    }

    const Vignette = () => {
        var photo_image = document.getElementById('photo_image');
        var photo_image_hidden = document.getElementById('photo_image_hidden');
        var vignetteContainer = document.getElementById('vignetteContainer');
        var VGT = document.getElementById('vignette');
        VGT.addEventListener('input', () => {
            //    photo_image.style.border=  `5px`;
            vignetteContainer.style.boxShadow = '10px 10px 2000px rgba(0,0,0,1.5) inset';
            photo_image.style.borderRadius = `${VGT.value + ''}px`;
            photo_image_hidden.style.borderRadius = `${VGT.value + ''}px`;
            if (VGT.value === 0) {
                photo_image.style.padding = '0';
                photo_image_hidden.style.padding = '0';
            }
        })
    }

    const BlurBackground = () => {
        var photo_image = document.getElementById('photo_image');
        var photo_image_hidden = document.getElementById('photo_image_hidden');
        var prc = document.getElementById('blurimg');
        prc.addEventListener('input', () => {
            var pixel = prc.value * 0.100;
            photo_image.style.filter = `blur(${pixel + ''}px)`;
            photo_image_hidden.style.filter = `blur(${pixel + ''}px)`;
        })
    }

    const ResetSettings = () => {
        var photo_image = document.getElementById('photo_image');
        var photo_image_hidden = document.getElementById('photo_image_hidden');

        document.getElementById('blurimg').value = "50";
        document.getElementById('vignette').value = "50";
        document.getElementById('saturation').value = "50";
        document.getElementById('temprature').value = "50";
        document.getElementById('sharpness').value = "110";
        document.getElementById('contrast').value = "50";
        document.getElementById('brightness').value = "50";

        photo_image.style.removeProperty('filter');
        photo_image.style.borderRadius = `0px`;
        photo_image.style.padding = '0';
        photo_image_hidden.style.removeProperty('filter');
        photo_image_hidden.style.borderRadius = `0px`;
        photo_image_hidden.style.padding = '0';

    }
    const filters = [
        {
            id: 1,
            class: "",
            classForBlurBackImage: "imageOfBlurBack",
            filtername: "Normal"

        },
        {
            id: 2,
            class: "filter-inkwell",
            classForBlurBackImage: "filter-inkwell imageOfBlurBack",
            filtername: "Inkwell"
        },

        {
            id: 3,
            class: "filter-aden",
            classForBlurBackImage: "filter-aden imageOfBlurBack",
            filtername: "Aden"
        },
        {
            id: 4,
            class: "filter-amaro",
            classForBlurBackImage: "filter-amaro imageOfBlurBack",
            filtername: "Amaro"
        },
        {
            id: 5,
            class: "filter-ashby",
            classForBlurBackImage: "filter-ashby imageOfBlurBack",
            filtername: "Ashby"
        },
        {
            id: 6,
            class: "filter-brannan",
            classForBlurBackImage: "filter-brannan imageOfBlurBack",
            filtername: "Brannan"
        },
        {
            id: 7,
            class: "filter-brooklyn",
            classForBlurBackImage: "filter-brooklyn imageOfBlurBack",
            filtername: "Broklyn"
        },
        {
            id: 8,
            class: "filter-charmes",
            classForBlurBackImage: "filter-charmes imageOfBlurBack",
            filtername: "Charmes"
        },

        {
            id: 9,
            class: "filter-clarendon",
            classForBlurBackImage: "filter-clarendon imageOfBlurBack",
            filtername: "Clarendon"
        },
        {
            id: 10,
            class: "filter-crema",
            classForBlurBackImage: "filter-clarendon imageOfBlurBack",
            filtername: "Crema"
        },
        {
            id: 11,
            class: "filter-dogpatch",
            classForBlurBackImage: "filter-dogpatch imageOfBlurBack",
            filtername: "Dogpatch"
        },
        {
            id: 12,
            class: "filter-earlybird",
            classForBlurBackImage: "filter-earlybird imageOfBlurBack",
            filtername: "Earlybird"
        },
        {
            id: 13,
            class: "filter-gingham",
            classForBlurBackImage: "filter-gingham imageOfBlurBack",
            filtername: "Gingham"
        },
        {
            id: 14,
            class: "filter-ginza",
            classForBlurBackImage: "filter-ginza imageOfBlurBack",
            filtername: "Ginza"
        },
        {
            id: 15,
            class: "filter-hefe",
            classForBlurBackImage: "filter-hefe imageOfBlurBack",
            filtername: "Hefe"
        },
        {
            id: 16,
            class: "filter-clarendon",
            classForBlurBackImage: "filter-clarendon imageOfBlurBack",
            filtername: "Clarendon"
        },
        {
            id: 17,
            class: "filter-helena",
            classForBlurBackImage: "filter-helena imageOfBlurBack",
            filtername: "Helena"
        },
        {
            id: 18,
            class: "filter-hudson",
            classForBlurBackImage: "filter-hudson imageOfBlurBack",
            filtername: "Hudson"
        },
        {
            id: 19,
            class: "filter-1977",
            classForBlurBackImage: "filter-1977 imageOfBlurBack",
            filtername: "1977"
        },
        {
            id: 20,
            class: "filter-kelvin",
            classForBlurBackImage: "filter-kelvin imageOfBlurBack",
            filtername: "Kelvin"
        },
        {
            id: 21,
            class: "filter-juno",
            classForBlurBackImage: "filter-juno imageOfBlurBack",
            filtername: "Juno"
        }
    ];
    const [PhoneIconSelected, setPhoneIconSelected] = useState(false);
    const [PcSelected, setPcSelected] = useState(true);


    useEffect(() => {
        Brightness();
        Contrast();
        Sharpness();
        Temprature();
        Saturation();
        Vignette();
        BlurBackground();

    })


    return (
        <div className={` mt-4 flex flex-col overflow-scroll pb-[30%]`}>
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
            <label className={` ml-[28px] text-popNormal12 text-text-color-0`} >Renk Ayarları</label>
            <button onClick={() => ResetSettings()} className={` text-bar-offline-0 text-popNormal12 border border-box-stroke-0 place-items-center w-[263px] max-h-[32px] min-h-[32px] h-[32px] self-center mt-[15px] rounded hover:bg-gray-200`}>ayarları sıfırla</button>

            <div className={`flex flex-col place-items-center  overflow-hidden min-h-[50px] bg-white self-center mt-7`}>
                <label className={`mb-4 self-start text-bar-offline-0 text-popNormal12`}>Parlaklık</label>
                <input type="range" id="brightness" name="brightness"
                    min="0" max="200" step="1" className="w-[263px] h-1  accent-btn-blue-0 cursor-pointer   bg-white rounded-lg " />
            </div>
            <div className={`flex flex-col place-items-center  overflow-hidden min-h-[50px] bg-white self-center mt-4`}>
                <label className={`mb-4 self-start text-bar-offline-0 text-popNormal12`}>Kontrast</label>
                <input type="range" id="contrast" name="contrast"
                    min="0" max="200" step="1" className="w-[263px] h-1 accent-btn-blue-0 cursor-pointer bg-white rounded-lg " />
            </div>
            <div className={`flex flex-col place-items-center min-h-[50px] overflow-hidden min-h-16 bg-white self-center mt-4`}>
                <label className={`mb-4 self-start text-bar-offline-0 text-popNormal12`}>Keskinlik</label>
                <input type="range" id="sharpness" name="sharpness"
                    min="110" max="300" step="1" className="w-[263px] h-1 accent-btn-blue-0 cursor-pointer   bg-white rounded-lg " />
            </div>
            <div className={`flex flex-col place-items-center min-h-[50px] overflow-hidden min-h-16 bg-white self-center mt-4`}>
                <label className={`mb-4 self-start text-bar-offline-0 text-popNormal12`}>Sıcaklık</label>
                <input type="range" id="temprature" name="Temprature"
                    min="-50" max="150" step="1" className="w-[263px] h-1 accent-btn-blue-0 cursor-pointer  bg-white rounded-lg " />
            </div>
            <div className={`flex flex-col place-items-center min-h-[50px] overflow-hidden min-h-16 bg-white self-center mt-4`}>
                <label className={`mb-4 self-start text-bar-offline-0 text-popNormal12`}>Doygunluk</label>
                <input type="range" id="saturation" name="saturation"
                    min="-100" max="200" step="1" className="w-[263px] h-1 accent-btn-blue-0 cursor-pointer bg-white rounded-lg " />
            </div>
            <div className={`flex flex-col place-items-center min-h-[50px] overflow-hidden min-h-16 bg-white self-center mt-4`}>
                <label className={`mb-4 self-start text-bar-offline-0 text-popNormal12`}>Vinyet</label>
                <input type="range" id="vignette" name="vignette"
                    min="0" max="100" step="1" className="w-[263px] h-1 accent-btn-blue-0 cursor-pointer bg-white rounded-lg " />
            </div>
            <div className={`flex flex-col place-items-center min-h-[50px] overflow-hidden min-h-16 bg-white self-center mt-4`}>
                <label className={` self-start text-bar-offline-0 text-popNormal12 mb-4`}>Bulanıklık</label>
                <input type="range" id="blurimg" name="blurimg"
                    min="0" max="100" step="1" className="w-[263px] h-1 accent-btn-blue-0 cursor-pointer  bg-white rounded-lg " />
            </div>
            <label className={` text-popNormal12 text-text-color-0 ml-4 mt-[23px]`}>Renk Filtreleri</label>
            <div className="grid grid-cols-3 gap-4 bg-white place-items-center mx-4 mt-4  overflow-scroll pb-[30%] ">
                {filters.map((item, index) => (
                    <div onClick={() => {
                        props.Applyfilterclass(item.class);
                        var hiddenphoto = document.getElementById("photo_image_hidden");
                        hiddenphoto.style.removeProperty('filter');
                        props.ApplyclassForBlurBackImage(item.classForBlurBackImage);

                    }} key={index} className=" hover:cursor-pointer" >
                        <figure class={item.class} >
                            <img src={props.imageURI} className=" bg-blue-300 w-[65px] h-[65px] rounded " />
                        </figure>
                        <label className={` text-pop40012 text-bar-offline-0`}>{item.filtername}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RenkAyarlari;