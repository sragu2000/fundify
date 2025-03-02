import React from 'react'
import "./CausesCard.css"
import Image from '../Image/Image'
import ProgressBar from '../ProgressBar/ProgressBar'

const CausesCard = ({ image, title, description, id, goal, raised, donationCount }) => {
    return (
        <div className='causes-card flex flex-column gap-20'>
            <Image src={image} className={"causes-card-image"} />
            <div className='flex flex-column gap-10 causes-card-info'>
                <h6 className='causes-card-heading'>{title}</h6>
                <p className='causes-card-description'>{description}</p>
                <ProgressBar value={(raised / goal) * 100} />
                <div className='flex justify-space-between'>
                    <div className='flex flex-column gap-10'>
                        <div className='main-heading'>Goal: $ {goal}</div>
                        <div className='sub-heading'>Raised: $ {raised}</div>
                    </div>
                    <div className='flex flex-column gap-10 align-end'>
                        <div className='main-heading'>{donationCount}</div>
                        <div className='sub-heading'>Donations</div>
                    </div>
                </div>
                <button className='causes-card-view-details-button'>View Details</button>
            </div>
        </div>
    )
}

export default CausesCard