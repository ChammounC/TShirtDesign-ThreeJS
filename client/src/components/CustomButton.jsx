import { useSnapshot } from "valtio"
import state from "../store"
import { getContrastingColor, getContrastingColorInHex } from "../config/helpers";

const CustomButton = ({type,title,customStyles,handleClick}) => {
    const snap=useSnapshot(state);
    const generateStyle=type=>{
        if(type==='filled'){
            return {
              borderWidth: "1px",
              borderColor: getContrastingColor(snap.color),
              backgroundColor: snap.color,
              color: getContrastingColor(snap.color),
            };
        }else if(type==='outline'){
          return {
            borderWidth: "1px",
            borderColor: snap.color,
            color: snap.color,
            backgroundColor: getContrastingColorInHex(snap.color)+'cc',// added for opacity
          };
        }
    }
  return (
    <button
      className={`px-2 py-1.2 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;