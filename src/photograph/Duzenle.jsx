import React, { useState } from "react";
import { ReactComponent as Block } from "../assets/icons/block.svg";
import { ReactComponent as Panorama } from "../assets/icons/panorama.svg";
import { ReactComponent as Back_Replace } from "../assets/icons/background_replace.svg";
import { ReactComponent as Panorama_2 } from "../assets/icons/panorama-2.svg";
import { ReactComponent as Panorama_3 } from "../assets/icons/panorama-3.svg";
import { ReactComponent as Pc } from '../assets/icons/computer.svg';
import { ReactComponent as Phone } from '../assets/icons/smartphone.svg';
import { ReactComponent as Back } from '../assets/icons/reply.svg';
import { ReactComponent as Forward } from '../assets/icons/forward.svg';

const Duzenle = (props) => {
    const [PhoneIconSelected, setPhoneIconSelected] = useState(false);
    const [PcSelected, setPcSelected] = useState(true);
    const [isCover, setIsCover] = useState(false)
    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0)
    const [isImageScaleChange, setIsImageScaleChange] = useState(false);

    const removeImageScale = () =>{
        var photo_image = document.getElementById('photo_image');
        var photo_div = document.getElementById('photo_div');
        if(isImageScaleChange)
        {
            photo_image.style.width = 'auto';
            photo_image.style.height = 'auto';
        }
    }

    const coverImage = () =>{
        var photo_image = document.getElementById('photo_image');
        var photo_div = document.getElementById('photo_div');
        if(!isImageScaleChange)
        {
            setImageWidth(photo_image.style.width);
            setImageHeight(photo_image.style.height);
        }

        photo_image.style.width = '100%';
        photo_image.style.height = '100%';
        // photo_div.style.height = '100%';
        setIsCover(true);
        setIsImageScaleChange(true);
    }

    const containImage = () =>{
        var photo_image = document.getElementById('photo_image');
        var photo_div = document.getElementById('photo_div');

        if(!isImageScaleChange)
        {
            setImageWidth(photo_image.style.width);
            setImageHeight(photo_image.style.height);
        }

        console.log(imageWidth+' '+imageHeight);
        photo_image.style.width = '100%';
        photo_image.style.height = 'auto';
        // photo_div.style.height = 'auto';
        setIsCover(true);
        setIsImageScaleChange(true);
    }

    const circleImage = () =>{
        var photo_image = document.getElementById('photo_image');
        var photo_div = document.getElementById('photo_div');

        photo_div.style.width = '400px';
        photo_div.style.height = '400px';
        photo_div.style.borderRadius = '100%';

        // photo_image.style.borderRadius = '100%';


    }

    return (
        <div className={` mt-4 flex flex-col`}>
            <div className={` w-[300px] relative flex flex-row h-11  self-center  place-items-center place-content-between mb-[28px]`}>
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
            <label className={` ml-5 text-popNormal12`} >Tuval Ölçüsü</label>
            <span className="inline-grid grid-cols-3 gap-3 mt-4 place-content-center place-items-center mx-5">
                <span className={`box-border border-8 border-[#F2F4F7] w-[72px] h-[72px] place-items-center flex place-content-center hover:cursor-pointer  rounded-[4px]`}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex">
                        <Block />
                    </div>
                </span>
                <span className={` border-8 border-[#F2F4F7] w-[72px] h-[72px] place-items-center flex place-content-center hover:cursor-pointer  rounded-[4px]`}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex">
                        <Panorama />
                    </div>
                </span>
                <span className={`hover:cursor-pointer box-border border-r-8 border-l-8 border-t-[16px] border-b-[16px] border-[#F2F4F7] w-[72px] h-[72px] place-items-center flex place-content-center  rounded-[4px]`}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex">
                        <Panorama />
                    </div>
                </span>
                <span className={`hover:cursor-pointer border-[#F2F4F7] box-border border-8 w-[72px] h-[72px] place-items-center flex place-content-center rounded-[4px]`}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex  rounded-[4px]">
                        <Panorama />
                    </div>
                </span>
                <span className={`hover:cursor-pointer border-[#F2F4F7] box-border border-r-8 border-l-8 border-t-[17px] border-b-[15px] w-[72px] h-[72px] place-items-center flex place-content-center  rounded-[4px]`}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex  rounded-[4px]">
                        <Panorama />
                    </div>
                </span>
                <span className={`hover:cursor-pointer border-[#F2F4F7] box-border border-r-[7px] border-l-[7px] border-t-8 border-b-8 w-[72px] h-[72px] place-items-center flex place-content-center  rounded-[4px]  bg-[#F2F4F7]`}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex  rounded-[20px] bg-[#fff]">
                        <Panorama />
                    </div>
                </span>
                <span className={`hover:cursor-pointer bg-[#F2F4F7] w-[72px] h-[72px] place-items-center flex place-content-center  rounded-[4px]`} >
                    <div className=" w-[56px] h-[40px] rounded-[100px] bg-white border-[#D0D5DD] border place-content-center place-items-center flex" >
                        <Panorama />
                    </div>
                </span>
                <span className={`hover:cursor-pointer bg-[#F2F4F7] w-[72px] h-[72px] place-items-center flex place-content-center  rounded-[4px]`} >
                    <div className=" w-[40px] h-[56px] rounded-[100px] bg-white border-[#D0D5DD] border place-content-center place-items-center flex" >
                        <Panorama />
                    </div>
                </span>
                <span className={`hover:cursor-pointer box-border border-8 border-[#F2F4F7] w-[72px] h-[72px] place-items-center flex place-content-center bg-[#F2F4F7]`}
                    onClick={()=>circleImage()}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex rounded-full bg-[#fff]">
                        <Panorama />
                    </div>
                </span>
            </span>


            <label className={` ml-5 text-popNormal12 mt-8`} >Arkaplan Kaldır</label>
            <span className="inline-grid grid-cols-3 gap-3 mt-4 place-content-center place-items-center mx-5 hover:cursor-pointer">
                <span className={`box-border border-8  border-[#F2F4F7] w-[72px] h-[72px] place-items-center flex place-content-center rounded-[4px] `}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex">
                        <Block />
                    </div>
                </span>
                <span className={` border-8 border-[#F2F4F7] w-[72px] h-[72px] place-items-center flex place-content-center hover:cursor-pointer rounded-[4px] `}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex">
                        <Back_Replace />
                    </div>
                </span>
            </span>


            <label className={` ml-5 text-popNormal12 mt-8`} >Sığdırma</label>
            <span className="inline-grid grid-cols-3 gap-3 mt-4 place-content-center place-items-center mx-5">
                <span className={`hover:cursor-pointer box-border border-l-[9px] border-r-[9px] border-t-[18.5px] border-b-[18.5px] border-[#F2F4F7] w-[72px] h-[72px] place-items-center flex place-content-center rounded-[4px] `}
                    onClick={()=>removeImageScale()}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex">
                        <Block />
                    </div>
                </span>
                <span 
                    className={`hover:cursor-pointer border-[9px] border-r-[9px] border-t-[18.5px] border-b-[18.5px] border-[#F2F4F7] w-[72px] h-[72px] place-items-center flex place-content-center rounded-[4px] `}
                    onClick={()=>coverImage()}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex">
                        <Panorama_2 />
                    </div>
                </span>
                <span className={`hover:cursor-pointer border-[9px] border-r-[9px] border-t-[18.5px] border-b-[18.5px] border-[#F2F4F7] w-[72px] h-[72px] place-items-center flex place-content-center rounded-[4px]`}
                    onClick={()=>containImage()}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex">
                        <Panorama_3 />
                    </div>
                </span>
            </span>
        </div>
    )
}

export default Duzenle;