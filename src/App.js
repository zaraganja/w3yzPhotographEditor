import React,{ useState} from "react";
import PhotographMain from "./photograph/PhotographMain.jsx";



const App=()=> {
  const [OpenModal, setOpenModal] = useState(true);
  const ToggleModal = (value) => {
    setOpenModal(value);
     }
  return (
    <div className=" flex place-items-center place-content-center ">
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
