import React, { Component } from 'react';
import zxcvbnLoader from './loaders/zxcvbn';
import './App.css';
import PasswordField from './Components/PasswordField';
import Tooltip from './Components/Tooltip';
import PasswordStrenghtMeter from './Components/PasswordStrenghtMeter';
import { ALLOWED_SPECIAL_CHARACTERS } from './constants';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            score: 0,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        zxcvbnLoader().then((deps) => {
            this.zxcvbn = deps.zxcvbn;
        });
    }

    handleChange(event) {
        const password = event.target.value;
        const { score } = this.zxcvbn(password);

        this.setState({
            password,
            score,
        });
    }

    isValidLenght() {
        return this.state.password.length >= 8;
    }

    includesSpecialChar() {
        return new RegExp(`[${ALLOWED_SPECIAL_CHARACTERS.join('')}]`).test(this.state.password);
    }

    render() {
        const { score } = this.state;
        return (
            <div className="app-container">
                <header>
                    <h2>React Password Strength Meter</h2>
                </header>
                <PasswordField handleChange={ this.handleChange }>
                    <Tooltip position="right">
                        <PasswordStrenghtMeter score={ score } />
                        <ul className='validation'>
                            <li className={ this.isValidLenght() ? 'fulfiled' : 'unfulfilled'  }>
                                Password should be more than 8 characters
                            </li>
                            <li className={ this.includesSpecialChar() ? 'fulfiled' : 'unfulfilled'  }>
                                Password should include at least one special characters [{ ALLOWED_SPECIAL_CHARACTERS.join(', ') }]
                            </li>
                        </ul>
                    </Tooltip>
                </PasswordField>
            </div>
        );
    }
}

export default App;
