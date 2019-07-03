import React from 'react'

const AppCard = props => {
    return (
        <div className="Card">
            <div
            style=
            {{ 
                backgroundColor: props.background, 
                width: "300px"
            }}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default AppCard

