import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from './component/InputField'
import Button from './component/Button'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfTable: '',
      noOfChairs: '',
      headCount: '',
      available: '',
      error: {}
    }
  };

  handleSubmit = (dispatch, event) => {
    event.preventDefault();
    const { noOfTable, noOfChairs, headCount } = this.state;

    //Check for Errors
    if (noOfTable === '') {
        this.setState({
            errors: { noOfTable: 'noOfTable is required' }
        });
        return;
    }
    if (noOfChairs === '') {
        this.setState({
            errors: { noOfChairs: 'noOfChairs is required' }
        });
        return;
    }
    if (headCount === '') {
        this.setState({
            errors: { headCount: 'headCount is required' }
        });
        return;
    }

    // Clear State
    this.setState({
        noOfTable: '',
        noOfChairs: '',
        headCount: '',
        errors: {}
    });
  };

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value });

  calculateQueue() {

  }


  render() {
    const { noOfTable, noOfChairs, headCount, errors } = this.state;

    return (
      <>
      <form>
        <InputField 
          label="noOfTable"
          name="noOfTable"
          type="noOfTable"
          placeholder="Enter noOfTable"
          value={noOfTable}
          onChange={this.handleChange}
          error={errors.noOfTable}
        />
        <InputField 
          label="noOfChairs"
          name="noOfChairs"
          type="noOfChairs"
          placeholder="Enter noOfChairs"
          value={noOfChairs}
          onChange={this.handleChange}
          error={errors.noOfChairs}
        />
        <InputField 
          label="headCount"
          name="headCount"
          type="headCount"
          placeholder="Enter headCount"
          value={headCount}
          onChange={this.handleChange}
          error={errors.headCount}
        />
        <Button
          type="submit" 
          className="float-right btn button button-success text-white"  
          value="Submit"
          data-testid="next-button"
        />
      </form>
      </>
    );
  }
}


App.propTypes = {
  noOfTable: PropTypes.string.isRequired,
  noOfChairs: PropTypes.string.isRequired,
  headCount: PropTypes.string.isRequired,
  error: PropTypes.string
};


App.defaultProps = { 
  noOfTable: 1,
  noOfChairs: 4,
  headCount: 1
};

export default App;
