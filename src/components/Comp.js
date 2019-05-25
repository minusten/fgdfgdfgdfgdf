import React from 'react'
import c from './Comp.module.css'

const Comp = (props) => {
    return (
        <div>
            <span>{props.name} {props.age}</span>
            <div className = {`${c.content}   ${c.active}`}>hello</div>
             <div className = {c.content}>hello</div>
            <div className = {c.content}>hello</div>
        </div>
        
    )
}

export default Comp