import React, { useState } from "react";

function FileUploadPage() {
  // const [isFilePicked, setIsFilePicked] = useState(false);
  const handleSubmission = () => {};
  // const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  
  const changeHandler = (event) => {
    // setSelectedFile(event.target.files[0]);
    // setIsFilePicked(true);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageUrl(reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  
  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      {imageUrl && <img src={imageUrl} alt="Selected file" />}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
  }
  
  export default FileUploadPage;

// export default function FileUploadPage() {
//   const [selectedFile, setSelectedFile] = useState();
  // const [isFilePicked, setIsFilePicked] = useState(false);

//   const changeHandler = event => {
//     setSelectedFile(event.target.files[0]);
//     setIsFilePicked(true);
//   };

  // const handleSubmission = () => {};
//   return (
//     <div>
//       <input type="file" name="file" onChange={changeHandler} />
//       {isFilePicked ? (
//         <div>
//           <p>Filename: {selectedFile.name}</p>
//           <p>Filetype: {selectedFile.type}</p>
//           <p>Size in bytes: {selectedFile.size}</p>
//           <p>
//             lastModifiedDate:{" "}
//             {selectedFile.lastModifiedDate.toLocaleDateString()}
//           </p>
//         </div>
//       ) : (
//         <p>Select a file to show details</p>
//       )}
//       <div>
//         <button onClick={handleSubmission}>Submit</button>
//       </div>
//     </div>
//   );
