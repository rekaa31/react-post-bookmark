import React from 'react'

const Card = ({
    title,
    content,
    id,
    onClick
}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <button className="btn btn-primary" onClick={() => onClick()} >Add Bookmark</button>
            </div>
        </div>
    )
}

export default Card
