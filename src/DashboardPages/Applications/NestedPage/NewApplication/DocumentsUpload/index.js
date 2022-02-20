import React from 'react';
import FileUpload from 'components/FileUpload';
import { useMediaQuery } from 'usehooks-ts';

import DocumentsUploadContainer from './styled';

const DocumentsUpload = ({ handleNext, handleSave, handlePrevious, setFieldValue, value }) => {
  const matches = useMediaQuery('(max-width: 600px)');

  const style = {
    width: matches ? '100%' : '80%',
    position: 'relative',
  };

  const uploadProps = {
    multiple: false,
    beforeUpload(file) {},
  };

  const { business_plan, means_of_identification, proof_of_address, passport } = value;

  return (
    <DocumentsUploadContainer>
      <div className="filecontents">
        <FileUpload
          description="Accepted file format: Pdf, doc. Total file size may not exceed 20 MB. "
          label="Business Plan"
          name="business_plan"
          style={style}
          className="className"
          uploadProps={uploadProps}
          component="div"
          filename={business_plan.name}
          setFieldValue={setFieldValue}
        >
          Choose File
        </FileUpload>
        <FileUpload
          description="Accepted file format: Pdf, doc, jpeg. Total file size may not exceed 5 MB. "
          label="Means of Identifcation"
          name="means_of_identification"
          style={style}
          className="className"
          uploadProps={uploadProps}
          component="div"
          filename={means_of_identification.name}
          setFieldValue={setFieldValue}
        >
          Choose File
        </FileUpload>
        <FileUpload
          description="Accepted file format: Pdf, doc, jpeg. Total file size may not exceed 5 MB. "
          label="Passport Photograph (Taken in the last two months)"
          name="passport"
          style={style}
          className="className"
          uploadProps={uploadProps}
          component="div"
          filename={passport.name}
          setFieldValue={setFieldValue}
        >
          Choose File
        </FileUpload>
        <FileUpload
          description="Accepted file format: Pdf, doc, jpeg. Total file size may not exceed 5 MB. "
          label="Proof of Address (Recent utility bill)"
          name="proof_of_address"
          style={style}
          className="className"
          uploadProps={uploadProps}
          component="div"
          filename={proof_of_address.name}
          setFieldValue={setFieldValue}
        >
          Choose File
        </FileUpload>
        {/* <div className="pre_next_div">
          <Button onClick={handlePrevious}>Previous</Button>
          <div className="flex_space_btw">
            <LinkButton onClick={handleSave}>Save & finish later</LinkButton>
            <ContinueButton color="primary" padding="16px 36px" onClick={handleNext}>
              Continue
            </ContinueButton>
          </div>
        </div> */}
      </div>
    </DocumentsUploadContainer>
  );
};

export default DocumentsUpload;
