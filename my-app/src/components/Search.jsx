import React from 'react'
import { data } from './Data'

const Search = () => {
    const [Search , setSearch] = React.useState("")
    console.log(Search)
  return (
    <div>
        <div className='text'><h1>Contact Keeper</h1></div>
        <div className='form'>
            <form>
                <input 
                type='text' 
                placeholder='search contact'
                value={Search} 
                onChange={(event)=>setSearch(event.target.value)}/>
            </form>
        </div>
        <div>
            <table>
                <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                </tbody>
                {
                    data.filter((item)=>{
                        return Search.toLocaleLowerCase() === "" ? item : item.first_name.toLocaleLowerCase().includes(Search)
                    }).map((item)=>{
                        return(  
                <tbody key={item.id}>    
                <tr >
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.Phone}</td>
                </tr>
                </tbody> 
                )
                    })
                 }
            </table>
            </div>
        </div>
  )
}

export default Search