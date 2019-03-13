import React, { Component } from 'react';
import style from './style';
import styled from 'styled-components';

class Option extends Component {
  renderText() {
    const { autoCompleteTerm, label, value } = this.props;
    let text = (label && value && label.toLowerCase()) || value.toLowerCase();
    let autoCompleteTermString = autoCompleteTerm !== undefined && autoCompleteTerm.toLowerCase();
    if (text.includes(`${autoCompleteTermString}`)) {
      let before = text.substring(0, text.indexOf(autoCompleteTermString));
      let beforeText = label.substring(0, before.length);
      let term = label.substring(before.length, before.length + autoCompleteTermString.length);
      let afterText = label.substring(before.length + autoCompleteTermString.length, label.length);
      return <TextUI>{`${beforeText}`}<HightLightText>{term}</HightLightText>{`${afterText}`}</TextUI>;
    }
    return <TextUI>{label || value}</TextUI>;
  }

  render() {
    const { onPress, isSelected, disabled} = this.props;

    return (
      <OptionUI
        role="option"
        onClick={onPress}
        isSelected={isSelected}
      >
        <TextContainer disabled={disabled}>
          {this.renderText()}
        </TextContainer>
      </OptionUI>
    );
  }
}
const TextContainer = styled.div`${style.textContainer}`;
const OptionUI = styled.li`${style.option}`;
const TextUI = styled.div`${style.text}`;
const HightLightText = styled.div`${style.hightLightText}`;

export default Option;
