import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    console.log(acceptedFiles[0]);
    const formData = new FormData();
    formData.append("file", file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the images here ...</p>
      ) : (
        <p>Drag n drop images here, or click to select images</p>
      )}
    </div>
  );
}
export default MyDropzone;
