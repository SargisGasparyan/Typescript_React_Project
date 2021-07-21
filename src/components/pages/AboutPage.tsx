import React from 'react'
import { useHistory } from 'react-router'
export const AboutPage:React.FC=()=>{
    const history = useHistory()
    return(
        <React.Fragment>
            <h1>page Info</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa corrupti perspiciatis porro ipsam veritatis error nobis earum qui ipsum.</p>
            <button className="btn" onClick={()=>history.push("/") }>obratno  k del</button>
        </React.Fragment>
        
    
    )
}