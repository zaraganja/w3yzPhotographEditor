import React, { useEffect, useState, useRef, useCallback } from "react";

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

import yummphoto from "../assets/images/IMG_9864.jpeg";
import Duzenle from "./Duzenle";
import ArkaPlan from "./ArkaPlan";
import RenkAyarlari from "./RenkAyarlari";
import MetinEkle from "./MetinEkle";
import { toPng } from 'html-to-image';
import { Resizable } from 'react-resizable';




const PhotographMain = (props) => {
    const ref = useRef()

    const GetFinalImage = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'my-image-name.png'
                link.href = dataUrl
                link.click()
                console.log(dataUrl)
                console.log(link)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])

    const [divs, setDivs] = useState([]);
    const [SelectedTXT, setSelectedTXT] = useState();
    const [Stickers, setStickers] = useState([]);

    const AddTextdiv = () => {
        console.log(`draggable${divs.length}`);
        const newDiv =
            <div key={divs.length} draggable={true} id={`draggable${divs.length + 1}`} className={` outline-none active:border-solid  active:border-2 focus:border-solid resize hover:border-2 hover:border-dotted hover:border-btn-blue-0 absolute bg-transparent self-center text-black w-auto h-auto hover:box-border `} style={{ top: `${divs.length + 25}%` }}>
                <div key={divs.length} id={`draggable${divs.length + 1}header`} className=" hover:resize cursor-move w-4 h-4 absolute -top-[7px] -left-[7px]  place-items-center bg-[#667085]  ">
                    <CursorMove />
                </div>

                <div onClick={() => setSelectedTXT(divs.length + 1)} contentEditable id={`AddTextTXT${divs.length + 1}`} className=" mt-2 max-h-[260px] max-w-[214px] ">METİN EKLE</div>
                <div onClick={() => CloseAddText(divs.length + 1)} className="  -top-[7px] -right-[7px]  w-4 h-4 absolute rounded-[100%]  flex place-items-center place-content-center cursor-pointer bg-[#667085]  ">
                    <CloseTxt />
                </div></div>
        setDivs(prevDivs => [...prevDivs, newDiv]);
    }


    const AddSticker = (img) => {
        const newstickerdiv =  
            <div key={Stickers.length} id={`StickerDraggable${Stickers.length + 1}`} draggable={true} style={{ top: `${Stickers.length + 25}%` }}
                    onDragStart={() => console.log('asdasdas')} className="  rounded hover:border-2 hover:border-dotted hover:border-btn-blue-0 absolute bg-transparent self-center w-auto h-auto " >
                    <div id={`draggable${Stickers.length + 1}header`} className=" z-10 cursor-move w-4 h-4 absolute -top-[7px] -left-[7px] flex place-items-center bg-[#667085] ">
                        <CursorMove />
                    </div>
                    <img src={img} id={`StickerImg${Stickers.length + 1}`}   ></img>
                    <div onClick={() => CloseSticker(Stickers.length + 1)} className=" z-10 -top-[7px] -right-[7px] w-4 h-4 absolute rounded-[100%]  flex place-items-center place-content-center cursor-pointer bg-[#667085] ">
                        <CloseTxt />
                    </div>
                </div>
        setStickers(previDivs => [...previDivs, newstickerdiv])
    }

    const CloseAddText = (elemnt) => {
        var draggable = document.getElementById("draggable" + elemnt);
        draggable.style.display = 'none';
    }

    const CloseSticker = (elmnt) => {
        var draggable = document.getElementById("StickerDraggable" + elmnt);
        draggable.style.display = 'none';
    }

    const DragMetinEkle = (leng) => {
        console.log("draggable" + leng);
        //Make the DIV element draggagle:
        dragElement(document.getElementById("draggable" + leng));

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

    const DragSticker = (leng) => {
        //Make the DIV element draggagle:
        dragElement(document.getElementById("StickerDraggable" + leng));

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
        if (divs.length !== 0) {
            DragMetinEkle(divs.length);
        }
        if (Stickers.length !== 0) {
            DragSticker(Stickers.length);
        }



    })



    const [OnCropSelect, setOnCropSelect] = useState(true);
    const [OnBackgroundSelect, setOnBackgroundSelect] = useState(false);
    const [OnColorsSelect, setOnColorsSelect] = useState(false);
    const [OnAddTXTselect, setOnAddTXTselect] = useState(false);

    return (
        <div className="place-items-center place-content-center justify-center align-middle  flex bg-gray-200 w-full h-[100%] min-h-[1080px] ">
            <section className={` overflow-hidden font-pop w-[1600px] h-[880px] border-gray-200 border shadow-md bg-white  `}>
                <div className={`h-20  flex flex-row justify-between bg-white items-center pr-5 pl-5 devide-y border-b border-border-color-0`}>
                    <label className=" text-popNormal16 text-text-color-0">İmaj Düzenle</label>
                    <ul>
                        <button onClick={() => props.onClose()} className={`mr-7 hover:text-zinc-500 text-pop14 text-text-color-0`}>Vazgeç</button>
                        <button onClick={() => GetFinalImage()} className={`rounded bg-btn-blue-0 hover:bg-blue-800 h-10 w-20 text-white text-pop14`}>Kaydet</button>
                    </ul>
                </div>
                <div className={`flex flex-row h-screen`}>
                    <div className={`w-[80%] min-w-[80%] flex flex-col pr-[0.5%] `}>
                        <div id="photo_maindiv" className=" w-[97%] max-w-[97%] h-importantHeight ml-5 mt-5 mr-[3px] relative overflow-hidden ">

                            <div ref={ref} className={` bg-myBackImage bg-cover  flex place-content-center overflow-hidden place-items-center`}
                                id="photo_div">
                                <div id="vignetteContainer" className=" w-[392px] h-[626.43px] place-items-center flex ">
                                    <img src={yummphoto} className={` object-fill w-[392px] h-[626.43px] self-center`} id="photo_image" />
                                </div>

                                {/* ADD TEXT PART */}
                                {/* <div id="draggable" rows="4" cols="50" draggable={true}
                                    onDragStart={() => console.log('asdasdas')} className=" resize border-2 border-dotted border-btn-blue-0 absolute bg-transparent self-center text-black  hidden w-[214px] min-h-[60px] max-h-[260px]   " >
                                    <div id="draggableheader" className=" cursor-move w-4 h-4 absolute -mt-[12px] -ml-[12px]  place-items-center bg-[#667085]  ">
                                        <CursorMove />
                                    </div>

                                    <label id="AddTextTXT" className=" mt-2 max-h-[260px] max-w-[214px] ">METİN EKLE</label>
                                    <div onClick={() => CloseAddText()} className=" ml-[205px] -mt-[10px] w-4 h-4 absolute rounded-[100%]  flex place-items-center place-content-center cursor-pointer bg-[#667085]  ">
                                        <CloseTxt />
                                    </div>
                                </div> */}
                                    
                                {divs.map(div => div)}


                                {/* sticker  */}
                                {/* <div id="StickerDraggable" draggable={true}
                                    onDragStart={() => console.log('asdasdas')} className=" resize border-2 border-dotted border-btn-blue-0 absolute bg-transparent self-center  w-[75px] h-[75px] hidden  " >
                                    <div id="draggableheader" className=" z-10 cursor-move w-4 h-4 absolute -mt-[12px] -ml-[12px] flex place-items-center bg-[#667085]">
                                        <CursorMove />
                                    </div>
                                    <img id="StickerImg" ></img>
                                    <div onClick={() => CloseSticker()} className=" z-10 ml-[67px] -mt-[10px] w-4 h-4 absolute rounded-[100%]  flex place-items-center place-content-center cursor-pointer bg-[#667085] ">
                                        <CloseTxt />
                                    </div>
                                </div> */}

                                {Stickers.map(div => div)}

                            </div>


                            {/* <div className={` bg-myBackImage bg-cover w-[1280px] h-importantHeight ml-5 mt-5 mr-[3px] flex place-content-center overflow-hidden place-items-center blur-md`}
                                id="photo_div">
                               
                                 </div> 
                                 <img src={yummphoto} className={`object-fit w-[392px] self-center  `} id="photo_image" />   */}


                        </div>
                        {/* <div className={` bg-black justify-center justify-items-center  overflow-hidden`}> */}
                        {/* bottom buttons */}
                        <ul className={`flex flex-row justify-between align-middle overflow-hidden  bg-white w-[65%] self-center mt-[2%] `}>
                            <li onClick={() => { setOnBackgroundSelect(false); setOnCropSelect(true); setOnColorsSelect(false); setOnAddTXTselect(false) }} className={` hover:cursor-pointer flex flex-col place-content-center self-center overflow-hidden place-items-center mx-[2%]`} >
                                <Cropicon fill={OnCropSelect ? '#1D2939' : '#888888'} />
                                <button className={` pt-2 hover:text-gray-600 text-pop60016 ${OnCropSelect ? ` text-text-color-0` : ` text-bar-offline-0 `}  `}>Düzenle</button>
                            </li>
                            <li onClick={() => { setOnBackgroundSelect(true); setOnCropSelect(false); setOnColorsSelect(false); setOnAddTXTselect(false) }} className={` hover:cursor-pointer flex flex-col place-content-center self-center overflow-hidden place-items-center mx-[2%]`}>
                                <Arkaplanicon fill={OnBackgroundSelect ? '#1D2939' : '#888888'} />
                                <button className={` pt-2 hover:text-gray-600 text-pop60016 ${OnBackgroundSelect ? ` text-text-color-0` : ` text-bar-offline-0`}`}>Arka Plan </button>
                            </li>
                            <li onClick={() => { setOnBackgroundSelect(false); setOnCropSelect(false); setOnColorsSelect(true); setOnAddTXTselect(false) }} className={` hover:cursor-pointer flex flex-col place-content-center self-center overflow-hidden place-items-center mx-[2%]`}>
                                <Colors fill={OnColorsSelect ? '#1D2939' : '#888888'} />
                                <button className={` pt-2 hover:text-gray-600 text-pop60016 ${OnColorsSelect ? ` text-text-color-0` : ` text-bar-offline-0`}   `}>Renk Ayarları</button>
                            </li>
                            <li onClick={() => { setOnBackgroundSelect(false); setOnCropSelect(false); setOnColorsSelect(false); setOnAddTXTselect(true) }} className={` hover:cursor-pointer flex flex-col place-content-center self-center overflow-hidden place-items-center mx-[2%]`}>
                                <TXT fill={OnAddTXTselect ? '#1D2939' : '#888888'} />
                                <button className={` pt-2 hover:text-gray-600 text-pop60016 ${OnAddTXTselect ? ` text-text-color-0` : ` text-bar-offline-0`}`}>Metin Ekle</button>
                            </li>
                        </ul>
                        {/* </div> */}
                    </div>
                    {/* right menue */}
                    <div className={` w-[20%] min-w-[20%] bg-white border-border-color-0 border-l overflow-scroll h-screen  `}>
                        {OnCropSelect ?
                            <Duzenle imageURI={yummphoto} />
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
                            <MetinEkle AddTextdiv={AddTextdiv} SelectedTXT={SelectedTXT} AddSticker={AddSticker} Stickerlength={Stickers.length + 1}
                            />
                            :
                            <></>}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default PhotographMain;