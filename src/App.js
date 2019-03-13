import React, { Component } from 'react';
import Option from './components/Option'
import Select from './components/Select'

class App extends Component {
  render() {

    return (
      <div className="container">
        <Select
        onSelect={() => console.log('select')}
        autoCompletePlaceholder= "Select or type the model..."
        placeholderText="Select your car model"
      >
        <Option value="option-1" label="Acura" />
        <Option value="option-2" label="agrale" />
        <Option value="option-4" label="Audi" />
        <Option value="option-5" label="Ashton" />
        <Option value="option-6" label="Bugre" />
        <Option value="option-7" label="BMW" />
        <Option value="option-8" label="Cadillac" />
        <Option value="option-9" label="Cherry" />
        <Option value="option-10" label="Chevrolet" />
        <Option value="option-11" label="Dodge" />
        <Option value="option-12" label="Engesa" />
        <Option value="option-13" label="Envemo" />
        <Option value="option-14" label="Ferrari" />
        <Option value="option-15" label="Ford" />
        <Option value="option-16" label="Fyber" />
        <Option value="option-17" label="Gurgel" />
        <Option value="option-18" label="Great Wall" />
        <Option value="option-31" label="GM - Chevrolet" />
        <Option value="option-19" label="Hafei" />
        <Option value="option-20" label="Honda" />
        <Option value="option-21" label="Hyundai" />
        <Option value="option-22" label="Isuzu" />
        <Option value="option-23" label="JAC" />
        <Option value="option-24" label="JPX" />
        <Option value="option-25" label="Jaguar" />
        <Option value="option-26" label="Lamborguini" />
        <Option value="option-27" label="Land Rover" />
        <Option value="option-28" label="Lexux" />
        <Option value="option-29" label="Lifan" />
        <Option value="option-30" label="Lobini" />
      </Select>
    </div>
    );
  }
}

export default App;
