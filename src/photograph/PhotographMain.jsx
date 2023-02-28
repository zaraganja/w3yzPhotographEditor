import React, { useEffect, useState } from "react";

import { ReactComponent as Cropicon } from '../assets/icons/crop.svg';
import { ReactComponent as Arkaplanicon } from '../assets/icons/arkaplan.svg';
import { ReactComponent as Colors } from '../assets/icons/tune.svg';
import { ReactComponent as TXT } from '../assets/icons/format_color_text.svg';
import { ReactComponent as CursorMove } from '../assets/icons/cursormove.svg';
import { ReactComponent as CloseTxt } from '../assets/icons/closetxt.svg';
// import {
//     crop as Cropicon,
//     arkaplan as Arkaplanicon ,
//     tune as Colors,
//     format_color_text as TXT
// } from '../assets/icons';

import yummphoto from "../assets/images/yummyphoto.jpg";
import Duzenle from "./Duzenle";
import ArkaPlan from "./ArkaPlan";
import RenkAyarlari from "./RenkAyarlari";
import MetinEkle from "./MetinEkle";




const PhotographMain = (props) => {

    const CloseAddText = () => {
        var draggable = document.getElementById("draggable");
        draggable.style.display = 'none';
    }

    const CloseSticker =()=> {
        var draggable = document.getElementById("StickerDraggable");
        draggable.style.display = 'none';
    }


    const DragMetinEkle = () => {
        //Make the DIV element draggagle:
        dragElement(document.getElementById("draggable"));

        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
                /* if present, the header is where you move the DIV from:*/
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            } else {
                /* otherwise, move the DIV from anywhere inside the DIV:*/
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                var container = document.body;
                if (elmnt.offsetLeft - pos1 >= 0 && elmnt.offsetLeft - pos1 + elmnt.offsetWidth <= container.offsetWidth) {
                    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                }
                if (elmnt.offsetTop - pos2 >= 0 && elmnt.offsetTop - pos2 + elmnt.offsetHeight <= container.offsetHeight) {
                    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                }
            }

            function closeDragElement() {
                /* stop moving when mouse button is released:*/
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }

    }

    const DragSticker = () => {
        //Make the DIV element draggagle:
        dragElement(document.getElementById("StickerDraggable"));

        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
                /* if present, the header is where you move the DIV from:*/
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            } else {
                /* otherwise, move the DIV from anywhere inside the DIV:*/
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                var container = document.body;
                if (elmnt.offsetLeft - pos1 >= 0 && elmnt.offsetLeft - pos1 + elmnt.offsetWidth <= container.offsetWidth) {
                    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                }
                if (elmnt.offsetTop - pos2 >= 0 && elmnt.offsetTop - pos2 + elmnt.offsetHeight <= container.offsetHeight) {
                    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                }
            }

            function closeDragElement() {
                /* stop moving when mouse button is released:*/
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }

    }

    useEffect(() => {
        DragMetinEkle();
        DragSticker();
    })


    const [OnCropSelect, setOnCropSelect] = useState(true);
    const [OnBackgroundSelect, setOnBackgroundSelect] = useState(false);
    const [OnColorsSelect, setOnColorsSelect] = useState(false);
    const [OnAddTXTselect, setOnAddTXTselect] = useState(false);

    return (
        <div className=" place-items-center place-content-center justify-center align-middle  flex bg-gray-200 w-screen h-screen ">
            <section className={` overflow-hidden font-pop w-[1600px] h-[880px] border-gray-200 border shadow-md bg-white  `}>
                <div className={`h-20  flex flex-row justify-between bg-white items-center pr-5 pl-5 devide-y border-b border-border-color-0`}>
                    <label className=" text-popNormal16 text-text-color-0">İmaj Düzenle</label>
                    <ul>
                        <button onClick={() => props.onClose()} className={`mr-7 hover:text-zinc-500 text-pop14 text-text-color-0`}>Vazgeç</button>
                        <button className={`rounded bg-btn-blue-0 hover:bg-blue-800 h-10 w-20 text-white text-pop14`}>Kaydet</button>
                    </ul>
                </div>
                <div className={`flex flex-row h-screen`}>
                    <div className={`w-5/6 flex flex-col `}>
                        <div id="photo_maindiv" className=" w-[97%] max-w-[97%] h-importantHeight ml-5 mt-5 mr-[3px] relative overflow-hidden ">

                            <div className={` bg-myBackImage bg-cover  flex place-content-center overflow-hidden place-items-center`}
                                id="photo_div">
                                <div id="vignetteContainer" className=" ">
                                    <img src={yummphoto} className={`object-fit w-[392px] self-center`} id="photo_image" />

                                </div>

                                {/* ADD TEXT PART */}
                                <div id="draggable" rows="4" cols="50" contentEditable={true} draggable={true}
                                    onDragStart={() => console.log('asdasdas')} className=" resize border-2 border-dotted border-btn-blue-0 absolute bg-transparent self-center text-black  hidden w-[214px] min-h-[60px] max-h-[260px]   " >
                                    <div id="draggableheader" className=" cursor-move w-4 h-4 absolute -mt-[12px] -ml-[12px]  place-items-center bg-[#667085]  ">
                                        <CursorMove />
                                    </div>

                                    <label id="AddTextTXT" className=" mt-2 max-h-[260px] max-w-[214px] ">METİN EKLE</label>
                                    <div onClick={() => CloseAddText()}  className=" ml-[205px] -mt-[10px] w-4 h-4 absolute rounded-[100%]  flex place-items-center place-content-center cursor-pointer bg-[#667085]  ">
                                        <CloseTxt />
                                    </div>
                                </div>


                                {/* sticker  */}
                                <div id="StickerDraggable"  contentEditable={true} draggable={true}
                                    onDragStart={() => console.log('asdasdas')} className=" resize border-2 border-dotted border-btn-blue-0 absolute bg-transparent self-center  w-[75px] h-[75px] hidden  " >
                                    <div id="draggableheader" className=" z-10 cursor-move w-4 h-4 absolute -mt-[12px] -ml-[12px] flex place-items-center bg-[#667085]">
                                        <CursorMove />
                                    </div>
                                    <img id="StickerImg" ></img>  
                                    <div onClick={() => CloseSticker()}  className=" z-10 ml-[67px] -mt-[10px] w-4 h-4 absolute rounded-[100%]  flex place-items-center place-content-center cursor-pointer bg-[#667085] ">
                                        <CloseTxt />
                                    </div>
                                </div>
                            </div>


                            {/* <div className={` bg-myBackImage bg-cover w-[1280px] h-importantHeight ml-5 mt-5 mr-[3px] flex place-content-center overflow-hidden place-items-center blur-md`}
                                id="photo_div">
                               
                                 </div> 
                                 <img src={yummphoto} className={`object-fit w-[392px] self-center  `} id="photo_image" />   */}


                        </div>
                        {/* <div className={` bg-black justify-center justify-items-center  overflow-hidden`}> */}
                        {/* bottom buttons */}
                        <ul className={`flex flex-row justify-between align-middle overflow-hidden mt-[30px] bg-white px-96`}>
                            <li onClick={() => { setOnBackgroundSelect(false); setOnCropSelect(true); setOnColorsSelect(false); setOnAddTXTselect(false) }} className={` hover:cursor-pointer flex flex-col place-content-center self-center overflow-hidden place-items-center`} >
                                <Cropicon fill={OnCropSelect ? '#1D2939' : '#888888'} />
                                <button className={` pt-2 hover:text-gray-600 text-pop60016 ${OnCropSelect ? ` text-text-color-0` : ` text-bar-offline-0 `}  `}>Düzenle</button>
                            </li>
                            <li onClick={() => { setOnBackgroundSelect(true); setOnCropSelect(false); setOnColorsSelect(false); setOnAddTXTselect(false) }} className={` hover:cursor-pointer flex flex-col place-content-center self-center overflow-hidden place-items-center`}>
                                <Arkaplanicon fill={OnBackgroundSelect ? '#1D2939' : '#888888'} />
                                <button className={` pt-2 hover:text-gray-600 text-pop60016 ${OnBackgroundSelect ? ` text-text-color-0` : ` text-bar-offline-0`}`}>Arka Plan </button>
                            </li>
                            <li onClick={() => { setOnBackgroundSelect(false); setOnCropSelect(false); setOnColorsSelect(true); setOnAddTXTselect(false) }} className={` hover:cursor-pointer flex flex-col place-content-center self-center overflow-hidden place-items-center`}>
                                <Colors fill={OnColorsSelect ? '#1D2939' : '#888888'} />
                                <button className={` pt-2 hover:text-gray-600 text-pop60016 ${OnColorsSelect ? ` text-text-color-0` : ` text-bar-offline-0`}   `}>Renk Ayarları</button>
                            </li>
                            <li onClick={() => { setOnBackgroundSelect(false); setOnCropSelect(false); setOnColorsSelect(false); setOnAddTXTselect(true) }} className={` hover:cursor-pointer flex flex-col place-content-center self-center overflow-hidden place-items-center`}>
                                <TXT fill={OnAddTXTselect ? '#1D2939' : '#888888'} />
                                <button className={` pt-2 hover:text-gray-600 text-pop60016 ${OnAddTXTselect ? ` text-text-color-0` : ` text-bar-offline-0`}`}>Metin Ekle</button>
                            </li>
                        </ul>
                        {/* </div> */}
                    </div>
                    {/* right menue */}
                    <div className={`w-1.5/6 bg-white border-border-color-0 border-l overflow-scroll h-screen  `}>
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
        </div>
    )
}
export default PhotographMain;