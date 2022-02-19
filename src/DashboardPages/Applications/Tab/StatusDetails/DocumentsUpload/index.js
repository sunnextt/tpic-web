import { UploadButton } from 'components/FileUpload';
import React, { useState } from 'react';

import DocumentsUploadContainer from './styled';

const style = {
  width: '80%',
  position: 'relative',
};

const DocumentsUpload = ({data}) => {
  const [fileDetails, setFileDetails] = useState([]);

  const uploadProps = {
    multiple: false,
    // onStart(file) {
    //   setFileDetails({ file: file, filename: file.name });
    // },
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
          filename={data.business_plan}
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
          filename={data.means_of_identification}
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
          filename={data.passport}
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
          filename={data.proof_of_address}
          status="approved"
        >
          Choose File
        </UploadButton>
      </div>
    </DocumentsUploadContainer>
  );
};

export default DocumentsUpload;
