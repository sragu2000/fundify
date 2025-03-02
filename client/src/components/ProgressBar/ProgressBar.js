import React from 'react'
import './ProgressBar.css'
const ProgressBar = ({ value }) => {
    return (
        <progress value={value} max="100" style={{ width: "100%" }}></progress>
    )
}

export default ProgressBar