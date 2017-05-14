import React, { Component } from 'react';
import zxcvbn from 'zxcvbn';
import './App.css';
import PasswordField from './Components/PasswordField';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            score: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { password, score } = zxcvbn(event.target.value);

        this.setState({
            password,
            score,
        })
    }

    render() {
        return (
            <div className="app-container">
                <header>
                    <h2>React Password Strength Meter</h2>
                </header>
                <PasswordField handleChange={ this.handleChange }>
                    <p>Some text</p>
                </PasswordField>
            </div>
        );
    }
}

export default App;
