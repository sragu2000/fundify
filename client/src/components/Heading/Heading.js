import React from 'react'
import './Heading.css'
const Heading = ({ heading, className }) => {
    return (
        <h3 className={"sl-heading " + className || ""}>{heading}</h3>
    )
}

export default Heading