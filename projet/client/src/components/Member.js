import React,{useEffect,useState,Fragment} from 'react'
import Table from './Table'
import axios from 'axios'
import {Link}from 'react-router-dom'
import Navbar from './Navbar'

function Member() {
    const [book,setbooks] = useState('')

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFubmEiLCJyb2xlIjoibWVtYmVyIiwiaWF0IjoxNjE0MDQ1NDExLCJleHAiOjE2MTQwNDY2MTF9.GriHjZoXaSisuFXVIqF7sTHEMFkGJlM5cM3p__lCMYE'
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
    return (
        <div>
          
           <Navbar/>
            <div className="card text-dark bg-light mb-3 mt-5 container"  >
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
        </div>
    )
}

export default Member
