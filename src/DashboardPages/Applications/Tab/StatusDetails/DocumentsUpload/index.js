import { UploadButton } from 'components/FileUpload';
import React, { useEffect, useState } from 'react';

import DocumentsUploadContainer from './styled';

const style = {
  width: '80%',
  position: 'relative',
};

const DocumentsUpload = ({ data, doc }) => {
  const [setFileDetails] = useState([]);
  const [document, setDocument] = useState('');

  const uploadProps = {
    multiple: false,
    beforeUpload(file) {
      setFileDetails({ file: file, filename: file.name });
    },
  };

  useEffect(() => {
    if (data) {
      setDocument(data.documents);
    }
  }, [data]);


  console.log(document);

  return (
    <DocumentsUploadContainer>
      <div className="filecontents">
        {document
          ? document.map((file) => (
              <UploadButton
                key={file.id}
                label={file.document_type}
                name="name"
                style={style}
                className="className"
                uploadProps={uploadProps}
                component="div"
                filename={file.document}
                status={file.document_status}
              >
                Choose File
              </UploadButton>
            ))
          : null}
      </div>
    </DocumentsUploadContainer>
  );
};

export default DocumentsUpload;
