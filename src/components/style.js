import { css } from 'styled-components';

export default {
  text: css`
    color: #333;
    display: flex;
  `,
  textContainer: css`
    display: flex;
    flex-grow: 1;
    padding: 20px 0 20px 10px;
    width: 95%;
    font-size: 16px;
    padding: 20px;
    border-bottom: 1px solid #f1f1f1;
  `,
  option: css`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    position: relative;
    &:hover{
      background: #f1f1f1;
      span {
        color: #999;
      }
  `,
  hightLightText: css`
    color: #2196F3;
    background: #f1f1f1;
  `,
  view: css`
  flex-grow: 1;
  margin-bottom: 20px;
  ${props => props.disabled && `opacity: 0.6;`}
    background-color: #fff;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    &:focus{
      outline: 0;
    }
`,
select: css`
  padding: 17px;
  border: 1px solid #bbb;
  position: relative;
  flex-direction: row;
  width: 100%;
  flex-basis: 100%;
  z-index: 1;
  align-items: center;
  justify-content: flex-start;
  flex: 1 1 auto;
  cursor: pointer;
  &:focus, &:hover {
    outline:0;
  }
  &::placeholder{
    color: #ccc;
  }
  color: #666;
  font-size: 16px;
  display: flex;
  background-color: transparent;
  box-sizing: border-box;
  line-height: normal;
  appearance: none;
`,
icon: css`
  margin-top: -5px;
  position: absolute;
  top: 50%;
  right: 10px;
  height: 12px;
  transition: all 0.2s ease;
  ${props => (props.isOpen ? `transform: rotate(-180deg);` : `transform: rotate(0);`)}
`,
initialSelectText: css`
  color: #666;
`,
selectText: css`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`,
dropdownContainer: css`
  flex: 1;
  justify-content: center;
  align-items: center;
`,
dropdown: css`
  background-color: #fff;
  margin: 10px 0;
  width: 100%;
  overflow: auto;
  flex: 1 1 auto;
  height: auto;
  max-height: 0;
  position: absolute;
  top: 100%;
  border: 1px solid #bbb;
  overflow-y: scroll;
  transition: all 0.2s ease;
  z-index: 2;
  margin-top: -1px;
  padding: 0;
  visibility: hidden;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  ${props => props.isOpen && `max-height: 250px; visibility: visible;`}
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ddd;
  }
`,
dropdownList: css`
  list-style: none;
  padding: 0;
  margin: 0;
  margin: -1px 0 0 ;
`,
optionList: css`
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  border-style: solid;
`,
customSelectText: css`
  max-width: 100%;
  overflow: hidden;
  color: #666;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  height: 18px;
  `,
customPlaceholderText: css`
  position: absolute;
  top: 8px;;
  left: 50px;
  font-size: 11px;
  color: #999;
`,
menuSelect: css`
  flex-direction: row;
  display: flex;
  align-items: center;
`,
menuText: css`
  padding-right: 20px;
  padding-right: 0;
`,
autoCompleteWrapper: css`
  margin: 15px 15px 0;
`,
autoCompleteNotFoundText: css`
  color: #666;
`,
autoCompleteNotFound: css`
  align-items: center;
  padding: 15px;
  margin: 0 15px;
  background: #eee;
  background: none;
  margin: 0;
`,
};
