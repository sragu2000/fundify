import React from 'react'
import Heading from '../../../components/Heading/Heading'
import Image from '../../../components/Image/Image'
import "./SingleCause.css"
import ProgressBar from '../../../components/ProgressBar/ProgressBar'
import { Assets } from '../../../assets/Assets'
import useHandleFormData from '../../../hooks/useHandleFormData'
import CustomText from '../../../components/FormComponents/Text/CustomText'
import { Link } from 'react-router-dom'
const SingleCause = () => {
    const { formData, errors, handleChange, handleErrors, toast, setFormData } = useHandleFormData();
    return (
        <section id="sl-single-cause">
            <div className='flex gap-20'>
                <div className="flex flex-column gap-30 singlecause-flex-part1">
                    <Heading heading={"Clean Water for All"} />
                    <p className='single-cause-description'>
                        Clean water is essential for life, health, and well-being. It is vital for drinking, sanitation, agriculture, and industry, playing a crucial role in sustaining ecosystems and human development. Access to safe and clean water helps prevent waterborne diseases, improves hygiene, and supports economic growth. However, many regions around the world still struggle with water pollution and scarcity due to industrial waste, deforestation, and climate change. Ensuring clean water for all requires sustainable water management, conservation efforts, and investment in purification technologies. Protecting this precious resource is key to a healthier and more sustainable future.
                    </p>
                    <Image className={"single-cause-image"} src="https://wvusstatic.com/www/uploads/water-beneficiary-every-10-seconds_D200-0604-05_404863_1-1.jpg" />
                    <ProgressBar value={40} />
                    <div className='flex flex-column gap-10'>
                        <div className='flex justify-space-between'>
                            <div className='single-cause-summary-heading'>Goal: $12000</div>
                            <div className='single-cause-summary-heading'>14</div>
                        </div>
                        <div className='flex justify-space-between'>
                            <div className='single-cause-summary-text'> Raised: $8000</div>
                            <div className='single-cause-summary-text'>Donations</div>
                        </div>
                    </div>
                    <div className='single-cause-payment-container flex flex-column gap-30'>
                        <div className='flex flex-column gap-10'>
                            <div className='single-cause-payment-heading'>Donation Amount</div>
                            <div className='flex gap-10 flex-wrap'>
                                <div className='single-cause-payment-pill'>$10</div>
                                <div className='single-cause-payment-pill single-cause-payment-pill-selected'>$25</div>
                                <div className='single-cause-payment-pill'>$50</div>
                                <div className='single-cause-payment-pill'>$100</div>
                                <div className='single-cause-payment-pill'>$500</div>
                                <div className='single-cause-payment-pill'>Custom Amount</div>
                            </div>
                        </div>
                        {/* <div className='flex flex-column gap-10'>
                            <div className='single-cause-payment-heading'>Select Payment Method</div>
                            <button className='single-cause-payment-way'>
                                <Image className={"single-cause-payment-way-button"} src={Assets.payhere}></Image>
                            </button>
                        </div> */}
                        <div className='flex flex-column gap-10'>
                            <div className='single-cause-payment-heading'>Personal Information</div>
                            <div className='flex flex-column gap-20'>
                                <div className='flex gap-20 contact-us-row'>
                                    <CustomText
                                        fieldClassName={"single-cause-payment-field"}
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
                                        fieldClassName={"single-cause-payment-field"}
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
                                <CustomText
                                    fieldClassName={"single-cause-payment-field"}
                                    labelClassName={"home-contactus-label "}
                                    label={"Email Address"}
                                    // flex={"1"}
                                    onChange={(e) => {
                                        handleChange(e, "name");
                                    }}
                                    error={errors?.name}
                                    value={formData.name}
                                    placeholder={"Email Address"}
                                ></CustomText>
                                <Link to="/donate" className="primary-button send-message-button-home" style={{ borderRadius: "10px" }}>Donate Now</Link>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className='singlecause-flex-part2'></div>
            </div>

        </section>
    )
}

export default SingleCause