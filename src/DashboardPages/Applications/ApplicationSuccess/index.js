import { Card } from 'antd';
import Button from 'components/Button';
import React from 'react';
import AppSuccessContainer from './styled';
import { useNavigate } from 'react-router-dom';

const AppSuccess = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('../dashboard', { replace: true });
    window.location.reload();
  };
  return (
    <AppSuccessContainer>
      <Card style={{ width: 712, background: '#00A953', paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="card_contents">
          <h4>Application Submitted</h4>
          <h6>
            Thank you for applying your application will be reviewed by our team. You can always check back anytime to
            see the status of your application.
          </h6>
          <Button padding="16px 36px" onClick={handleClick}>
            View Status
          </Button>
        </div>
      </Card>
    </AppSuccessContainer>
  );
};

export default AppSuccess;
