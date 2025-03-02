import React from 'react'
import './Landing.css'
import Logo1 from "./logos/logo1.svg"
import Logo2 from "./logos/logo2.svg"
import Logo3 from "./logos/logo3.svg"
import Logo4 from "./logos/logo4.svg"
import Image from '../../../../components/Image/Image'
const Landing = () => {
    return (
        <div className='sl-home-landing-image-container'>
            <section className='sl-home-landing flex align-center h-100p'>
                <div className='flex flex-column flex-item-1 gap-30'>
                    <div className='flex flex-column landing-main-text'>
                        <div>Give Hope,</div>
                        <div>Save Lives</div>
                    </div>
                    <div className='landing-sub-text'>
                        Every act of kindness has the power to change a life,
                        uplift a community, and create a better world. Join us
                        in making a lasting impact - because together, we can turn
                        compassion into action and hope into reality.
                    </div>
                    <div className='flex gap-40 landing-summary-flex'>
                        <div className='flex gap-10 landing-summary align-center landing-single-summary-flex'>
                            <span>$ 1 284 528</span>
                            <span>Donation</span>
                        </div>
                        <div className='flex gap-10 landing-summary align-center landing-single-summary-flex'>
                            <span>12 460</span>
                            <span>People Helped</span>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-row align-center gap-20 landing-logo-section'>
                            <Image src={Logo1}></Image>
                            <Image src={Logo2}></Image>
                            <Image src={Logo3}></Image>
                            <Image src={Logo4}></Image>
                        </div>
                    </div>
                </div>
                <div className='flex-item-1 landing-flex-item-2'>
                    {/* <Image src={"https://img.freepik.com/free-photo/lifestyle-young-friends-outdoors_23-2148140902.jpg?t=st=1740912476~exp=1740916076~hmac=558e10e096cec17e39ac8ee99068012dc3e24adf2101cf0ea58278728b61e68d&w=1060"} className='landing-image'></Image> */}
                </div>
            </section>
        </div>
    )
}

export default Landing