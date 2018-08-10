import React, { Component } from 'react';
import { Wizard } from 'patternfly-react';

class App extends Component {

  state = {
    showWizard: false,
    activeStep: 0,
    inputValid: false,
  }

  wizardSteps = [
    {
      title: 'Step1',
      render: () => <input type="text" onChange={(event) => this.validateInput(event.target.value)}></input>
    },
    {
      title: 'Step2',
      render: () => <p>Step2</p>
    },
    {
      title: 'Step3',
      render: () => <p>Step3</p>
    },
  ]

  validateInput = (newValue) => {
    this.setState({inputValid: newValue !== ''});
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({showWizard: true})}>Open Wizard</button>
        <Wizard.Pattern 
          activeStepIndex={this.state.activeStep} 
          show={this.state.showWizard} 
          steps={this.wizardSteps} 
          onExited={() => this.setState({showWizard: false})}
          onStepChanged={(index) => {this.setState({activeStep: index})}}
          nextStepDisabled={!this.state.inputValid}/>
      </div>
    );
  }
}

export default App;
