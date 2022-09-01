import React, { useState } from "react";
import styles from "../styles/dragfiles.module.css";
import { FileUploader } from "../types/fileUploader";

const DragFile = (props: FileUploader) => {
  const [dragActive, setDragActive] = useState(false);

  const onAddItem = (newFiles: File[]) => {
    if (newFiles.length > 0) {
      props.onChange(newFiles[0]);
    }
  };

  const onChangeInputHandler = (e: any) => {
    e.preventDefault();
    const newFile = e.target.files;
    onAddItem(newFile);
  };

  const handleDrag = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    onAddItem(e.dataTransfer.files);
  };

  const submiitFormHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <form
      onDragEnter={handleDrag}
      className={styles.form_input}
      onSubmit={submiitFormHandler}
    >
      <input
        type="file"
        id="input-file-upload"
        accept="audio/*,video/*,image/*"
        multiple={false}
        hidden
        onChange={onChangeInputHandler}
      />
      <label
        htmlFor="input-file-upload"
        id="label-file-upload"
        className={`${styles.label_file__upload} ${
          dragActive ? styles.dragActive : ""
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className={styles.updateZone__style}>
          {!props.data ? (
            <span>drop your file or browse</span>
          ) : (
            props.data.name
          )}
        </div>
      </label>
    </form>
  );
};

export default DragFile;
