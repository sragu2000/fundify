import React from 'react'
import "./ContactUs.css"
import { Link, useNavigate } from "react-router-dom";
import Heading from '../../../../components/Heading/Heading'
import EmailIcon from "./icons/email.svg"
import PhoneIcon from "./icons/phone.svg"
import TimeIcon from "./icons/time.svg"
import Image from '../../../../components/Image/Image'
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import useHandleFormData from '../../../../hooks/useHandleFormData'
import CustomText from '../../../../components/FormComponents/Text/CustomText'
import CustomTextArea from '../../../../components/FormComponents/TextArea/CustomTextArea'
const ContactUs = () => {
    const { formData, errors, handleChange, handleErrors, toast, setFormData } = useHandleFormData();
    return (
        <section id="sl-home-contact-us">
            <div className='flex align-center justify-center flex-column sl-home-contact-us-main-heading'>
                <Heading heading={"Every Act of Kindness Counts"} className={"sl-home-contact-us-heading"}/>
                <p>
                    Libero dictum ut purus ut vel sit egestas. Ut ac mattis senectus ac suspendisse
                    vitae vel nulla eleifend. Est eros facilisi aenean nisl a. Vitae et fusce purus consectetur.
                </p>
            </div>

            <div className='flex contact-us-card'>
                <div className='flex-item-1 side-1'>
                    <div className='flex justify-space-between flex-column gap-40'>
                        <div className='flex flex-column gap-20'>
                            <h4>Share love, <br></br> donate hope.</h4>
                            <p>
                                Ut ac mattis senectus ac suspendisse vitae vel nulla eleifend.
                                Est eros facilisi aenean nisl a. Vitae et fusce purus consectetur.
                            </p>
                            <div className='address'>8911 Tanglewood Ave, Capitol Heights, MD 20743</div>
                            <div className='flex gap-10 flex-column contact'>
                                <div className='flex gap-20'>
                                    <Image src={PhoneIcon} />
                                    <div>+94 11 101 1012</div>
                                </div>
                                <div className='flex gap-20'>
                                    <Image src={EmailIcon} />
                                    <div>charity@email.net</div>
                                </div>
                                <div className='flex gap-20'>
                                    <Image src={TimeIcon} />
                                    <div>Mon-Fri: 8:00am - 6:00pm</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-20 sl-home-social-icons'>
                            {/* media icons */}
                            <FaFacebook />
                            <BsTwitterX />
                            <AiFillInstagram />
                        </div>
                    </div>
                </div>
                <div className='flex-item-3 side-2'>
                    <div className='flex flex-column gap-20'>
                        <div className='flex gap-20 contact-us-row'>
                            <CustomText
                                fieldClassName={"home-contactus-field"}
                                labelClassName={"home-contactus-label "}
                                label={"First Name"}
                                flex={"1"}
                                onChange={(e) => {
                                    handleChange(e, "name");
                                }}
                                error={errors?.name}
                                value={formData.name}
                                placeholder={"First Name"}
                            ></CustomText>
                            <CustomText
                                fieldClassName={"home-contactus-field"}
                                labelClassName={"home-contactus-label "}
                                label={"Last Name"}
                                flex={"1"}
                                onChange={(e) => {
                                    handleChange(e, "name");
                                }}
                                error={errors?.name}
                                value={formData.name}
                                placeholder={"Last Name"}
                            ></CustomText>
                        </div>
                        <div className='flex gap-20 contact-us-row'>
                            <CustomText
                                fieldClassName={"home-contactus-field"}
                                labelClassName={"home-contactus-label "}
                                label={"Email Address"}
                                flex={"1"}
                                onChange={(e) => {
                                    handleChange(e, "name");
                                }}
                                error={errors?.name}
                                value={formData.name}
                                placeholder={"Email Address"}
                            ></CustomText>
                            <CustomText
                                fieldClassName={"home-contactus-field"}
                                labelClassName={"home-contactus-label "}
                                label={"Phone Number"}
                                flex={"1"}
                                onChange={(e) => {
                                    handleChange(e, "name");
                                }}
                                error={errors?.name}
                                value={formData.name}
                                placeholder={"Phone Number"}
                            ></CustomText>
                        </div>
                        <CustomText
                            fieldClassName={"home-contactus-field"}
                            labelClassName={"home-contactus-label "}
                            label={"Subject"}
                            // flex={"1"}
                            onChange={(e) => {
                                handleChange(e, "name");
                            }}
                            error={errors?.name}
                            value={formData.name}
                            placeholder={"Subject"}
                        ></CustomText>
                        <CustomTextArea
                            fieldClassName={"home-contactus-field-text-area"}
                            labelClassName={"home-contactus-label "}
                            label={"Message"}
                            rows={10}
                            flex={"100%"}
                            onChange={(e) => {
                                handleChange(e, "Message");
                            }}
                            error={errors?.description}
                            value={formData.description}
                            placeholder={"Description"}
                        ></CustomTextArea>
                        <Link to="/donate" className="primary-button send-message-button-home">SEND MESSAGE</Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactUs