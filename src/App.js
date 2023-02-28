import React,{ useState} from "react";
import PhotographMain from "./photograph/PhotographMain.jsx";
import WindowFixer from './plugins/WindowFixer.jsx';


const App=()=> {
  const [OpenModal, setOpenModal] = useState(true);
  const ToggleModal = (value) => {
    setOpenModal(value);
     }
  return (
    <div className="flex w-[1920px] min-w-[1920px] max-w-[1920px] h-[100%] min-h-[1080px] content-center items-center  bg-[red]">
    <WindowFixer />
    {OpenModal ?
      <PhotographMain onClose={() => ToggleModal(false)} />
      :
      <button className=" h-9" onClick={() => ToggleModal(true)}>
      Open Modal
    </button>

    }
</div>
  )
}

export default App;
