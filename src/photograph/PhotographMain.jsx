import React, { useState } from "react";
import { ReactComponent as Cropicon } from '../assets/icons/crop.svg';
import { ReactComponent as Arkaplanicon } from '../assets/icons/arkaplan.svg';
import { ReactComponent as Colors } from '../assets/icons/tune.svg';
import { ReactComponent as TXT } from '../assets/icons/format_color_text.svg';
import yummphoto from "../assets/images/yummyphoto.jpg";
import Duzenle from "./Duzenle";
import ArkaPlan from "./ArkaPlan";
import RenkAyarlari from "./RenkAyarlari";
import MetinEkle from "./MetinEkle";




const PhotographMain = (props) => {
    const [OnCropSelect, setOnCropSelect] = useState(true);
    const [OnBackgroundSelect, setOnBackgroundSelect] = useState(false);
    const [OnColorsSelect, setOnColorsSelect] = useState(false);
    const [OnAddTXTselect, setOnAddTXTselect] = useState(false);
    const [deleteBorderLeft, setdeleteBorderLeft] = useState(false);
    return (
        <section className={`max-h-screen overflow-hidden font-pop`}>
            <div className={`h-20  flex flex-row justify-between bg-white items-center pr-5 pl-5 devide-y border-b border-border-color-0`}>
                <h className=" text-popNormal16 text-text-color-0">İmaj Düzenle</h>
                <ul>
                    <button className={`mr-7 hover:text-zinc-500 text-pop14 text-text-color-0`}>Vazgeç</button>
                    <button className={`rounded bg-btn-blue-0 hover:bg-blue-800 h-10 w-20 text-white text-pop14`}>Kaydet</button>
                </ul>
            </div>
            <div className={`flex flex-1 flex-row h-screen`}>
                <div className={`w-5/6 flex flex-col max-h-full `}>
                    <div className={`h-3.9/5 bg-myBackImage bg-cover m-5 z-0 flex place-content-center `}>
                        <img src={yummphoto} className={` object-fill h-full w-1/3`} />
                    </div>
                    <div className={`h-1/5 justify-center justify-items-center  overflow-hidden `}>
                        {/* bottom buttons */}
                        <ul className={`flex flex-row justify-between align-middle overflow-hidden mt-10 bg-white px-96`}>
                            <div className={` flex flex-col place-content-center self-center overflow-hidden place-items-center`} >
                                <Cropicon fill={OnCropSelect ? '#1D2939' : '#888888'} />
                                <button onClick={() => { setOnBackgroundSelect(false); setOnCropSelect(true); setOnColorsSelect(false); setOnAddTXTselect(false); setdeleteBorderLeft(false) }} className={` pt-2 hover:text-gray-600 text-pop60016 ${OnCropSelect ? ` text-text-color-0` : ` text-bar-offline-0 `}  `}>Düzenle</button>
                            </div>
                            <div className={` flex flex-col place-content-center self-center overflow-hidden place-items-center`}>
                                <Arkaplanicon fill={OnBackgroundSelect ? '#1D2939' : '#888888'} />
                                <button onClick={() => { setOnBackgroundSelect(true); setOnCropSelect(false); setOnColorsSelect(false); setOnAddTXTselect(false); setdeleteBorderLeft(false) }} className={` pt-2 hover:text-gray-600 text-pop60016 ${OnBackgroundSelect ? ` text-text-color-0` : ` text-bar-offline-0`}`}>Arka Plan </button>
                            </div>
                            <div className={` flex flex-col place-content-center self-center overflow-hidden place-items-center`}>
                                <Colors fill={OnColorsSelect ? '#1D2939' : '#888888'} />
                                <button onClick={() => { setOnBackgroundSelect(false); setOnCropSelect(false); setOnColorsSelect(true); setOnAddTXTselect(false); setdeleteBorderLeft(false) }} className={` pt-2 hover:text-gray-600 text-pop60016 ${OnColorsSelect ? ` text-text-color-0` : ` text-bar-offline-0`}   `}>Renk Ayarları</button>
                            </div>
                            <div className={` flex flex-col place-content-center self-center overflow-hidden place-items-center`}>
                                <TXT fill={OnAddTXTselect ? '#1D2939' : '#888888'} />
                                <button onClick={() => { setOnBackgroundSelect(false); setOnCropSelect(false); setOnColorsSelect(false); setOnAddTXTselect(true); setdeleteBorderLeft(true) }} className={` pt-2 hover:text-gray-600 text-pop60016 ${OnAddTXTselect ? ` text-text-color-0` : ` text-bar-offline-0`}`}>Metin Ekle</button>
                            </div>
                        </ul>
                    </div>
                </div>
                {/* right menue */}
                <div className={`w-1/6 bg-white border-border-color-0 ${deleteBorderLeft ? ` border-l-0` : `border-l`} `}>
                    {OnCropSelect ?
                        <Duzenle />
                        :
                        <></>
                    }
                    {OnBackgroundSelect ?
                        <ArkaPlan />
                        :
                        <></>
                    }
                    {OnColorsSelect ?
                        <RenkAyarlari />
                        :
                        <></>}
                    {OnAddTXTselect ?
                        <MetinEkle />
                        :
                        <></>}
                </div>
            </div>
        </section>
    )
}
export default PhotographMain;