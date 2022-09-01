import React from 'react'
import "./main.css";

export default function ListItem(props) {
    return (
        <div className='divItem'>
            <div className='itemBtn'>
                <button className='delBtn' onClick={() => props.deleteItem(props.index)}>X</button>
            </div>
            <div className='item'>
                {props.data}
            </div>
        </div>
    )
}
