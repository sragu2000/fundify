import React from 'react'
import "./Footer.css"
import { Assets } from '../../../assets/Assets'
import Image from '../../../components/Image/Image'
const Footer = () => {
    return (
        <div className='sl-footer'>
            <section>
                <div className='flex justify-space-between gap-40 sl-footer-flex-container'>
                    <div className='flex-item-1 sl-footer-section1'>
                        <div className='flex gap-10'>
                            <Image src={Assets.logo} className={"footer-sl-logo"} />
                            <span className="sl-footer-heading">Fundify</span>
                        </div>
                        <div className='flex flex-column gap-20'>
                            <p>
                                Tincidunt luctus porta amet lectus at ultricies nec sed non.
                                Sed sit egestas enim consectetur donec faucibus
                            </p>
                            <div>Phone: +94 11 111 2323</div>
                            <div>Address: Colombo, Srilanka</div>
                        </div>
                    </div>
                    <div className='flex-item-1 flex gap-20 flex-column sl-footer-section2'>
                        <div className="sl-footer-heading"> About Us</div>
                        <div>About Us</div>
                        <div>Causes</div>
                        <div>Contact Us</div>
                        <div>Volunteers</div>
                    </div>
                    <div className='flex-item-1 flex gap-20 flex-column sl-footer-section3'>
                        <div className="sl-footer-heading"> Useful Links</div>
                        <div>F.A.Q</div>
                        <div>News</div>
                        <div>Terms of Use</div>
                        <div>Privacy Policy</div>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7920910557996!2d79.89829207588572!3d6.795132919945288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae245416b7f34b5%3A0x7bd32721ab02560e!2sUniversity%20of%20Moratuwa!5e0!3m2!1sen!2slk!4v1740983312088!5m2!1sen!2slk"
                            width="600"
                            height="450"
                            className='sl-footer-google-map'
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer