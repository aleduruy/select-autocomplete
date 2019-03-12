import React, { Component } from 'react';
import styled from 'styled-components';
import style from './style';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: null,
      selectedLabel: props.initialValue,
      autoCompleteValue: props.initialValue,
      showDropdown: false,
      isDisabled: true,
      content: [],
    };
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <Field type="text" placeholder="Select or type your city..." />
          <Icon width={15} height={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 17 64 30"><polygon points="64 20.4 32.6 47 0 21 2.7 17.5 32.5 41.3 61.2 17 "/></Icon>
        </Wrapper>
      </Container>
    );
  }
}

const Container = styled.div`${style.container}`;
const Field = styled.input`${style.field}`;
const Wrapper = styled.div`${style.wrapper}`;
const Icon = styled.svg`${style.icon}`;

Select.defaultProps = {
  children: [],
};

export default Select;
