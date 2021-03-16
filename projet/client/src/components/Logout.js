import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'



function Logout() {
    const [book,setbooks] = useState('')

    useEffect(() => {
        const Tokens={
            token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFubmEiLCJyb2xlIjoibWVtYmVyIiwiaWF0IjoxNjE0MDM2MjI0fQ.K-gVqjEd-ZJUTC-WHPr1m7mPDIfx7izKOiOpoOfeRaA'
        }
        console.log(Tokens);
        axios.post('http://localhost:2000/logout',Tokens)
        .then(res =>{
            console.log(res.data);
            setbooks(res.data)
           
        })
        .catch(err =>{
            console.log(err.response)
        
        })
    },[] )
     console.log(book);
    return (
        <div>

          dfghjklm
            
        </div>
    )
}

export default Logout
