import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import api from '../../utils/api';

function FileUpload(props) {
  const [filePath, setFilePath] = useState('');

  const onDrop = async (files) => {
    let formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' }
    };
    formData.append('file', files[0]);
    //save the Image we chose inside the Node Server
    await api.post('/posts/filePath', formData, config).then((response) => {
      if (response.data.success) {
        setFilePath(response.data.filePath);
        props.refreshFunction(response.data.filePath);
      } else {
        alert('Failed to save the Image in Server');
      }
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: '300px',
              height: '240px',
              border: '1px solid lightgray',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />

            <div className="fas fa-plus" style={{ fontSize: '3rem' }}></div>
          </div>
        )}
      </Dropzone>

      <div
        style={{
          display: 'flex',
          width: '350px',
          height: '240px',
          overflowX: 'scroll'
        }}
      >
        <img
          style={{ minWidth: '300px', width: '300px', height: '240px' }}
          src={filePath}
          alt=""
        />
      </div>
    </div>
  );
}

export default FileUpload;
