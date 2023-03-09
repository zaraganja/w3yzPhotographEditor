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

import yummphotoo from "../assets/images/instagram.jpg";
import insta from "../assets/images/instagram.jpg";
import Duzenle from "./Duzenle";
import ArkaPlan from "./ArkaPlan";
import RenkAyarlari from "./RenkAyarlari";
import MetinEkle from "./MetinEkle";
import { toPng } from 'html-to-image';
import { Resizable } from 'react-resizable';






const PhotographMain = (props) => {
    const [yummphoto, setyummphoto] = useState(yummphotoo);
    const SETimagePhoto = (image) => {
        setyummphoto(image);
    }

    const ref = useRef()

    const GetFinalImage = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, backgroundColor: "#ffffff" })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'my-image-name.png'
                link.href = dataUrl
                link.click()
                console.log(dataUrl)
                console.log(link)
            })
            .catch((err) => {
                console.log(JSON.stringify(err));

            })
    }, [ref])

    const [divs, setDivs] = useState([]);
    const [SelectedTXT, setSelectedTXT] = useState();
    const [Stickers, setStickers] = useState([]);

    const AddTextdiv = () => {
        console.log(`draggable${divs.length + 1}`);
        const newDiv =
            <div key={divs.length} id={`draggable${divs.length + 1}`} onClick={() => document.getElementById(`draggable${divs.length + 1}`).focus()} onDragStart={() => DragMetinEkle(`draggable${divs.length + 1}`)} contentEditable={true}
                draggable={true} className={` z-50 select-text group outline-none active:border-solid  active:border-2 focus:border-solid resize hover:border-2 hover:border-dotted hover:border-btn-blue-0 absolute bg-transparent self-center text-black w-auto h-auto hover:box-border `}
                style={{ top: `${divs.length + 25}%`, left: `${divs.length + 50}%` }}
                suppressContentEditableWarning={true}>
                <div key={divs.length} id={`draggable${divs.length + 1}headerr`} className=" z-10 hover:resize cursor-move w-4 h-4 absolute -top-[7px] -left-[7px]  place-items-center bg-[#667085] hidden group-hover:flex  ">
                    <CursorMove />
                </div>

                <div onClick={() => setSelectedTXT(divs.length + 1)} id={`AddTextTXT${divs.length + 1}`} className=" mt-2 max-h-[260px] max-w-[214px] ">METİN EKLE</div>
                <div onClick={() => CloseAddText(divs.length + 1)} className="  -top-[7px] -right-[7px]  w-4 h-4 absolute rounded-[100%] place-items-center place-content-center cursor-pointer bg-[#667085] hidden group-hover:flex  ">
                    <CloseTxt />
                </div></div>
        setDivs(prevDivs => [...prevDivs, newDiv]);
    }


    const AddSticker = (img) => {
        console.log(`StickerDraggable${Stickers.length + 1}`);
        const newstickerdiv =
            <div key={Stickers.length} id={`StickerDraggable${Stickers.length + 1}`} draggable={true} style={{ top: `${Stickers.length + 25}%` }}
                onDragStart={() => console.log('asdasdas')} className=" z-50 group rounded hover:border-2 hover:border-dotted hover:border-btn-blue-0 absolute bg-transparent self-center w-auto h-auto " >
                <div id={`draggable${Stickers.length + 1}header`} className=" z-10 cursor-move w-4 h-4 absolute -top-[7px] -left-[7px] place-items-center bg-[#667085] hidden group-hover:flex ">
                    <CursorMove />
                </div>
                <div id={`StickerImg${Stickers.length + 1}`} style={{
                    background: 'url(' + img + ')', height: 'auto', width: 'auto', minHeight: '100px', minWidth: '100px', backgroundRepeat: 'no-repeat', justifyContent: 'center', alignItems: 'center',
                    backgroundSize: 'contain'
                }} > </div>
                {/* <img src={img} id={`StickerImg${Stickers.length + 1}`}  ></img> */}
                <div onClick={() => CloseSticker(Stickers.length + 1)} className=" z-10 -top-[7px] -right-[7px] w-4 h-4 absolute rounded-[100%]  hidden group-hover:flex place-items-center place-content-center cursor-pointer bg-[#667085] ">
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
        console.log('heyyyyyy');
        if (leng !== 0) {
            //Make the DIV element draggagle:
            dragElement(document.getElementById("draggable" + leng));

            function dragElement(elmnt) {
                var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
                if (document.getElementById(elmnt.id + "headerr")) {
                    /* if present, the header is where you move the DIV from:*/
                    document.getElementById(elmnt.id + "headerr").onmousedown = dragMouseDown;
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

    }

    const DragSticker = (leng) => {
        console.log(leng);
        //Make the DIV element draggagle:
        if (leng !== 0) {
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
    }

    const [filterclass, setfilterclass] = useState("");
    const Applyfilterclass = (item) => {
        setfilterclass(item);
    }
    const [classForBlurBackImage,setclassForBlurBackImage]=useState("imageOfBlurBack");
    const ApplyclassForBlurBackImage=(item)=>{
setclassForBlurBackImage(item);
    }



    useEffect(() => {

        DragMetinEkle(divs.length);
        DragSticker(Stickers.length);


    })



    const [OnCropSelect, setOnCropSelect] = useState(true);
    const [OnBackgroundSelect, setOnBackgroundSelect] = useState(false);
    const [OnColorsSelect, setOnColorsSelect] = useState(false);
    const [OnAddTXTselect, setOnAddTXTselect] = useState(false);

    return (
        <div className="place-items-center place-content-center justify-center align-middle  flex bg-gray-100 w-full h-screen  ">
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

                        {/* hidden IMAGE */}   
                       
                        <img id="photo_image_hidden" src={yummphoto} className={classForBlurBackImage}   />  
                   
                        {/* HIDDEN İMAGE */}

                        {Stickers.map(div => div)}
                        {divs.map(div => div)}
                        <div ref={ref} id="photo_maindiv" className=" z-10 w-[97%] max-w-[97%] h-importantHeight ml-5 mt-5 mr-[3px] relative overflow-hidden flex place-items-center place-content-center justify-center align-middle ">

                            <div className={` bg-myBackImage bg-cover h-[640px] w-[1280px] flex place-content-center overflow-hidden place-items-center`}
                                id="photo_div" >
                                <div id="vignetteContainer" className=" w-auto h-auto place-items-center flex ">
                                    <figure className={filterclass}  >

                                        <img src={yummphoto} className={` object-fill w-auto h-auto max-h-[636px] self-center flex`} id="photo_image" />

                                    </figure>
                                </div>
                            </div>


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
                            <Duzenle imageURI={yummphotoo} SETimagePhoto={SETimagePhoto} />
                            :
                            <></>
                        }
                        {OnBackgroundSelect ?
                            <ArkaPlan />
                            :
                            <></>
                        }
                        {OnColorsSelect ?
                            <RenkAyarlari Applyfilterclass={Applyfilterclass} ApplyclassForBlurBackImage={ApplyclassForBlurBackImage} imageURI={yummphotoo} />
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