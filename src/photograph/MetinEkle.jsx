import React, { useState, useEffect } from "react";
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
import { HueSelector } from 'react-color-range';
import axios from "axios";



const MetinEkle = (props) => {

    const [etiketler,setetiketler]=useState([]);
    const GetStickersList =()=>{
        axios.get('https://w3yzdev.com/api/react/editor/sticker').then((res)=>{
            console.log(JSON.stringify(res.data[0]));
            setetiketler(res.data);

        }).catch((err)=> console.log(err))
    }


    const [Background, setBackground] = useState('#233CF5');
    const handleChangeComplete = (color) => {
        // this.setState({ background: color.hex });
        // console.log(color.hex);
        setBackground(color.hex);
        var AddTextTXT = document.getElementById("AddTextTXT"+props.SelectedTXT);
        AddTextTXT.style.color = color.hex;
        console.log(Background);
    };
    // const etiketler = [
    //     {
    //         id: 1,
    //         image: one,

    //     },
    //     {
    //         id: 2,
    //         image: two,
    //     },
    //     {
    //         id: 3,
    //         image: three
    //     },
    //     {
    //         id: 4,
    //         image: four
    //     },
    //     {
    //         id: 5,
    //         image: five
    //     },
    //     {
    //         id: 6,
    //         image: six
    //     },
    //     {
    //         id: 7,
    //         image: seven
    //     },
    //     {
    //         id: 8,
    //         image: eight
    //     },
    //     {
    //         id: 9,
    //         image: nine
    //     },
    //     {
    //         id: 10,
    //         image: ten
    //     },
    //     {
    //         id: 11,
    //         image: eleven
    //     },
    //     {
    //         id: 12,
    //         image: twelve
    //     }
    // ]
    const [DropdpwnFont, setDropdpwnFont] = useState(false);
    const [DropdpwnFontSize, setDropdpwnFontSize] = useState(false);
    const [SelectedFont, setSelectedFont] = useState('Poppins');
    const [SelectedFontSize, setSelectedFontSize] = useState('16');
    const [PhoneIconSelected, setPhoneIconSelected] = useState(false);
    const [PcSelected, setPcSelected] = useState(true);
    const [Hizalama, setHizalama] = useState('left');
    const [AddTXTbTN, setAddTXTbTN] = useState(false);
    const [FontStyle, setFontStyle] = useState();



    // const AddText = () => {
    //     setAddTXTbTN(true);
    //     var myArea = document.getElementById("photo_div");
    //     var draggablediv = document.createElement('div');
    //     draggablediv.setAttribute('id', 'draggable');
    //     draggablediv.setAttribute('draggable', true);
    //     draggablediv.onmouseenter = function (event) {
    //         event.stopPropagation()
    //         event.target.classList.add('textOver');
    //     }
    //     draggablediv.onmouseleave = function (event) {
    //         event.stopPropagation()
    //         event.target.classList.remove('textOver')
    //     }
    //     var isDragging = false;
    //     var initialX;
    //     var initialY;
    //     draggablediv.onclick = function (event) {
    //         event.stopPropagation()
    //         document.querySelectorAll('.w3yzmovingbtns').forEach((item) => {
    //             item.remove();
    //         })
    //         event.target.setAttribute('contenteditable', true);

    //         event.target.classList.add('textClick')
    //         //focus , to prevetnt from double clicking to invoke this function
    //         event.target.focus()
    //         var menuItems = document.createElement('div');
    //         menuItems.classList.add('w3yzmovingbtns');

    //         menuItems.innerHTML = `
    //          <svg 
    //              id="draggableheader"
    //              class="move" width="15px" height="15px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><polygon fill="var(--ci-primary-color, #000000)" points="130.412 323.98 78.529 272.098 240 272.098 240 433.568 188.118 381.687 165.49 404.313 256 494.823 346.51 404.313 323.882 381.687 272 433.568 272 272.098 432.667 272.098 380.784 323.98 403.412 346.607 493.921 256.098 403.412 165.588 380.784 188.215 432.667 240.098 272 240.098 272 79.432 323.882 131.313 346.51 108.687 256 18.177 165.49 108.687 188.118 131.313 240 79.432 240 240.098 78.529 240.098 130.412 188.215 107.784 165.588 17.274 256.098 107.785 346.608 130.412 323.98" class="ci-primary"></polygon></svg>
    //         <svg 
    //             class="remove" width="12px" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.99974 6.87818L1.77216 11.1057C1.65679 11.2211 1.51176 11.2802 1.33708 11.2828C1.16241 11.2855 1.01472 11.2265 0.893995 11.1057C0.773259 10.985 0.712891 10.8387 0.712891 10.6667C0.712891 10.4947 0.773259 10.3483 0.893995 10.2276L5.12156 5.99999L0.893995 1.77241C0.778606 1.65703 0.719578 1.512 0.716911 1.33732C0.714231 1.16266 0.773259 1.01496 0.893995 0.894239C1.01472 0.773503 1.16108 0.713135 1.33308 0.713135C1.50508 0.713135 1.65144 0.773503 1.77216 0.894239L5.99974 5.1218L10.2273 0.894239C10.3427 0.778851 10.4877 0.719823 10.6624 0.717156C10.8371 0.714476 10.9848 0.773503 11.1055 0.894239C11.2262 1.01496 11.2866 1.16132 11.2866 1.33332C11.2866 1.50532 11.2262 1.65168 11.1055 1.77241L6.87793 5.99999L11.1055 10.2276C11.2209 10.3429 11.2799 10.488 11.2826 10.6627C11.2853 10.8373 11.2262 10.985 11.1055 11.1057C10.9848 11.2265 10.8384 11.2868 10.6664 11.2868C10.4944 11.2868 10.3481 11.2265 10.2273 11.1057L5.99974 6.87818Z" fill="#D0D5DD"></path></svg>
    //         `
    //         event.target.appendChild(menuItems);
    //         menuItems.setAttribute('draggable', true);
    //         event.target.setAttribute('draggable', true);
    //         menuItems.addEventListener('mousedown', function (e) {
    //             isDragging = true;
    //             initialX = e.clientX - menuItems.offsetLeft;
    //             initialY = e.clientY - menuItems.offsetTop;
    //         });
    //         document.addEventListener('mousemove', function(e) {
    //             if (isDragging === true) {
    //                 var currentX = e.clientX - initialX;
    //                 var currentY = e.clientY - initialY;
    
    //                 var draggedElement = document.querySelector('.draggable');
    //                 draggedElement.style.left = currentX + 'px';
    //                 draggedElement.style.top = currentY + 'px';
    //             }
    //         });
    
    //         document.addEventListener('mouseup', function() {
    //             isDragging = false;
    //         });
    //     }

       

    //     draggablediv.onblur = function (event) {
    //         document.querySelectorAll('.w3yzmovingbtns').forEach((item) => {
    //             item.remove();
    //         })
    //         event.target.removeAttribute('contenteditable');
    //         event.target.classList.remove('textClick');

    //     }
    //     myArea.appendChild(draggablediv);
    //     draggablediv.classList.add('AddTextStyle');
    //     draggablediv.innerText = "Add Text";



    //     // var draggable = document.getElementById('draggable');
    //     // draggable.style.display= 'flex';
    // }


    const HandleFontFamily = (fontFamily) => {
        setDropdpwnFont(false);
        var AddTextTXT = document.getElementById("AddTextTXT"+props.SelectedTXT);
        AddTextTXT.style.fontFamily = fontFamily;
        setSelectedFont(fontFamily);
    }

    const HandleFontSize = (size) => {
        setSelectedFontSize(size);
        setDropdpwnFontSize(false);
        var AddTextTXT = document.getElementById("AddTextTXT"+props.SelectedTXT);
        AddTextTXT.style.fontSize = size + 'px';

    }

    const HandleFontStyle = (txtstyle) => {
        var AddTextTXT = document.getElementById("AddTextTXT"+props.SelectedTXT);
        AddTextTXT.style.fontWeight = txtstyle;
        AddTextTXT.style.fontStyle = txtstyle;
        AddTextTXT.style.textDecorationLine = txtstyle;
        setFontStyle(txtstyle);

    }

    const HandleTextAlign = (align) => {
        var AddTextTXT = document.getElementById("AddTextTXT"+props.SelectedTXT);
        AddTextTXT.style.textAlign = align;
        setHizalama(align);
    }

    // const AddSticker = (sticker) => {
    //     var StickerDraggable = document.getElementById("StickerDraggable");
    //     var StickerImg = document.getElementById("StickerImg");
    //     StickerDraggable.style.display = 'flex';
    //     StickerImg.src = sticker;
    // }

    
    useEffect(()=>{
        GetStickersList();
    },[])




    return (
        <section  className={`w-[300px] h-screen overflow-scroll mb-[50%]`}   >
            <div className={` relative flex flex-row h-11  self-center mt-[9.5px] place-items-center place-content-between mb-[16.5px]`}>
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

            <div onClick={() => {props.AddTextdiv();setAddTXTbTN(true);}} className=" w-[240px] h-[44px] border border-box-stroke-0 rounded self-center ml-6 mb-[11px] flex place-items-center place-content-center hover:cursor-pointer ">
                <label className=" text-text-color-0 text-popNormal12 hover:cursor-pointer">Metin  Ekle</label>
            </div>
            <label className={`text-text-color-0 text-popNormal12 ml-6 ${AddTXTbTN ? ` flex` : ` hidden`}`}>Yazı  Stili</label>
            <div className={` ${AddTXTbTN ? ` flex` : ` hidden`} place-items-center`}>
                {/* <label className="text-text-color-0 text-popNormal12">Yazı  Stili</label> */}
                <div className=" ml-6 mt-3">
                    <label className=" text-bar-offline-0 text-popNormal12">Yazı Fontu</label>
                    <button onClick={() => setDropdpwnFont(!DropdpwnFont)} className={` flex flex-row place-content-between place-items-center w-[240px] h-8 bg-[#F2F4F7] px-2 mt-1 hover:bg-gray-200 text-text-color-0 text-popNormal12`}>
                        {SelectedFont}
                        <Expand />
                    </button>

                    <div className={` ${DropdpwnFont ? 'flex' : 'hidden'} z-10 bg-[#F2F4F7] mt-[2px] divide-y divide-gray-100 rounded shadow w-[240px]`}  >
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" >
                            <li onClick={() => { HandleFontFamily('Poppins') }}>
                                <a className="block text-text-color-0 px-4 py-2 hover:bg-gray-200 hover:text-gray-400 w-56">Poppins</a>
                            </li>
                            <li onClick={() => { HandleFontFamily('Sans serif') }}>
                                <a className="block text-text-color-0 px-4 py-2 hover:bg-gray-200 hover:text-gray-400">Sans serif</a>
                            </li>
                            <li onClick={() => { HandleFontFamily('Font3') }}>
                                <a className="block text-text-color-0 px-4 py-2 hover:bg-gray-200 hover:text-gray-400">Font3</a>
                            </li>
                            <li onClick={() => { HandleFontFamily('Font4') }}>
                                <a className="block text-text-color-0 px-4 py-2 hover:bg-gray-200 hover:text-gray-400">Font4</a>
                            </li>
                        </ul>
                    </div>
                    <div className={` mt-4 bg-white w-[240px] h-8 flex flex-row place-content-between place-items-center`}>
                        <label className={` text-bar-offline-0 text-popNormal12`}>Font büyüklüğü</label>
                        <button onClick={() => setDropdpwnFontSize(!DropdpwnFontSize)} className={` flex flex-row place-content-between place-items-center w-[60px] h-8 bg-[#F2F4F7] hover:bg-gray-200 text-text-color-0 text-popNormal12 px-2`}>
                            {SelectedFontSize}
                            <Expand />
                        </button>
                    </div>
                    <div className={` ${DropdpwnFontSize ? 'flex' : 'hidden'} z-10 bg-[#F2F4F7] mt-[2px] divide-y divide-gray-100 rounded shadow w-[60px] ml-[180px]`}  >
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" >
                            <li onClick={() => { HandleFontSize('14') }}>
                                <a className="block text-text-color-0 px-4 py-2 hover:bg-gray-200 hover:text-gray-400 w-[60px]">14</a>
                            </li>
                            <li onClick={() => { HandleFontSize('16') }}>
                                <a className="block text-text-color-0 px-4 py-2 hover:bg-gray-200 hover:text-gray-400">16</a>
                            </li>
                            <li onClick={() => { HandleFontSize('18') }}>
                                <a className="block text-text-color-0 px-4 py-2 hover:bg-gray-200 hover:text-gray-400">18</a>
                            </li>
                            <li onClick={() => { HandleFontSize('22') }}>
                                <a className="block text-text-color-0 px-4 py-2 hover:bg-gray-200 hover:text-gray-400">22</a>
                            </li>
                            <li onClick={() => { HandleFontSize('24') }}>
                                <a className="block text-text-color-0 px-4 py-2 hover:bg-gray-200 hover:text-gray-400">24</a>
                            </li>
                        </ul>
                    </div>
                    <div className={` mt-4 bg-white w-[240px] h-8 flex flex-row place-content-between place-items-center mb-[20.5px]`}>
                        <label className={` text-bar-offline-0 text-popNormal12`}>stil</label>
                        <div className={` flex flex-row `}>
                            <Bold fill={FontStyle === 'bold' ? '#1D2939' : '#888888'} onClick={() => HandleFontStyle('bold')} className=" mr-[23.5px] hover:cursor-pointer" />
                            <Italic fill={FontStyle === 'italic' ? '#1D2939' : '#888888'} onClick={() => HandleFontStyle('italic')} className=" mr-[23.5px] hover:cursor-pointer" />
                            <Strick fill={FontStyle === 'line-through' ? '#1D2939' : '#888888'} onClick={() => HandleFontStyle('line-through')} className=" mr-[23.5px] hover:cursor-pointer" />
                            <Underline fill={FontStyle === 'underline' ? '#1D2939' : '#888888'} onClick={() => HandleFontStyle('underline')} className="hover:cursor-pointer" />
                        </div>
                    </div>
                    <div className={` bg-white w-[240px] h-8 flex flex-row place-content-between place-items-center mb-[18px]`}>
                        <label className={` text-bar-offline-0 text-popNormal12`}>Hizalama</label>
                        <div className={` flex flex-row place-content-between w-32 bg-bar-section-0 py-1 px-[5px] `}>
                            <div onClick={() => HandleTextAlign('left')} className={`${Hizalama === 'left' ? ` bg-white` : ` bg-transparent`} p-1 hover:cursor-pointer`} >
                                <Left fill={Hizalama === 'left' ? '#1D2939' : '#888888'} />
                            </div>
                            <div onClick={() => HandleTextAlign('center')} className={`${Hizalama === 'center' ? ` bg-white` : ` bg-transparent`} p-1 hover:cursor-pointer`}>
                                <Center fill={Hizalama === 'center' ? '#1D2939' : '#888888'} />
                            </div>
                            <div onClick={() => HandleTextAlign('right')} className={`${Hizalama === 'right' ? ` bg-white` : ` bg-transparent`} p-1 hover:cursor-pointer`}>
                                <Right fill={Hizalama === 'right' ? '#1D2939' : '#888888'} />
                            </div>
                            <div onClick={() => HandleTextAlign('justify')} className={`${Hizalama === 'justify' ? ` bg-white` : ` bg-transparent`} p-1 hover:cursor-pointer`}>
                                <Justify fill={Hizalama === 'justify' ? '#1D2939' : '#888888'} />
                            </div>
                        </div>
                    </div>

                    <div className="   mb-[39px] flex flex-col   ">
                        <label className=" text-bar-offline-0 text-popNormal12">Yazı rengi</label>
                        <div className=" flex flex-row place-items-end place-content-between mt-4">
                            <div className={`w-[45px] h-[45px] rounded mr-[17px] `} style={{ backgroundColor: Background }} />
                            <HueSelector
                                // width="30%"
                                value={Background}
                                // onChangeComplete={(color) => handleChangeComplete(color)}
                                onChange={(color) => handleChangeComplete(color)}
                            // onChange={(color)=>handleChangeComplete(color)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <label className={` text-popNormal12 text-text-color-0 ml-4`}>Etiket  Ekle</label>
            <div className="grid grid-cols-3 gap-[20px] bg-white mt-4 ml-4 overflow-hidden mb-[50%] ">
                {etiketler.map((item, index) => (
                    <div key={index}>
                        <img onClick={() => props.AddSticker(item)} src={item} className=" overflow-hidden hover:cursor-pointer" />
                    </div>
                ))}
            </div>

        </section>
    )
}

export default MetinEkle;