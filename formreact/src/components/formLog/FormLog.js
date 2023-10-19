import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

const FileUploadForm = () => {
    const [uploadedFile, setUploadedFile] = useState(null);
    console.log(uploadedFile)
    const onFileDrop = async (acceptedFiles) => {
        const file = acceptedFiles[0];
        setUploadedFile(file);
    };

    return (
        <div>
            <Dropzone onDrop={onFileDrop}>
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Перетащите файл сюда или нажмите, чтобы выбрать файл</p>
                    </div>
                )}
            </Dropzone>
            {uploadedFile && <p>Файл загружен: {uploadedFile.name}</p>}
        </div>
    );
};

export default FileUploadForm;
