import React from 'react'
import './Summary.css'
import Image1 from "./Logos/completed.svg"
import Image2 from "./Logos/donate.svg"
import Image3 from "./Logos/world.svg"
import Image4 from "./Logos/donations.svg"
import Image from '../../../../components/Image/Image'
const Summary = () => {
    const summaryData = [
        {
            icon: Image1,
            title: "Projects Completed",
            count: "1.2k+"
        },
        {
            icon: Image2,
            title: "Monthly Donate",
            count: "100"
        },
        {
            icon: Image3,
            title: "Partners Worldwide",
            count: "480"
        },
        {
            icon: Image4,
            title: "Donations Received",
            count: "1.4m"
        },
    ]
    return (
        <div className='what-we-support-main-color'>
            <section className='sl-home-summary'>
                <div className='flex justify-space-aorund w-100p gap-20 summary-home-card-main'>
                    {
                        summaryData.map((item, index) => {
                            return (
                                <div className='summary-home-card flex flex-column gap-20 align-center'>
                                    <Image src={item.icon} />
                                    <div className='count'>{item.count}</div>
                                    <div className='title'>{item.title}</div>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Summary