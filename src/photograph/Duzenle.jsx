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
import FormData from "form-data";
import axios from "axios";
import yummphoto from "../assets/images/IMG_9864.jpeg";

const Duzenle = (props) => {
    const [PhoneIconSelected, setPhoneIconSelected] = useState(false);
    const [PcSelected, setPcSelected] = useState(true);
    const [isContain, setIsContain] = useState(false)
    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0)
    const [isImageScaleChange, setIsImageScaleChange] = useState(false);
    const [ActiveCanvasNum, setActiveCanvasNum] = useState('0');
    const [ActiveScaleNum, setActiveScaleNum] = useState('0');
    const [ActiveBackRemove, setActiveBackRemove] = useState(false);
    //***********************
    const [border4pxDone, setborder4pxDone] = useState(false);
    const [TriangleDone, setTriangleDone] = useState(false);
    const [border16pxDone, setborder16pxDone] = useState(false);
    const [border700pxDone, setborder700pxDone] = useState(false);
    const [Triangle16pxDone, setTriangle16pxDone] = useState(false);
    const [border200pxDone, setborder200pxDone] = useState(false);
    const [Triangle500pxDone, setTriangle500pxDone] = useState(false);
    const [circlDone, setcirclDone] = useState(false);
    //******************** */ */


    const removeImageCanvas = () => {
        var photo_image = document.getElementById('photo_image');
        var photo_div = document.getElementById('photo_div');
        var photo_maindiv = document.getElementById('photo_maindiv');
        var vignetteContainer = document.getElementById('vignetteContainer');
        var photo_image_hidden = document.getElementById('photo_image_hidden');
        setcirclDone(false);
        setborder4pxDone(false);
        setTriangleDone(false);
        setborder16pxDone(false);
        setborder700pxDone(false);
        setTriangle16pxDone(false);
        setborder200pxDone(false);
        setTriangle500pxDone(false);

        vignetteContainer.style.justifyContent = 'center';
        vignetteContainer.style.alignItems = 'center';
        photo_image.style.width = 'auto';
        photo_image.style.height = 'auto';
        photo_maindiv.style.display = 'default';
        photo_maindiv.style.placeContent = 'center';
        photo_div.style.borderRadius = '0%';
        photo_div.style.width = '1280px';
        photo_image.style.alignSelf = 'center';
        photo_image.style.marginTop = '0%';
        photo_image_hidden.style.width = 'auto';
        photo_image_hidden.style.height = 'auto';
        photo_image_hidden.style.borderRadius = '0%';
        photo_image.style.scale= 'none';
        photo_image_hidden.style.scale='none';
        // vignetteContainer.style.justifyContent = 'center';
        // vignetteContainer.style.alignItems = 'center';
        // photo_image.style.width = '392px';
        // photo_image.style.height = '630px';
        // photo_maindiv.style.display = 'default';
        // photo_maindiv.style.placeContent = 'center';
        // photo_div.style.borderRadius = '0%';
        // photo_div.style.width = '100%';
        // photo_image.style.alignSelf = 'center';




    }

    const removeImageScale = () => {
        var photo_image = document.getElementById('photo_image');
        var photo_image_hidden = document.getElementById('photo_image_hidden');
        var photo_div = document.getElementById('photo_div');
        var vignetteContainer = document.getElementById('vignetteContainer');
        var photo_maindiv = document.getElementById('photo_maindiv');

        // photo_image.style.width = 'auto';
        // photo_image.style.height = 'auto';
        // photo_div.style.height = "640px";
        // photo_div.style.width = "1280px";
        // vignetteContainer.style.height = 'auto';
        // vignetteContainer.style.width = 'auto';
        // photo_image.style.alignSelf = 'center';
        // vignetteContainer.style.display = 'flex';
        // vignetteContainer.style.placeContent = 'center';
        // vignetteContainer.style.placeItems = 'center';
        // photo_maindiv.style.placeContent = 'center';
        // photo_maindiv.style.display = 'flex';
        // photo_image.style.marginTop = '0%';
        // photo_div.style.borderRadius = '0%';
        // photo_image.style.maxHeight= '636px';
        photo_image.style.height = 'auto';
        photo_image.style.width = 'auto';
        photo_image_hidden.style.height = 'auto';
        photo_image_hidden.style.width = 'auto';
        vignetteContainer.style.height = 'auto';
        vignetteContainer.style.width = 'auto';
        photo_image.style.maxHeight = '636px';
        photo_image_hidden.style.maxHeight = '636px';
        photo_image_hidden.style.scale = 'none';
        photo_image.style.scale = 'none';
        photo_image_hidden.style.objectFit = 'fill';
        // vignetteContainer.style.height='auto';
        // vignetteContainer.style.width='auto';
        // photo_div.style.height = "640px";
        // photo_div.style.width = "1280px";


    }

    const coverImage = () => {
        var photo_image = document.getElementById('photo_image');
        var photo_image_hidden = document.getElementById('photo_image_hidden');
        var vignetteContainer = document.getElementById('vignetteContainer');
        var photo_div = document.getElementById('photo_div');
        if (!isImageScaleChange) {
            setImageWidth(photo_image.style.width);
            setImageHeight(photo_image.style.height);
        }

    

        if (border4pxDone) {
            photo_image.style.width = '1280px';
            photo_image.style.height = 'auto';
            photo_image_hidden.style.width = '34%';
            photo_image_hidden.style.borderRadius = '4px';
            photo_image_hidden.style.height = '650px';
            photo_image_hidden.style.alignSelf = 'center';
            photo_image.style.maxHeight = '630px';
            vignetteContainer.style.width = '1280px';
            vignetteContainer.style.height = '640px';
            photo_image.style.marginTop = '0px';
        }else
        if(TriangleDone){
            photo_image.style.width = '1280px';
            photo_image.style.height = 'auto';
            photo_image_hidden.style.width = '52%';
            photo_image_hidden.style.borderRadius = '4px';
            photo_image_hidden.style.height = '650px';
            photo_image_hidden.style.alignSelf = 'center';
            photo_image.style.maxHeight = '630px';
            vignetteContainer.style.width = '1280px';
            vignetteContainer.style.height = '640px';
            photo_image.style.marginTop = '0px';
        }else
        if(border16pxDone){
            photo_image.style.width = '1280px';
            photo_image.style.height = 'auto';
            photo_image_hidden.style.width = '36%';
            photo_image_hidden.style.borderRadius = '16px';
            photo_image_hidden.style.height = '650px';
            photo_image_hidden.style.alignSelf = 'center';
            photo_image.style.maxHeight = '630px';
            vignetteContainer.style.width = '1280px';
            vignetteContainer.style.height = '640px';
            photo_image.style.marginTop = '0px';
        }else
        if(border700pxDone){
            photo_image.style.width = '1280px';
            photo_image.style.height = 'auto';
            photo_image.style.scale= ' 2 2 '
            photo_image_hidden.style.width = '21%';
            photo_image_hidden.style.borderRadius = '600px';
            photo_image_hidden.style.height = '650px';
            photo_image_hidden.style.alignSelf = 'center';
            photo_image.style.maxHeight = '630px';
            vignetteContainer.style.width = '1280px';
            vignetteContainer.style.height = '640px';
            photo_image.style.marginTop = '0px';
        }else
        if(circlDone){
            photo_image.style.width = '1280px';
            photo_image.style.height = 'auto';
            photo_image_hidden.style.width = '33%';
            photo_image_hidden.style.borderRadius = '100%';
            photo_image_hidden.style.height = '650px';
            photo_image_hidden.style.alignSelf = 'center';
            photo_image.style.maxHeight = '630px';
            vignetteContainer.style.width = '1280px';
            vignetteContainer.style.height = '640px';
            photo_image.style.marginTop = '0px';
        }else
        if(Triangle16pxDone){
            photo_image.style.width = '1280px';
            photo_image.style.height = 'auto';
            photo_image_hidden.style.width = '52%';
            photo_image_hidden.style.borderRadius = '16px';
            photo_image_hidden.style.height = '650px';
            photo_image_hidden.style.alignSelf = 'center';
            photo_image.style.maxHeight = '630px';
            vignetteContainer.style.width = '1280px';
            vignetteContainer.style.height = '640px';
            photo_image.style.marginTop = '0px';
        }else
        if(border200pxDone){
            photo_image.style.width = '1280px';
            photo_image.style.height = 'auto';
            photo_image_hidden.style.width = '37%';
            photo_image_hidden.style.borderRadius = '200px';
            photo_image_hidden.style.height = '650px';
            photo_image_hidden.style.alignSelf = 'center';
            photo_image.style.maxHeight = '630px';
            vignetteContainer.style.width = '1280px';
            vignetteContainer.style.height = '640px';
            photo_image.style.marginTop = '0px';
        }else
        if(Triangle500pxDone){
            photo_image.style.width = '1280px';
            photo_image.style.height = 'auto';
            photo_image_hidden.style.width = '52%';
            photo_image_hidden.style.borderRadius = '500px';
            photo_image_hidden.style.height = '650px';
            photo_image_hidden.style.alignSelf = 'center';
            photo_image.style.maxHeight = '630px';
            vignetteContainer.style.width = '1280px';
            vignetteContainer.style.height = '640px';
            photo_image.style.marginTop = '0px';
        }
        else{
            photo_image.style.width = '1280px';
            photo_image.style.height = 'auto';
            photo_image_hidden.style.width = '64%';
            photo_image_hidden.style.height = '650px';
            photo_image_hidden.style.alignSelf = 'center';
            photo_image.style.maxHeight = '630px';
            vignetteContainer.style.width = '1280px';
            vignetteContainer.style.height = '640px';
            photo_image.style.marginTop = '0px';
        }

        // setIsCover(true);
        setIsImageScaleChange(true);
    }

    const containImage = () => {
        var photo_image = document.getElementById('photo_image');
        var photo_image_hidden = document.getElementById('photo_image_hidden');
        var vignetteContainer = document.getElementById('vignetteContainer');
        var photo_div = document.getElementById('photo_div');
        var photo_maindiv = document.getElementById('photo_maindiv');

        if (!isImageScaleChange) {
            setImageWidth(photo_image.style.width);
            setImageHeight(photo_image.style.height);
        }

        console.log(imageWidth + ' ' + imageHeight);
      


        if (border4pxDone) {
            photo_image.style.height = 'auto';
            photo_image.style.width = '500000px';
            photo_image.style.maxHeight = '100%';
            photo_image_hidden.style.height = '100%';
            photo_image_hidden.style.width = '37%';
            photo_image_hidden.style.maxHeight = '39%';
            photo_image_hidden.style.alignSelf = 'center';
            photo_image_hidden.style.scale = '1 1 1';
            photo_image_hidden.style.objectFit = 'cover';
            photo_image_hidden.style.borderRadius='2%';
            vignetteContainer.style.display = 'flex';
            vignetteContainer.style.placeContent = 'center';
            vignetteContainer.style.placeItems = 'center';
            photo_maindiv.style.placeContent = 'center';
            photo_maindiv.style.display = 'flex';
            photo_image.style.marginTop = '0%';
        }else
        if(TriangleDone){
            photo_image.style.height = 'auto';
            photo_image.style.width = '500000px';
            photo_image.style.maxHeight = '100%';
            photo_image_hidden.style.height = '100%';
            photo_image_hidden.style.width = '52%';
            photo_image_hidden.style.maxHeight = '39%';
            photo_image_hidden.style.alignSelf = 'center';
            photo_image_hidden.style.scale = '1 1 1';
            photo_image_hidden.style.objectFit = 'cover';
            photo_image_hidden.style.borderRadius='1%';
            vignetteContainer.style.display = 'flex';
            vignetteContainer.style.placeContent = 'center';
            vignetteContainer.style.placeItems = 'center';
            photo_maindiv.style.placeContent = 'center';
            photo_maindiv.style.display = 'flex';
            photo_image.style.marginTop = '0%';
        }else
        if(border16pxDone){
            photo_image.style.height = 'auto';
            photo_image.style.width = '500000px';
            photo_image.style.maxHeight = '100%';
            photo_image_hidden.style.height = '100%';
            photo_image_hidden.style.width = '37%';
            photo_image_hidden.style.maxHeight = '39%';
            photo_image_hidden.style.alignSelf = 'center';
            photo_image_hidden.style.scale = '1 1 1';
            photo_image_hidden.style.objectFit = 'cover';
            photo_image_hidden.style.borderRadius='4%';
            vignetteContainer.style.display = 'flex';
            vignetteContainer.style.placeContent = 'center';
            vignetteContainer.style.placeItems = 'center';
            photo_maindiv.style.placeContent = 'center';
            photo_maindiv.style.display = 'flex';
            photo_image.style.marginTop = '0%';
        }else
        if(border700pxDone){
            photo_image.style.height = 'auto';
            photo_image.style.width = '500000px';
            photo_image.style.maxHeight = '100%';
            photo_image.style.scale=' 3 3 ';
            photo_image_hidden.style.height = '100%';
            photo_image_hidden.style.width = '21%';
            photo_image_hidden.style.maxHeight = '39%';
            photo_image_hidden.style.alignSelf = 'center';
            photo_image_hidden.style.scale = '1 1 1';
            photo_image_hidden.style.objectFit = 'cover';
            photo_image_hidden.style.borderRadius='600px';
            vignetteContainer.style.display = 'flex';
            vignetteContainer.style.placeContent = 'center';
            vignetteContainer.style.placeItems = 'center';
            photo_maindiv.style.placeContent = 'center';
            photo_maindiv.style.display = 'flex';
            photo_image.style.marginTop = '0%';
        }else
        if(circlDone){
            photo_image.style.height = 'auto';
            photo_image.style.width = '500000px';
            photo_image.style.maxHeight = '100%';
            photo_image_hidden.style.height = '100%';
            photo_image_hidden.style.width = '33%';
            photo_image_hidden.style.maxHeight = '39%';
            photo_image_hidden.style.alignSelf = 'center';
            photo_image_hidden.style.scale = '1 1 1';
            photo_image_hidden.style.objectFit = 'cover';
            photo_image_hidden.style.borderRadius='100%';
            vignetteContainer.style.display = 'flex';
            vignetteContainer.style.placeContent = 'center';
            vignetteContainer.style.placeItems = 'center';
            photo_maindiv.style.placeContent = 'center';
            photo_maindiv.style.display = 'flex';
            photo_image.style.marginTop = '0%';
        }else
        if(Triangle16pxDone){
            photo_image.style.height = 'auto';
            photo_image.style.width = '500000px';
            photo_image.style.maxHeight = '100%';
            photo_image_hidden.style.height = '100%';
            photo_image_hidden.style.width = '52%';
            photo_image_hidden.style.maxHeight = '39%';
            photo_image_hidden.style.alignSelf = 'center';
            photo_image_hidden.style.scale = '1 1 1';
            photo_image_hidden.style.objectFit = 'cover';
            photo_image_hidden.style.borderRadius='2%';
            vignetteContainer.style.display = 'flex';
            vignetteContainer.style.placeContent = 'center';
            vignetteContainer.style.placeItems = 'center';
            photo_maindiv.style.placeContent = 'center';
            photo_maindiv.style.display = 'flex';
            photo_image.style.marginTop = '0%';
        }else
        if(border200pxDone){
            photo_image.style.height = 'auto';
            photo_image.style.width = '500000px';
            photo_image.style.maxHeight = '100%';
            photo_image_hidden.style.height = '100%';
            photo_image_hidden.style.width = '37%';
            photo_image_hidden.style.maxHeight = '39%';
            photo_image_hidden.style.alignSelf = 'center';
            photo_image_hidden.style.scale = '1 1 1';
            photo_image_hidden.style.objectFit = 'cover';
            photo_image_hidden.style.borderRadius='30%';
            vignetteContainer.style.display = 'flex';
            vignetteContainer.style.placeContent = 'center';
            vignetteContainer.style.placeItems = 'center';
            photo_maindiv.style.placeContent = 'center';
            photo_maindiv.style.display = 'flex';
            photo_image.style.marginTop = '0%';
        }else
        if(Triangle500pxDone){
            photo_image.style.height = 'auto';
            photo_image.style.width = '500000px';
            photo_image.style.maxHeight = '100%';
            photo_image_hidden.style.height = '100%';
            photo_image_hidden.style.width = '52%';
            photo_image_hidden.style.maxHeight = '39%';
            photo_image_hidden.style.alignSelf = 'center';
            photo_image_hidden.style.scale = '1 1 1';
            photo_image_hidden.style.objectFit = 'cover';
            photo_image_hidden.style.borderRadius='500px';
            vignetteContainer.style.display = 'flex';
            vignetteContainer.style.placeContent = 'center';
            vignetteContainer.style.placeItems = 'center';
            photo_maindiv.style.placeContent = 'center';
            photo_maindiv.style.display = 'flex';
            photo_image.style.marginTop = '0%';
        }
        else{
            photo_image.style.height = 'auto';
            photo_image.style.width = '500000px';
            photo_image.style.maxHeight = '100%';
            photo_image_hidden.style.height = '100%';
            photo_image_hidden.style.width = '64%';
            photo_image_hidden.style.maxHeight = '39%';
            photo_image_hidden.style.alignSelf = 'center';
            photo_image_hidden.style.scale = '1 1 1';
            photo_image_hidden.style.objectFit = 'cover';
            photo_image_hidden.style.borderRadius = '0%';
            vignetteContainer.style.display = 'flex';
            vignetteContainer.style.placeContent = 'center';
            vignetteContainer.style.placeItems = 'center';
            photo_maindiv.style.placeContent = 'center';
            photo_maindiv.style.display = 'flex';
            photo_image.style.marginTop = '0%';
        }
        setIsContain(true);
        setIsImageScaleChange(true);
    }

    const circleImage = () => {
        setcirclDone(true);
        setborder4pxDone(false);
        setTriangleDone(false);
        setborder16pxDone(false);
        setborder700pxDone(false);
        setTriangle16pxDone(false);
        setborder200pxDone(false);
        setTriangle500pxDone(false);
        var photo_image = document.getElementById('photo_image');
        var photo_div = document.getElementById('photo_div');
        var photo_maindiv = document.getElementById('photo_maindiv');
        var photo_image_hidden = document.getElementById('photo_image_hidden');
        var vignetteContainer = document.getElementById('vignetteContainer');

        photo_div.style.width = '630px';
        photo_div.style.height = '630px';
        photo_image.style.maxHeight = 'auto';
        photo_maindiv.style.display = 'flex';
        photo_maindiv.style.placeContent = 'center';
        photo_div.style.borderRadius = '100%';
        // photo_image.style.height = "auto";
        photo_image.style.marginTop = '0%';
        photo_image_hidden.style.borderRadius = '200px';
        photo_image_hidden.style.width = '20%';
        photo_image_hidden.style.height = '-webkit-fill-available';
        photo_image_hidden.style.alignSelf='center';
      
        if(photo_image_hidden.style.display === 'flex'){
            setActiveScaleNum('0');
        }



        // photo_image.style.borderRadius = '100%';


    }

    const border4px = () => {
        setcirclDone(false);
        setborder4pxDone(true);
        setTriangleDone(false);
        setborder16pxDone(false);
        setborder700pxDone(false);
        setTriangle16pxDone(false);
        setborder200pxDone(false);
        setTriangle500pxDone(false);
        var photo_image = document.getElementById('photo_image');
        var photo_div = document.getElementById('photo_div');
        var photo_maindiv = document.getElementById('photo_maindiv');
        var photo_image_hidden = document.getElementById('photo_image_hidden');
        var vignetteContainer = document.getElementById('vignetteContainer');

        photo_div.style.width = '700px';
        photo_div.style.height = '630px';
        photo_image.style.height = "auto";
        photo_maindiv.style.display = 'flex';
        photo_maindiv.style.placeContent = 'center';
        photo_div.style.borderRadius = '4px';
        photo_image.style.marginTop = '0%';
        photo_image_hidden.style.maxHeight = '628px';
        photo_image_hidden.style.marginTop = '1.6%';
        photo_image_hidden.style.borderRadius = '0%';
        photo_image_hidden.style.width = 'auto';
        photo_image_hidden.style.height = 'auto';
        photo_image_hidden.style.alignSelf='center';
        // photo_image.style.borderRadius = '100%';
        if(photo_image_hidden.style.display === 'flex'){
            setActiveScaleNum('0');
        }

    }



    const Triangle = () => {
        setcirclDone(false);
        setborder4pxDone(false);
        setTriangleDone(true);
        setborder16pxDone(false);
        setborder700pxDone(false);
        setTriangle16pxDone(false);
        setborder200pxDone(false);
        setTriangle500pxDone(false);
        var photo_image = document.getElementById('photo_image');
        var photo_div = document.getElementById('photo_div');
        var photo_maindiv = document.getElementById('photo_maindiv');
        var photo_image_hidden = document.getElementById('photo_image_hidden');

        photo_div.style.width = '1000px';
        photo_div.style.height = '630px';
        photo_image.style.height = "auto";
        photo_maindiv.style.display = 'flex';
        photo_maindiv.style.placeContent = 'center';
        photo_div.style.borderRadius = '4px';
        photo_image.style.marginTop = '0%';
        photo_image_hidden.style.maxHeight = '628px';
        photo_image_hidden.style.marginTop = '1.6%';
        photo_image_hidden.style.borderRadius = '0%';
        photo_image_hidden.style.width = 'auto';
        photo_image_hidden.style.height = 'auto';
        photo_image_hidden.style.alignSelf='center';
        // photo_image.style.borderRadius = '100%';
        if(photo_image_hidden.style.display === 'flex'){
            setActiveScaleNum('0');
        }

    }
    const border16px = () => {
        setcirclDone(false);
        setborder4pxDone(false);
        setTriangleDone(false);
        setborder16pxDone(true);
        setborder700pxDone(false);
        setTriangle16pxDone(false);
        setborder200pxDone(false);
        setTriangle500pxDone(false);
        var photo_image = document.getElementById('photo_image');
        var photo_div = document.getElementById('photo_div');
        var photo_maindiv = document.getElementById('photo_maindiv');
        var photo_image_hidden = document.getElementById('photo_image_hidden');

        photo_div.style.width = '700px';
        photo_div.style.height = '630px';
        photo_image.style.height = "auto";
        photo_maindiv.style.display = 'flex';
        photo_maindiv.style.placeContent = 'center';
        photo_div.style.borderRadius = '16px';
        photo_image.style.marginTop = '0%';
        photo_image_hidden.style.maxHeight = '628px';
        photo_image_hidden.style.marginTop = '1.6%';
        photo_image_hidden.style.borderRadius = '0%';
        photo_image_hidden.style.width = 'auto';
        photo_image_hidden.style.height = 'auto';
        photo_image_hidden.style.alignSelf='center';
        // photo_image.style.borderRadius = '100%';
        if(photo_image_hidden.style.display === 'flex'){
            setActiveScaleNum('0');
        }

    }

    const Triangle16px = () => {
        setcirclDone(false);
        setborder4pxDone(false);
        setTriangleDone(false);
        setborder16pxDone(false);
        setborder700pxDone(false);
        setTriangle16pxDone(true);
        setborder200pxDone(false);
        setTriangle500pxDone(false);
        var photo_image = document.getElementById('photo_image');
        var photo_div = document.getElementById('photo_div');
        var photo_maindiv = document.getElementById('photo_maindiv');
        var photo_image_hidden = document.getElementById('photo_image_hidden');

        photo_div.style.width = '1000px';
        photo_div.style.height = '630px';
        photo_image.style.height = "auto";
        photo_maindiv.style.display = 'flex';
        photo_maindiv.style.placeContent = 'center';
        photo_div.style.borderRadius = '16px';
        photo_image.style.marginTop = '0%';
        photo_image_hidden.style.maxHeight = '628px';
        photo_image_hidden.style.marginTop = '1.6%';
        photo_image_hidden.style.borderRadius = '0%';
        photo_image_hidden.style.width = 'auto';
        photo_image_hidden.style.height = 'auto';
        photo_image_hidden.style.alignSelf='center';
        // photo_image.style.borderRadius = '100%';
        if(photo_image_hidden.style.display === 'flex'){
            setActiveScaleNum('0');
        }

    }
    const border200px = () => {
        setcirclDone(false);
        setborder4pxDone(false);
        setTriangleDone(false);
        setborder16pxDone(false);
        setborder700pxDone(false);
        setTriangle16pxDone(false);
        setborder200pxDone(true);
        setTriangle500pxDone(false);
        var photo_image = document.getElementById('photo_image');
        var photo_div = document.getElementById('photo_div');
        var photo_maindiv = document.getElementById('photo_maindiv');
        var photo_image_hidden = document.getElementById('photo_image_hidden');
        var vignetteContainer = document.getElementById('vignetteContainer');

        photo_div.style.width = '700px';
        photo_div.style.height = '630px';
        photo_image.style.height = "auto";
        photo_maindiv.style.display = 'flex';
        photo_maindiv.style.placeContent = 'center';
        photo_div.style.borderRadius = '200px';
        photo_image.style.marginTop = '0%';
        photo_image_hidden.style.borderRadius = '170px'
        photo_image_hidden.style.width = 'auto';
        photo_image_hidden.style.height = 'auto';
        photo_image_hidden.style.alignSelf='center';
        // photo_image.style.borderRadius = '100%';
        if(photo_image_hidden.style.display === 'flex'){
            setActiveScaleNum('0');
        }

    }

    const Triangle500px = () => {
        setcirclDone(false);
        setborder4pxDone(false);
        setTriangleDone(false);
        setborder16pxDone(false);
        setborder700pxDone(false);
        setTriangle16pxDone(false);
        setborder200pxDone(false);
        setTriangle500pxDone(true);
        var photo_image = document.getElementById('photo_image');
        var photo_div = document.getElementById('photo_div');
        var photo_maindiv = document.getElementById('photo_maindiv');
        var photo_image_hidden = document.getElementById('photo_image_hidden');

        photo_div.style.width = '1000px';
        photo_div.style.height = '630px';
        photo_image.style.height = "auto";
        photo_maindiv.style.display = 'flex';
        photo_maindiv.style.placeContent = 'center';
        photo_div.style.borderRadius = '500px';
        photo_image.style.marginTop = '0%';
        photo_image_hidden.style.borderRadius = '180px'
        photo_image_hidden.style.width = 'auto';
        photo_image_hidden.style.height = 'auto';
        photo_image_hidden.style.alignSelf='center';
        
        // photo_image.style.borderRadius = '100%';
        if(photo_image_hidden.style.display === 'flex'){
            setActiveScaleNum('0');
        }

    }
    const border700px = () => {
        setcirclDone(false);
        setborder4pxDone(false);
        setTriangleDone(false);
        setborder16pxDone(false);
        setborder700pxDone(true);
        setTriangle16pxDone(false);
        setborder200pxDone(false);
        setTriangle500pxDone(false);
        var photo_image = document.getElementById('photo_image');
        var photo_div = document.getElementById('photo_div');
        var photo_maindiv = document.getElementById('photo_maindiv');
        var photo_image_hidden = document.getElementById('photo_image_hidden');
        var vignetteContainer = document.getElementById('vignetteContainer');
        // if (isContain) {
        //     removeImageScale();
        //     photo_image.style.width = '100%';
        //     photo_image.style.height = 'auto';
        //     vignetteContainer.style.width = '100%';
        //     vignetteContainer.style.height = 'auto';
        //     photo_image.style.marginTop = '-35%';
        //     photo_image.style.width = '2000px';
        //     photo_image.style.height = '1000px';

        //     //  photo_maindiv.style.display = 'flex';
        //     //  photo_maindiv.style.placeContent = 'center';

        //     photo_div.style.borderRadius = '600px';
        // }

        photo_div.style.width = '400px';
        photo_div.style.height = '630px';
        photo_image.style.maxHeight = "auto";
        photo_maindiv.style.display = 'flex';
        photo_maindiv.style.placeContent = 'center';
        photo_div.style.borderRadius = '600px';
        photo_image.style.marginTop = '0%';
        photo_image_hidden.style.borderRadius = '140px';
        photo_image_hidden.style.width = '15%';
        photo_image_hidden.style.height = '-webkit-fill-available';
        photo_image_hidden.style.alignSelf='center';
       
        if(photo_image_hidden.style.display === 'flex'){
            setActiveScaleNum('0');
        }
    }


    const getBase64StringFromDataURL = (dataURL) => dataURL.replace('data:', '').replace(/^.+,/, '');
    const RemoveImageBack = () => {
        const image = document.getElementById('photo_image');

        // Get the remote image as a Blob with the fetch API
        fetch(image.src)
            .then((res) => res.blob())
            .then((blob) => {
                // Read the Blob as DataURL using the FileReader API
                const reader = new FileReader();
                reader.onloadend = () => {

                    // Logs data:image/jpeg;base64,wL2dvYWwgbW9yZ...

                    // Convert to Base64 string
                    const base64 = getBase64StringFromDataURL(reader.result);

                    axios.post('https://w3yzdev.com/api/react/editor/removebg', {
                        'base64image': base64
                    }).then((res) => {
                        console.log(JSON.stringify(res.data));
                        props.SETimagePhoto(res.data.img);
                    }).catch((error) => console.log(error))
                    // Logs wL2dvYWwgbW9yZ...
                };
                reader.readAsDataURL(blob);
            });
    }

    const ResetImageBack = () => {
        // const image = document.getElementById('photo_image');
        props.SETimagePhoto(props.BasePhotoForEdit);

    }



    // const TransparentBackgroud=()=>{
    //     console.log("http://localhost:3000"+props.imageURI);
    //     var mydata = new FormData();
    //     mydata.append('file',
    //     {
    //         uri: "http://localhost:3000"+props.imageURI,
    //           name: "pexels-photo",
    //           type: "image/jpeg",

    //     });
    // fetch("http://5.75.182.66:5000/upload", {
    //     method: 'post',
    //     body: JSON.stringify(mydata)  ,
    //     mode: 'no-cors',


    // }).then(response => {
    //     console.log(JSON.stringify(response));


    // })
    //     .catch(error => {

    //     });


    // }
    return (
        <div className={` mt-4 flex flex-col overflow-x-hidden overflow-auto w-[100%] min-w-[100%] h-[100%]`}>
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
            <div className="inline-grid grid-cols-3 gap-3 mt-4 place-content-center place-items-center self-center bg-white w-[85%] h-[30%] ">
                <span onClick={() => { removeImageCanvas(); setActiveCanvasNum('0'); setActiveScaleNum('0') }} className={`w-[72px] h-[72px] box-border border-8  border-[#F2F4F7] place-items-center flex place-content-center hover:cursor-pointer rounded-[4px] ${ActiveCanvasNum === '0' ? ` ring-2 ` : `ring-0`} `}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex">
                        <Block />
                    </div>
                </span>
                <span onClick={() => { border4px(); setActiveCanvasNum('1') }} className={`w-[72px] h-[72px] border-8 border-[#F2F4F7]  place-items-center flex place-content-center hover:cursor-pointer  rounded-[4px]  ${ActiveCanvasNum === '1' ? ` ring-2 ` : `ring-0`}`}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex">
                        <Panorama />
                    </div>
                </span>
                <span onClick={() => { Triangle(); setActiveCanvasNum('2') }} className={`w-[72px] h-[72px] hover:cursor-pointer box-border border-r-8 border-l-8 border-t-[16px] border-b-[16px] border-[#F2F4F7]  place-items-center flex place-content-center  rounded-[4px] ${ActiveCanvasNum === '2' ? ` ring-2 ` : `ring-0`}`}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex">
                        <Panorama />
                    </div>
                </span>
                <span onClick={() => { border16px(); setActiveCanvasNum('3') }} className={`w-[72px] h-[72px] hover:cursor-pointer border-[#F2F4F7] box-border border-8  place-items-center flex place-content-center rounded-[4px] ${ActiveCanvasNum === '3' ? ` ring-2 ` : `ring-0`} `}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex  rounded-[4px]">
                        <Panorama />
                    </div>
                </span>
                <span onClick={() => { Triangle16px(); setActiveCanvasNum('4') }} className={`w-[72px] h-[72px] hover:cursor-pointer border-[#F2F4F7] box-border border-r-8 border-l-8 border-t-[17px] border-b-[15px] place-items-center flex place-content-center  rounded-[4px] ${ActiveCanvasNum === '4' ? ` ring-2 ` : `ring-0`}`}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex  rounded-[4px]">
                        <Panorama />
                    </div>
                </span>
                <span onClick={() => { border200px(); setActiveCanvasNum('5') }} className={`w-[72px] h-[72px] hover:cursor-pointer border-[#F2F4F7] box-border border-r-[7px] border-l-[7px] border-t-8 border-b-8  place-items-center flex place-content-center  rounded-[4px]  bg-[#F2F4F7] ${ActiveCanvasNum === '5' ? ` ring-2 ` : `ring-0`}`}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex  rounded-[20px] bg-[#fff]">
                        <Panorama />
                    </div>
                </span>
                <span onClick={() => { Triangle500px(); setActiveCanvasNum('6') }} className={`hover:cursor-pointer bg-[#F2F4F7] w-[72px] h-[72px]  place-items-center flex place-content-center  rounded-[4px] ${ActiveCanvasNum === '6' ? ` ring-2 ` : `ring-0`}`} >
                    <div className=" w-[56px] h-[40px] rounded-[100px] bg-white border-[#D0D5DD] border place-content-center place-items-center flex" >
                        <Panorama />
                    </div>
                </span>
                <span onClick={() => { border700px(); setActiveCanvasNum('7') }} className={`hover:cursor-pointer bg-[#F2F4F7] w-[72px] h-[72px]   place-items-center flex place-content-center  rounded-[4px] ${ActiveCanvasNum === '7' ? ` ring-2 ` : `ring-0`}`} >
                    <div className=" w-[40px] h-[56px] rounded-[100px] bg-white border-[#D0D5DD] border place-content-center place-items-center flex" >
                        <Panorama />
                    </div>
                </span>
                <span className={`hover:cursor-pointer box-border border-8 border-[#F2F4F7] w-[72px] h-[72px]  place-items-center flex place-content-center bg-[#F2F4F7] ${ActiveCanvasNum === '8' ? ` ring-2 ` : `ring-0`}`}
                    onClick={() => { circleImage(); setActiveCanvasNum('8') }}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex rounded-full bg-[#fff]">
                        <Panorama />
                    </div>
                </span>
            </div>


            <label className={` ml-5 text-popNormal12 mt-8`} >Arkaplan Kaldır</label>
            <span className={` inline-grid grid-cols-3 gap-3 mt-4 place-content-center place-items-center mx-5 hover:cursor-pointer `} >
                <span onClick={() => { ResetImageBack(); setActiveBackRemove(false) }} className={`box-border border-8  border-[#F2F4F7] w-[72px] h-[72px] place-items-center flex place-content-center rounded-[4px] ${ActiveBackRemove === false ? `ring-2` : `ring-0`} `}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex">
                        <Block />
                    </div>
                </span>
                <span onClick={() => { { RemoveImageBack(); setActiveBackRemove(true) } }} className={` border-8 border-[#F2F4F7] w-[72px] h-[72px] place-items-center flex place-content-center hover:cursor-pointer rounded-[4px]  ${ActiveBackRemove === true ? `ring-2` : `ring-0`} `}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex">
                        <Back_Replace />
                    </div>
                </span>
            </span>


            <label className={` ml-5 text-popNormal12 mt-8`} >Sığdırma</label>
            <span className="inline-grid grid-cols-3 gap-3 mt-4 place-content-center place-items-center mx-5">
                <span className={`hover:cursor-pointer box-border border-l-[9px] border-r-[9px] border-t-[18.5px] border-b-[18.5px] border-[#F2F4F7] w-[72px] h-[72px] place-items-center flex place-content-center rounded-[4px] ${ActiveScaleNum === '0' ? `ring-2` : `ring-0`} `}
                    onClick={() => { removeImageScale(); setActiveScaleNum('0') }}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex">
                        <Block />
                    </div>
                </span>
                <span
                    className={`hover:cursor-pointer border-[9px] border-r-[9px] border-t-[18.5px] border-b-[18.5px] border-[#F2F4F7] w-[72px] h-[72px] place-items-center flex place-content-center rounded-[4px] ${ActiveScaleNum === '1' ? `ring-2` : 'ring-0'} `}
                    onClick={() => { coverImage(); setActiveScaleNum('1') }}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex">
                        <Panorama_2 />
                    </div>
                </span>
                <span className={`hover:cursor-pointer border-[9px] border-r-[9px] border-t-[18.5px] border-b-[18.5px] border-[#F2F4F7] w-[72px] h-[72px] place-items-center flex place-content-center rounded-[4px] ${ActiveScaleNum === '2' ? `ring-2` : `ring-0`}`}
                    onClick={() => { containImage(); setActiveScaleNum('2') }}>
                    <div className=" border-[#D0D5DD] border w-full h-full place-content-center place-items-center flex">
                        <Panorama_3 />
                    </div>
                </span>
            </span>
        </div>
    )
}

export default Duzenle;