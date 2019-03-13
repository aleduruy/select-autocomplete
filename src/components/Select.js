import React, { Component, Children } from 'react';
import styled from 'styled-components';
import style from './style';
import Option from './Option';
import { autoComplete } from './autocomplete';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: null,
      selectedLabel: props.placeholderText,
      autoCompleteValue: props.placeholderText,
      showDropdown: false,
      content: [],
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleCustomChange = this.handleCustomChange.bind(this);
    this.handleOnPress = this.handleOnPress.bind(this);
    this.renderDropdown = this.renderDropdown.bind(this);
    this.openCustomSelect = this.openCustomSelect.bind(this);
    this.renderAutoComplete = this.renderAutoComplete.bind(this);
    this.canToggleonDesktop = this.canToggleonDesktop.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  handleCustomChange(params) {
    const { onSelect } = this.props;

    this.setState({
      selectedValue: params.value,
      selectedLabel: params.label,
    });

    if (onSelect) {
      onSelect(params.value, params.index, params.label);
    }
  }

  handleOnPress(e, item) {
    this.setState({
      showDropdown: !this.state.showDropdown,
      selectedValue: item.props.value,
      autoCompleteValue: item.props.label,
    });
    this.handleCustomChange({
      element: <Option image={item.props.image} type="itemSelected" value={item.props.value} />,
      value: item.props.value,
      label: item.props.label,
      image: item.props.image,
    });
  }

  toggleDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  openCustomSelect(e) {
    this.renderContent();
    !this.state.isDisabled &&
      this.setState({ autoCompleteValue: this.state.showDropdown ? this.state.selectedLabel : '' });
    !this.state.isDisabled && this.toggleDropdown();
  }

  renderContent(autocomplete, e) {
    const { children } = this.props;
    let contentArray = autocomplete < 1 || autocomplete === undefined ? children : autocomplete;
    if (e !== '' && autocomplete < 1) {
      return this.setState({
        content: (
          <AutoCompleteNotFound onClick={this.toggleDropdown}>
            <AutoCompleteNotFoundText>No results found</AutoCompleteNotFoundText>
          </AutoCompleteNotFound>
        ),
      });
    }
    let content = (
      <DropdownList role="listbox">
        {contentArray.map((item, index) => {
          return (
            <Option
              value={item.props.value}
              label={item.props.label}
              isSelected={item.props.isSelected}
              highlighted={item.props.value === this.state.selectedValue}
              key={`key-${item.props.value}`}
              autoCompleteTerm={e}
              onPress={e => {
                this.handleOnPress(e, item);
              }}
            >
              {item.props.value}
            </Option>
          );
        })}
      </DropdownList>
    );
    return this.setState({ content: content });
  }

  renderDropdown() {

    return (
      <Dropdown variant={this.props.variant} modeSelect={this.props.mode} isOpen={this.state.showDropdown}>
        {this.state.content}
      </Dropdown>
    );
  }

  renderAutoComplete(event) {
    const { children } = this.props;
    let itemsLabels = [];

    itemsLabels = Children.map(children, (item, index) => {
      return item.props.label;
    });

    let selectedItems = [];
    Children.map(children, (item, index) => {
      autoComplete(event, itemsLabels).map(label => {
        if (label === item.props.label) {
          return selectedItems.push(item);
        }
      });
    });
    this.setState({ autoCompleteValue: event });

    if (!this.state.isMobile && event !== '') {
      this.setState({ showDropdown: true });
    }
    return this.renderContent(selectedItems, event);
  }

  setSelected() {
    Children.map(this.props.children, (item, index) => {
      if (item.props.isSelected) {
        this.setState({
          selectedValue: item.props.value,
          selectedLabel: item.props.label,
          selectedImage: item.props.image,
          autoCompleteValue: item.props.label,
        });
      }
    });
  }

  componentDidMount() {
    this.setSelected();
    this.renderContent();

    this.setState({ isMobile: window.innerWidth > 480 ? false : true });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 480) {
        this.setState({ isMobile: false });
      } else {
        this.setState({ isMobile: true });
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      this.setState({
        autoCompleteValue: this.props.placeholderText,
      });
      this.setSelected();
    }
  }

  onBlur(e, onBlurCallback) {
    const { autocomplete } = this.props;
    if (!autocomplete && !this.state.isMobile) {
      this.canToggleonDesktop(e);
    }

    if (typeof onBlurCallback === 'function') {
      onBlurCallback(e);
    }
  }

  onAutocompleteBlur(e) {
    this.setState({ autoCompleteValue: this.state.selectedLabel });
    this.canToggleonDesktop(e);
  }

  canToggleonDesktop(e) {
    let target = e.target.getAttribute('data-name');
    if (
      (!e.target.relatedTarget && e.relatedTarget == null) ||
      (e.relatedTarget != null && (target === 'select' || e.relatedTarget.tagName === 'INPUT'))
    ) {
      return this.state.showDropdown && this.toggleDropdown();
    }
  }

  renderSelect() {
    const { autocomplete, autoCompletePlaceholder } = this.props;

    if (!this.state.isMobile && autocomplete) {
      return (
        <CustomTextFieldUI
          autoComplete="off"
          placeholder={autoCompletePlaceholder}
          onChange={e => this.renderAutoComplete(e.target.value)}
          value={this.state.autoCompleteValue}
          onBlur={e => this.onAutocompleteBlur(e)}
          readOnly={!this.state.showDropdown && this.state.isDisabled}
          disabled={this.state.isDisabled}
          onClick={e => {
            this.openCustomSelect(e);
          }}
        />
      );
    }
    return (
      <CustomSelectUI
        onClick={() => {
          this.openCustomSelect();
        }}
        isOpen={this.state.showDropdown}
      >
        <CustomSelectText>{this.state.selectedLabel}</CustomSelectText>
      </CustomSelectUI>
    );
  }

  render() {
    return (
      <ViewUI
        disabled={this.state.isDisabled}
        tabIndex="0"
        data-name="select"
        onBlur={e => this.onBlur(e, this.props.onBlur)}
      >
        {this.renderSelect()}
        <SvgWrapper isOpen={this.state.showDropdown}>
          <svg fill="#666" width={15} height={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 17 64 30"><polygon points="64 20.4 32.6 47 0 21 2.7 17.5 32.5 41.3 61.2 17 "/></svg>
        </SvgWrapper>
        {this.renderDropdown()}
      </ViewUI>
    );
  }
}

const Dropdown = styled.div`${style.dropdown}`;
const DropdownList = styled.ul`${style.dropdownList}`;
const CustomSelectUI = styled.div`${style.select}`;
const CustomTextFieldUI = styled.input`${style.select}`;
const SvgWrapper = styled.div`${style.icon}`;
const ViewUI = styled.div`${style.view}`;
const CustomSelectText = styled.div`${style.customSelectText}`;
const AutoCompleteNotFound = styled.div`${style.autoCompleteNotFound}`;
const AutoCompleteNotFoundText = styled.div`${style.autoCompleteNotFoundText}`;

Select.defaultProps = {
  children: [],
  autocomplete: true,
};

export default Select;
