import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import LoginComponent from './LoginComponent';
import baseUrl from "../../AppConfig";
import urls from '../../constants/urls';

axios.defaults.withCredentials = true;

class LoginContainer extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            usernameValidation: "",
            passwordValidation: "",
            areCredentialsIncorrect: false,
            userRole: ""
        }
    }

    componentDidMount = () => {
        axios
            .get(`${baseUrl}/loggedRole`)
            .then((res) => {
                this.setState({ userRole: res.data })
            })
            .then(() => {
                this.checkLoggedIn();
            })
            .catch(err => console.log(err))
    }

    checkLoggedIn = () => {
        if (this.state.userRole === "ROLE_ADMIN") {
            this.props.history.push(urls.admin.userBase);
        } else if (this.state.userRole === "ROLE_EDUCATION_SPECIALIST") {
            this.props.history.push(urls.educationSpecialist.kindergartenBase);
        } else if (this.state.hasDetails && this.state.userRole === "ROLE_GUARDIAN") {
            this.props.history.push(urls.guardian.applicationBase);
        } else if (!this.state.hasDetails && this.state.userRole === "ROLE_GUARDIAN") {
            this.props.history.push(urls.guardian.primaryDataBase);
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });

        if (this.state.usernameValidation !== "" && name === "username") {
            this.setState({ usernameValidation: "" });
        }

        if (this.state.passwordValidation !== "" && name === "password") {
            this.setState({ passwordValidation: "" });
        }

        if (this.state.areCredentialsIncorrect) {
            this.setState({ areCredentialsIncorrect: false });
        }
    }

    resetState = () => {
        this.setState({ username: "" });
        this.setState({ password: "" });
        this.setState({ usernameValidation: "" });
        this.setState({ passwordValidation: "" });
        this.setState({ incorrectCredentials: false });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let usernameFromUser = e.target.username.value;
        let passwordFromUser = e.target.password.value;

        this.doValidation(usernameFromUser, passwordFromUser);

        if (usernameFromUser.trim().length !== 0 && passwordFromUser.trim().length !== 0) {
            let userData = new URLSearchParams();
            userData.append('username', this.state.username);
            userData.append('password', this.state.password);

            axios
                .post(`${baseUrl}/login`,
                    userData,
                    { headers: { 'Content-type': 'application/x-www-form-urlencoded' } })
                .then(() => {
                    axios
                        .get(`${baseUrl}/loggedRole`)
                        .then((res) => {
                            this.setState({ userRole: res.data })
                            if (res.data === "ROLE_GUARDIAN") {
                                axios
                                    .get(`${baseUrl}/loggedWithDetails`)
                                    .then((res) => {
                                        console.log(res.data);
                                        this.setState({ hasDetails: res.data })
                                    })
                                    .then(() => this.checkLoggedIn())
                                    .catch(err => console.log(err))
                            } else {
                                this.checkLoggedIn();
                            }
                        })
                        .catch(err => console.log(err))
                })
                .catch((e) => {
                    if (e.response.status && e.response.status === 401) {
                        this.setState({ areCredentialsIncorrect: true });
                    } else {
                        console.log(e);
                    }
                });

        }
    }

    doValidation = (username, password) => {
        if (username.trim().length === 0) {
            this.setState({ usernameValidation: "is-invalid" });
        }

        if (password.trim().length === 0) {
            this.setState({ passwordValidation: "is-invalid" });
        }
    }

    render() {
        return (
            <div id="loginPage" className="justify-content-center align-items-center">
                <h1 className="text-center text-info pt-4">Vaikų darželių informacinė sistema</h1>
                <LoginComponent
                    username={this.state.username}
                    password={this.state.password}
                    usernameValidation={this.state.usernameValidation}
                    passwordValidation={this.state.passwordValidation}
                    areCredentialsIncorrect={this.state.areCredentialsIncorrect}
                    onSubmit={this.handleSubmit}
                    onUsernameChange={this.handleChange}
                    onPasswordChange={this.handleChange}
                />
            </div>
        )
    }
}

export default withRouter(LoginContainer);