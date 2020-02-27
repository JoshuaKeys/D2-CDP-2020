import React, { ChangeEvent, FormEvent } from 'react';
import { Header } from '../../../shared/components/header/header.component';
import { AuthInput } from '../../components/auth-input/auth-Input';
import './login-page.scss'
import { LoginPropsModel } from '../../models/loginprops.model';
import { withRouter } from 'react-router';

class Login extends React.Component<LoginPropsModel> {
    
    state = {
        isDisabled: false,
        loginError: '',
        passwordError: '',
        loginValue: '',
        passwordValue: ''
    }

    hasInvalidChars = (value: string)=>{
        return new RegExp(/[^a-z0-9]/i).test(value);
    }
    componentDidMount() {
        if(this.props.isAuthenticated) {
            this.props.history.push('/home');
        }
    }
    validateLogin = (e: ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value === '') {
            this.setState({
                ...this.state,
                loginValue: '',
                loginError: 'enter'
            })
        }else if(this.hasInvalidChars(e.target.value)) {
            this.setState({
                ...this.state,
                loginValue: e.target.value,
                loginError: 'incorrect'
            })
        } else {
            this.setState({
                ...this.state,
                loginError: ''
            })
        }
    }
    onPasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            passwordValue: e.target.value
        })
    }
    onLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            loginValue: e.target.value
        })
    }
    onLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        var loginPayload = {
            login: this.state.loginValue,
            password: this.state.passwordValue,
        }
        this.props.login(loginPayload);
    }
    
    validatePassword = (e: ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value === '') {
            this.setState({
                ...this.state,
                passwordValue: e.target.value,
                passwordError: 'enter'
            })
        }else if(this.hasInvalidChars(e.target.value)) {
            this.setState({
                ...this.state,
                passwordValue: e.target.value,
                passwordError: 'incorrect'
            })
        } else {
            this.setState({
                ...this.state,
                passwordError: ''
            })
        }
    };
    render() {
        const isDisabled = this.state.passwordError === '' && this.state.loginError === '';
        return (
            <article className="login-page">
                <Header></Header>
                <form className="login-page__form" onSubmit={this.onLogin}>
                    <div className="login-page__input">
                        <AuthInput 
                            type="text" 
                            label="Login"
                            value={this.state.loginValue}
                            name="login"
                            onInput={this.onLoginInput}
                            onBlur={this.validateLogin}
                            fieldError={this.state.loginError}
                        />
                    </div>
                    <div className="login-page__input">
                        <AuthInput
                            type="password"
                            label="Password"
                            value={this.state.passwordValue}
                            name="password"
                            onInput={this.onPasswordInput}
                            onBlur={this.validatePassword}
                            fieldError={this.state.passwordError}
                        />
                    </div>
                    <button disabled={!isDisabled} className="login-page__form-submit-btn">Login</button>
                </form>
            </article>
        );
    }

}

export default withRouter(Login)