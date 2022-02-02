import { UploadButton } from 'components/FileUpload';
import React, { useState } from 'react';

import DocumentsUploadContainer from './styled';

const style = {
  width: '80%',
  position: 'relative',
};

const DocumentsUpload = () => {
  const [fileDetails, setFileDetails] = useState([]);

  console.log(fileDetails.filename);

  const uploadProps = {
    // action: "/upload.do",
    multiple: false,
    onStart(file) {
      // console.log(file, file.name);
    },
    onSuccess(ret, file) {
      // console.log('onSuccess', ret, file.name);
    },
    onError(err) {
      // console.log('onError', err);
    },
    onProgress({ percent }, file) {
      // console.log('onProgress', `${percent}%`, file.name);
    },
    beforeUpload(file) {
      setFileDetails({ file: file, filename: file.name });
    },
  };

  return (
    <DocumentsUploadContainer>
      <div className="filecontents">
        <UploadButton
          label="Business Plan"
          name="name"
          style={style}
          className="className"
          uploadProps={uploadProps}
          component="div"
          filename={fileDetails.filename}
          status="rejected"
        >
          Choose File
        </UploadButton>
        <UploadButton
          label="Means of Identifcation"
          name="name"
          style={style}
          className="className"
          uploadProps={uploadProps}
          component="div"
          filename={fileDetails.filename}
          status="approved"
        >
          Choose File
        </UploadButton>
        <UploadButton
          label="Passport Photograph (Taken in the last two months)"
          name="name"
          style={style}
          className="className"
          uploadProps={uploadProps}
          component="div"
          filename={fileDetails.filename}
          status="approved"
        >
          Choose File
        </UploadButton>
        <UploadButton
          label="Proof of Address (Recent utility bill)"
          name="name"
          style={style}
          className="className"
          uploadProps={uploadProps}
          component="div"
          filename={fileDetails.filename}
          status="approved"
        >
          Choose File
        </UploadButton>
      </div>
    </DocumentsUploadContainer>
  );
};

export default DocumentsUpload;
