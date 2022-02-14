import React from 'react';
import { Card } from 'antd';
import TableContainer from './styled';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { LinkButton } from 'components/Button/styled';
import { gridStyle, statusStyle, appTypeStyle, paymentStyle } from '../gridStyle.js';
import { useNavigate } from 'react-router-dom';

const TableCard = ({ appStatus, paymentStatus }) => {
  const Navigate = useNavigate();

  const handleStatusDetails = () => {
    Navigate('statusdetails');
  };

  return (
    <TableContainer style={{ whiteSpace: 'nowrap' }}>
      <Card bordered={false} style={{ display: 'inline-block', width: '800px' }}>
        <Card.Grid hoverable={false} style={gridStyle}>
          <h6>App. ID</h6>
          <LinkButton onClick={handleStatusDetails}>
            <h5 className="app_id">#P-000441425</h5>
          </LinkButton>
        </Card.Grid>
        <Card.Grid hoverable={false} style={appTypeStyle}>
          <h6>App. Type</h6>
          <h5>Business</h5>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <h6>Date Created</h6>
          <h5>11th Jan, 2021</h5>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <h6>Fund Requested</h6>
          <h5>NGN 300,000</h5>
        </Card.Grid>
        <Card.Grid hoverable={false} style={paymentStyle}>
          <h6>Payment</h6>
          <span className={paymentStatus === 'pending' ? 'pending' : 'successful'}>{paymentStatus}</span>
        </Card.Grid>
        <Card.Grid hoverable={false} style={statusStyle}>
          <div className="status_col">
            <h6 style={{ textAlign: 'left' }}>Status</h6>
            <span
              className={
                appStatus === 'incomplete'
                  ? 'incomplete'
                  : appStatus === 'approved'
                  ? 'successful'
                  : appStatus === 'rejected'
                  ? 'rejected'
                  : 'review'
              }
            >
              {appStatus}
            </span>
          </div>
          <LinkButton onClick={handleStatusDetails}>
            <BsThreeDotsVertical size="26" />
          </LinkButton>{' '}
        </Card.Grid>
      </Card>
    </TableContainer>
  );
};

export default TableCard;
