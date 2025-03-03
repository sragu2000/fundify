import React from 'react'
import './HowTo.css'
import Heading from '../../../../components/Heading/Heading'
import Image from '../../../../components/Image/Image'
import HowToImage from "./howto.jpg"
const HowTo = () => {
    return (
        <section id="sl-home-howto">
            <div className='flex gap-30'>
                <div className='flex-item-1 howto-web-image-container'>
                    <Image src={HowToImage} className={"howto-image"}></Image>
                </div>
                <div className='flex-item-1 flex gap-10 flex-column howto-info-container'>
                    <Heading
                        heading='Transforming Good Intentions into Good Actions'
                    />
                    <div className='flex-item-1 howto-tab-image-container'>
                        <Image src={HowToImage} className={"howto-image"}></Image>
                    </div>
                    <p className='sl-howto-para'>
                        Lorem ipsum dolor sit amet consectetur. Amet id in tristique bibendum
                        justo netus augue id. Nunc tristique quis leo duis gravida volutpat
                        vitae quam quam. Ultrices urna nec massa commodo id sit diam amet et.
                        Libero dictum ut purus ut vel sit egestas. Ut ac mattis senectus ac
                        suspendisse vitae vel nulla eleifend. Est eros facilisi aenean nisl a.
                        Vitae et fusce purus consectetur
                    </p>
                    <div className='flex flex-column gap-20'>
                        <div className='flex gap-20 howto-step-flex'>
                            <div className='howto-step flex-1 flex gap-10 align-center'>
                                <span>1</span>
                                <span>Choose your cause</span>
                            </div>
                            <div className='howto-step flex-1 flex gap-10 align-center'>
                                <span>2</span>
                                <span>Register on our website</span>
                            </div>
                        </div>
                        <div className='flex gap-20 howto-step-flex'>
                            <div className='howto-step flex-1 flex gap-10 align-center'>
                                <span>3</span>
                                <span>Donate the amount you like</span>
                            </div>
                            <div className='howto-step flex-1 flex gap-10 align-center'>
                                <span>4</span>
                                <span>Stay tuned about cause</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowTo