import React, { Component } from 'react';
import axios from 'axios';

const styles = {
    divFormSectionStyle: "w-full bg-gray-100 mx-auto max-w-6xl py-24 px-12 lg:px-24 shadow-xl mb-24",
    divFormStyle: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col",
    divRowStyle: "-mx-3 md:flex mb-6",
    divLabelInputStyle: "md:w-1/4 px-3",
    labelStyle: "uppercase tracking-wide text-black text-xs font-bold mb-2",
    inputStyle: "w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-2.5 px-4 mb-3",
    selectStyle: "w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 mb-3 rounded leading-tight hover:bg-white focus:outline-none focus:bg-white focus:border-gray-500",
    sectionButton: "md:mx-48 sm:mx-10 md:flex mt-2",
    divButton: "md:w-full px-3",
    buttonStyle: "flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
}

export default class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: ''
        }
    }
    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const userObject = {
            firstName: this.state.name,
            lastName: this.state.email
        };
        axios.post('http://localhost:2222/employee/add', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ name: '', email: '' })
    }

    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className={styles.divLabelInputStyle}>
                        <label className={styles.labelStyle}>Add User Name</label>
                        <input type="text" className={styles.inputStyle} value={this.state.name} onChange={this.onChangeUserName}  />
                    </div>
                    <div className={styles.divLabelInputStyle}>
                        <label className={styles.labelStyle}>Add User Email</label>
                        <input type="text" className={styles.inputStyle} value={this.state.email} onChange={this.onChangeUserEmail} />
                    </div>
                    <div className={styles.buttonStyle}>
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}