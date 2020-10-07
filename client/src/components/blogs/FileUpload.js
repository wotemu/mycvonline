import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import api from '../../utils/api';

const FileUpload = (props) => {
  const [filePath, setFilePath] = useState('');

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' }
    };
    formData.append('file', files[0]);
    //save the Image we chose inside the Node Server and cloudinary

    api.post('/blogs/image', formData, config).then((res) => {
      if (res.data.success) {
        setFilePath(res.data.filePath);
        props.refreshFunction(res.data.filePath);
      } else {
        alert('Failed to upload!');
      }
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: '70px',
              height: '50px',
              border: '1px solid lightgray',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <i className="fas fa-upload fa-2x" title="Upload file"></i>
          </div>
        )}
      </Dropzone>

      <div
        style={{
          display: 'flex',
          width: '200px',
          height: filePath.length > 0 ? '140px' : '70px'
        }}
      >
        <img src={filePath} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default FileUpload;
