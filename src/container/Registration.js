import React, { Component } from 'react'
import axios from 'axios'

export default class Registration extends Component {
  state={
    users:[]
  }
componentDidMount(){
  axios.get("https://backendapi-0ic8.onrender.com/users")
  .then((res)=>{
    console.log(res.data)
    this.setState({
      users:res.data
    })
  })
}
  render() {
    return (
      <div>
        {
          this.state.users.map((usr)=>(
            <div key={usr._id}>
              <p>name:{usr.username}</p>
              <p>password:{usr.password}</p>
            </div>
          ))
        }
      </div>
    )
  }
}





































// import React, { Component } from 'react'
// import axios from 'axios'

// export default function Registration() {
//   state={
//     users:[]
//   }
//   ComponentDidMount(){
//     axios.get("https://backendapi-0ic8.onrender.com/users")
//     .then((res)=>{
//       console.log(res.data)
//       this.setState({
//         users:res.data
//       })
//     })
//   }
//   return (
//     <div>
//       {
//         this.state.user.map((usr)=>(
//           <div key={usr._id}>
//             <p>name:{usr.username}</p>
//             <p>password:{usr.username}</p>


//         ))
//       }
        {/* <p><input name='username' placeholder='username'/></p>
        <p><input name='password' placeholder='password'/></p>
        <p><input name='confirm password' placeholder='confirm password'/></p>
        <p><input name='no' placeholder='contact no'/></p>
        <button>Register</button> */}
//     </div>
//   )
// }