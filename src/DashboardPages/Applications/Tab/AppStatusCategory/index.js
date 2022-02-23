import React from 'react';
import { Card } from 'antd';
import TableContainer from './styled';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { LinkButton } from 'components/Button/styled';
import { gridStyle, statusStyle, appTypeStyle, paymentStyle } from '../gridStyle.js';
import { formateDate } from 'utils/formatDate';
import { useNavigate } from 'react-router-dom';

const AppStatusTableCard = ({ data }) => {
  const Navigate = useNavigate();

  const handleStatusDetails = () => {
    Navigate('statusdetails');
  };

  return (
    <>
      {data ? (
        data.map((data) => (
          <TableContainer style={{ whiteSpace: 'nowrap' }} key={data.id}>
            <Card bordered={false} style={{ display: 'inline-block', width: '100%', minWidth: '879px' }}>
              <Card.Grid hoverable={false} style={gridStyle}>
                <h6>App. ID</h6>
                <LinkButton onClick={handleStatusDetails}>
                  <h5 className="app_id">{data.id_number}</h5>
                </LinkButton>
              </Card.Grid>
              <Card.Grid hoverable={false} style={appTypeStyle}>
                <h6>App. Type</h6>
                <h5>{data.application_reason}</h5>
              </Card.Grid>
              <Card.Grid hoverable={false} style={gridStyle}>
                <h6>Date Created</h6>
                <h5>{formateDate(data.created_at)}</h5>
              </Card.Grid>
              <Card.Grid hoverable={false} style={gridStyle}>
                <h6>Fund Requested</h6>
                <h5>
                  {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(data.amount_needed)}
                </h5>
              </Card.Grid>
              <Card.Grid hoverable={false} style={paymentStyle}>
                <h6>Payment</h6>
                <span className={data.payment_status === 'Pending' ? 'pending' : 'successful'}>
                  {data.payment_status}
                </span>
              </Card.Grid>
              <Card.Grid hoverable={false} style={statusStyle}>
                <div className="status_col">
                  <h6 style={{ textAlign: 'left' }}>Status</h6>
                  <span
                    className={
                      data.application_status === 'incomplete'
                        ? 'incomplete'
                        : data.application_status === 'Approved'
                        ? 'successful'
                        : data.application_status === 'Rejected'
                        ? 'rejected'
                        : 'review'
                    }
                  >
                    {data.application_status}
                  </span>
                </div>
                <LinkButton onClick={handleStatusDetails}>
                  <BsThreeDotsVertical size="26" />
                </LinkButton>
              </Card.Grid>
            </Card>
          </TableContainer>
        ))
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h5 style={{ fontSize: '2rem' }}>No data</h5>
        </div>
      )}
    </>
  );
};

export default AppStatusTableCard;
