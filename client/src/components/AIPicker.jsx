
import CustomButton from "./CustomButton";
import RiseLoader from "react-spinners/RiseLoader";
import state from "../store";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  
  return (
    <div className="aipicker-container">
      {generatingImg ? (
        <center className="py-14">
          <RiseLoader
            color={state.color}
            loading={generatingImg}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </center>
      ) : (
        <textarea
          placeholder="Ask AI..."
          rows={5}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="aipicker-textarea"
        />
      )}
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI"
            customStyles="py-2.5 text-sm"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="py-2.5 text-sm"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="py-2.5 text-sm"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
