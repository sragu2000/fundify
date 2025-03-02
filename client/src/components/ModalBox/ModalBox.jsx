import React, { useEffect, useState } from 'react'
import "./ModalBox.css"
// import { IoIosClose } from "react-icons/io";
const ModalBox = ({ heading, footerButtons, body, visible, visibleFunction }) => {
    const [viewModal, setViewModal] = useState(false);

    useEffect(() => {
        if (visible === true) {
            setViewModal(true)
        } else {
            setViewModal(false)
        }
    }, [visible])

    return (
        <div className={viewModal ? "modalbox-main-container modalbox-main-container-active" : 'modalbox-main-container'}>
            <div className='modalbox-container'>
                <div className='modalbox-header'>
                    <div className='modalbox-heading'>{heading}</div>
                </div>
                <div className='modalbox-body'>
                    {body}
                </div>
                <div className='modalbox-footer'>
                    {Array.isArray(footerButtons) ?
                        footerButtons.map((button, index) => (
                            <button
                                key={index}
                                onClick={button.onClick}
                                className={
                                    button.type === "success" ? "modal-button-success" :
                                        button.type === "danger" ? "modal-button-danger" :
                                            button.type === "warning" ? "modal-button-warning" :
                                                "modal-button"
                                }
                            >
                                {button.text}
                            </button>
                        )) : null}
                </div>
            </div>
        </div>
    )
}

export default ModalBox