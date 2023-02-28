import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const  useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

var WindowFixer = () => {
  const { width } = useWindowDimensions();

  const [zoomIsSet, setZoomIsSet] = useState(false)
  var zoom = 1;
  if (width > 991) {
      var r = 1;
      r = width / 1920;
      var x = ((width * 100) / 1920);
      zoom = (x / 100);
  }
  var html = null;
  useEffect(() => {
    if(!zoomIsSet)
    {
      html = document.getElementsByTagName('html');
      if(html[0] != undefined && html[0] != '' && html[0] != null && html[0].style.zoom != zoom) {
        html[0].style.width = '1920px !important';
        html[0].style.zoom = zoom;
        setZoomIsSet(true);
      }
    }
    return () => {
      if(!zoomIsSet)
      {
        html = document.getElementsByTagName('html');
        if(html[0] != undefined && html[0] != '' && html[0] != null && html[0].style.zoom != zoom) {
          html[0].style.width = '1920px !important';
          html[0].style.zoom = zoom;
          setZoomIsSet(true);
        }
      }
    };
  }, []);
  return (<div></div>);
}

export default WindowFixer;