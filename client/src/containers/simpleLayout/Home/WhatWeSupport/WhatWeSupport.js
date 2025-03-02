import React from 'react'
import './WhatWeSupport.css'
import { WhatWeSupportData } from './WhatWeSupport Data'
import Image from '../../../../components/Image/Image'

const WhatWeSupport = () => {
    return (
        <div className='what-we-support-main-color'>
            <section id="sl-home-what-we-support">
                <div className='flex gap-10 sl-home-what-we-support-flex' >
                    {
                        WhatWeSupportData.map((item, index) => {
                            return (
                                <div key={index} className='flex gap-20 what-we-support-flex'>
                                    <Image src={item.icon} />
                                    <div className='flex flex-column gap-10'>
                                        <div className='what-we-support-title'>{item.title}</div>
                                        <div className='what-we-support-description'>{item.description}</div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default WhatWeSupport