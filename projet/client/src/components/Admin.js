import React,{useEffect,useState,Fragment} from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Table from './Table'
//const jwt = require('jsonwebtoken');

function Admin() {
    const [form, setForm] = useState({ author: '', country: '',language: '',year: '', title: '', pages: '' });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const [book,setbooks] = useState('')

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MTQwNDYxOTEsImV4cCI6MTYxNDA0NzM5MX0.1Ra_-GMPxpN7wqsMGyDsmnvJV9-QIeHY86xwm7aHDGA'
        axios.get('http://localhost:4000/books')
        .then(res =>{
            //console.log(res.data);
            setbooks(res.data)
           
        })
        .catch(err =>{
            console.log(err.response)
        
        })
    },[] )
    console.log(book);

    const handleSubmit=(e)=>{
        e.preventDefault()
        let errs = validate();
        setErrors(errs);
       console.log(form);
       axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MTQwNDYxOTEsImV4cCI6MTYxNDA0NzM5MX0.1Ra_-GMPxpN7wqsMGyDsmnvJV9-QIeHY86xwm7aHDGA'
        axios.post('http://localhost:4000/books',form)
        .then(res =>{
            console.log(res.data);
            setMessage(res.data)
           
        })
        .catch(err =>{
            console.log(err.response)  
        })
    } 
    const handleChange = (e) => {
        setForm({...form,[e.target.name]: e.target.value})
    }
    const validate = () => {
        let err = {};

        if (!form.author) {
            err.author = 'Title is required';
        }
        if (!form.country) {
            err.country = 'Description is required';
        }
        if (!form.year) {
            err.year = 'Description is required';
        }
        if (!form.title) {
            err.title = 'Title is required';
        }
        if (!form.pages) {
            err.pages = 'Description is required';
        }
        if (!form.language) {
            err.language = 'Description is required';
        }

        return err;
    }
    return (
        <div>
            <Navbar/>
                <div className='container mt-5'>
                    <div className='alert alert-success text-center' role='alert'>
                        {message}
                    </div>
                    <div className='row'>
                        <div className=" card card-body col-lg-6 mb-auto"  >
                            <div className="card-header">liste des livres</div>
                                <div className="card-body">
                                    <table className="table">
                                            <thead className="table-dark ">
                                                <tr>
                                                    <th scope="col">title</th>
                                                    <th scope="col">author</th>
                                                    <th scope="col">language</th>
                                                    <th scope="col">country</th>
                                                    <th scope="col">pages</th>
                                                </tr>
                                            </thead>
                                            {/*
                                                book.map((BOOks,index)=>{
                                                    return(
                                                            
                                                        <Fragment key={index}>
                                                            <Table title={BOOks.title} pages={BOOks.pages} language= {BOOks.language} country={BOOks.country} author={BOOks.author} />
                                                        </Fragment>
                                                    )
                                                })
                                             */
                                            }  
                                    </table>
                                </div>
                            </div>
                        <div className="card card-body col-lg-5 ml-5 mb-5"  >
                        <form onSubmit={handleSubmit}>
                            <h3 className='text-center'>add livres</h3>
                            <div className='row'>
                                <label for="exampleFormControlInput1" className="form-label">author</label>
                                <input type="text" name='author' onChange={handleChange} className="form-control"placeholder="author"/>
                                <p className='alert-danger  text-center'>{errors.author ? ('Please enter your username') : null}</p>
                            </div>
                            <div className='row'>
                                <label for="exampleFormControlInput1" className="form-label">title</label>
                                <input type="text" name='title' onChange={handleChange} className="form-control"placeholder="title"/>
                                <p className='alert-danger  text-center'>{errors.title ? ('Please enter your username') : null}</p>
                            </div>
                            <div className='row'>
                                <label for="exampleFormControlInput1" className="form-label">country</label>
                                <input type="text" name='country' onChange={handleChange} className="form-control"placeholder="country"/>
                                <p className='alert-danger  text-center'>{errors.country ? ('Please enter your username') : null}</p>
                            </div>
                            <div className='row'>
                                <label for="exampleFormControlInput1" className="form-label">language</label>
                                <input type="text" name='language' onChange={handleChange} className="form-control"placeholder="language"/>
                                <p className='alert-danger  text-center'>{errors.language? ('Please enter your username') : null}</p>
                            </div>
                            <div className='row'>
                                <label for="exampleFormControlInput1" className="form-label">year</label>
                                <input type="number" name='year' onChange={handleChange} className="form-control"placeholder="year"/>
                                <p className='alert-danger  text-center'>{errors.year? ('Please enter your username') : null}</p>
                            </div>
                            <div className='row'>
                                <label for="exampleFormControlInput1" className="form-label">pages</label>
                                <input type="number" name='pages' onChange={handleChange} className="form-control"placeholder="pages"/>
                                <p className='alert-danger  text-center'>{errors.pages ? ('Please enter your username') : null}</p>
                            </div>
                            <div className='mr-auto col-lg-2 ml-auto'>
                                <button className="btn btn-outline-success mt-3" type="submit">ajouter</button>
                            </div> 
                        </form>
                    </div>

                </div>

            </div>
          
        </div>
    )
}

export default Admin
