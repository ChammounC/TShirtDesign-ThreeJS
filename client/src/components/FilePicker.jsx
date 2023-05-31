import CustomButton from "./CustomButton";

const FilePicker = ({file,setFile,readFile}) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          <p className="">Upload File</p>
        </label>
        <p className="mt-2 text-black-500 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <CustomButton
            type="outline"
            title="Logo"
            handleClick={() => readFile("logo")}
            customStyles="py-2.5 text-sm"
          />
          <CustomButton
            type="filled"
            title="Full"
            handleClick={() => readFile("full")}
            customStyles="py-2.5 text-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default FilePicker;