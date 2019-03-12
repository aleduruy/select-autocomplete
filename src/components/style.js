import { css } from 'styled-components';

export default {
  container: css`
    margin: 150px auto;
    text-align: center
  `,
  wrapper: css`
    display: inline-block;
    position: relative;
    cursor: pointer;
  `,
  field: css`
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 5px;
    font-size: 16px;
    color: #666;
    cursor: pointer;
    width: 320px;
    &:focus {
      outline: 0;
      border-color: #999;
    }
    &:hover {
      border-color: #999;
    }
  `,
  icon: css`
    fill: #666;
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -6px;
  `,
};
