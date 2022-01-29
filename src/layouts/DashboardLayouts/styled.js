import { Layout as _Layout } from 'antd';
import styled from 'styled-components';

const MainLayout = styled(_Layout)`
  background: #e5e5e5;
  background: #e5e5e5;
  height: 100%;

  .ant-menu-inline.ant-menu-root .ant-menu-item > .ant-menu-title-content,
  .ant-menu-inline.ant-menu-root .ant-menu-submenu-title > .ant-menu-title-content {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.0416667px;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #ffb400;
    background: #ffb400;

    span {
      a {
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        color: #f5f7f8;
      }
    }
  }
  .ant-menu-light .ant-menu-item:hover,
  .ant-menu-light .ant-menu-item-active,
  .ant-menu-light .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  .ant-menu-light .ant-menu-submenu-active,
  .ant-menu-light .ant-menu-submenu-title:hover {
    a {
      font-size: 18px;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      line-height: 27px;
      color: #455a64;
    }
  }

  .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-vertical-left .ant-menu-item::after,
  .ant-menu-vertical-right .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    position: absolute;
    display: none;
  }

  .ant-page-header {
    padding: 5px 0;
    margin: 0;
  }

  .ant-page-header-heading-title {
    margin: 0;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 27px;
    line-height: 32px;
    color: #004221;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export default MainLayout;
