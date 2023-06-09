import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
    state={
        email:"",
        password:""
    }
    handleChange=((e)=>{
       this.setState({
        [e.target.name]:e.target.value
       })
    })
    click=()=>{
        axios.post("https://backendapi-0ic8.onrender.com/store",{username:this.state.email,password:this.state.password})
        .then((res)=>{
                     console.log(res)
                })

    //     fetch("https://backend-bbcw.onrender.com/add",{
    //     method:"POST",
    //     headers:{
    //         "Content-Type":"application/Json"
    //     },
    //     body:JSON.stringify({
    //         username:this.state.email,
    //         password:this.state.password})
    //     })
    //     .then((res)=>{
    //          console.log(res)
    //     })

     }
  render() {
    return (
      <div>
        <p><input name='email' placeholder='Enter yor email'
        onChange={this.handleChange}/></p>
        <p><input name='password' placeholder='Enter your password'
        onChange={this.handleChange}/></p>
        <button onClick={this.click}>Submit</button>
      </div>
    )
  }}