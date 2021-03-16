import React, { Component } from 'react'
import axios from 'axios'
import { Redirect} from 'react-router-dom'
const jwt = require('jsonwebtoken');

export class Login extends Component {
    
    state={}

    handleSubmit=(e)=>{
        e.preventDefault()
        const data={
           username:this.username,
            password:this.password
        }
        //console.log(data);
        axios.post('http://localhost:2000/login', data)
        .then(res =>{
            console.log(res.data.accessToken);
            console.log(res.data.refreshToken);
            const refreshToken=res.data.refreshToken
            const accessToken=res.data.accessToken
            if (refreshToken|| accessToken) {
              const decoderef= jwt.decode(refreshToken)
              const decodeac= jwt.decode(accessToken)
              //console.log(decoderef.username);
              //console.log(decodeac);  
               if (decoderef.role==='admin'|| decodeac.role==='admin') {
                  console.log('ok');
                    this.setState({
                        message: res.data,
                        loggedadmin:true
                    });
                }if (decoderef.role==='member' || decodeac.role==='admin') {
                      this.setState({
                        message: res.data,
                        loggedmember:true
                    });
                }
            }
        })
        .catch(err =>{
            console.log(err.response.data.error)
            this.setState({
                message: err.response.data.error
            });
           
        })
    } 

    render() {
        if (this.state.loggedadmin) {
            return <Redirect to='/admin'/>;
        }
        if (this.state.loggedmember) {
            return <Redirect to='/member'/>;
        }
                
        let error='';
        if(this.state.message){
            error=(
                <div className='alert alert-danger' role='alert'>
                   {this.state.message}
                </div>
            )
        }

        return (
            <div className='container'>
                <div className=' mr-auto col-lg-4 ml-auto card card-body mt-5'>
                    <form onSubmit={this.handleSubmit}>
                        {error}
                        <h3 className='text-center'>Login</h3>
                        <div className='form-group'>
                            <label>Username</label>
                            <input type='text' className='form-control' placeholder='Username' 
                            onChange={e =>this.username = e.target.value }/>
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <input type='password' className='form-control' placeholder='Password'
                            onChange={e =>this.password = e.target.value }/>
                        </div>
                        <button type='submit' className='btn btn-primary btn-block'>Login</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default Login