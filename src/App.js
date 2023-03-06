import React,{ useState} from "react";
import PhotographMain from "./photograph/PhotographMain.jsx";
import WindowFixer from './plugins/WindowFixer.jsx';


const App=()=> {
  const [OpenModal, setOpenModal] = useState(true);
  const ToggleModal = (value) => {
    setOpenModal(value);
     }
  return (
    <div className="flex w-full h-screen overflow-hidden content-center items-center ">
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
