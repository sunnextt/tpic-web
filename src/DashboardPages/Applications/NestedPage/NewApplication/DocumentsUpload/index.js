import React, { useEffect, useState } from 'react';
import FileUpload from 'components/FileUpload';
import { Button } from 'antd';
import { Button as ContinueButton } from 'components/Button';
import { LinkButton } from 'components/Button/styled';

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
    // transformFile(file) {
    //   return new Promise((resolve) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = () => {
    //       const canvas = document.createElement('canvas');
    //       const img = document.createElement('img');
    //       img.src = reader.result;
    //       img.onload = () => {
    //         const ctx = canvas.getContext('2d');
    //         ctx.drawImage(img, 0, 0);
    //         canvas.toBlob(resolve);
    //       };
    //     };
    //   });
    // },
    beforeUpload(file) {
      setFileDetails({ file: file, filename: file.name });
    },
  };

  return (
    <DocumentsUploadContainer>
      <div className="filecontents">
        <FileUpload
          description="Accepted file format: Pdf, doc. Total file size may not exceed 20 MB. "
          label="Business Plan"
          name="name"
          style={style}
          className="className"
          uploadProps={uploadProps}
          component="div"
          filename={fileDetails.filename}
        >
          Choose File
        </FileUpload>
        <FileUpload
          description="Accepted file format: Pdf, doc, jpeg. Total file size may not exceed 5 MB. "
          label="Means of Identifcation"
          name="name"
          style={style}
          className="className"
          uploadProps={uploadProps}
          component="div"
          filename={fileDetails.filename}
        >
          Choose File
        </FileUpload>
        <FileUpload
          description="Accepted file format: Pdf, doc, jpeg. Total file size may not exceed 5 MB. "
          label="Passport Photograph (Taken in the last two months)"
          name="name"
          style={style}
          className="className"
          uploadProps={uploadProps}
          component="div"
          filename={fileDetails.filename}
        >
          Choose File
        </FileUpload>
        <FileUpload
          description="Accepted file format: Pdf, doc, jpeg. Total file size may not exceed 5 MB. "
          label="Proof of Address (Recent utility bill)"
          name="name"
          style={style}
          className="className"
          uploadProps={uploadProps}
          component="div"
          filename={fileDetails.filename}
        >
          Choose File
        </FileUpload>
        <div className="pre_next_div">
          <Button>Previous</Button>
          <div className="flex_space_btw">
            <LinkButton>Save & finish later</LinkButton>
            <ContinueButton color="primary" padding="16px 36px">
              Continue
            </ContinueButton>
          </div>
        </div>
      </div>
    </DocumentsUploadContainer>
  );
};

export default DocumentsUpload;
