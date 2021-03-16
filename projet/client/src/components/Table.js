import React from 'react'

function Table(props) {
    return (
      
            <tbody >
                 
                <tr>
                    <td><p>{props.title}</p></td>
                    <td><p>{props.author}</p></td>
                    <td><p>{props.language}</p></td>
                    <td><p>{props.country}</p></td>
                    <td><p>{props.pages}</p></td>
                </tr>
               
            </tbody>
            
        
    )
}

export default Table
