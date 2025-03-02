import React, { useEffect, useState } from 'react'
import ModalBox from '../../../../components/ModalBox/ModalBox'
import useHandleFormData, { performValidation } from '../../../../hooks/useHandleFormData';
import CustomText from '../../../../components/FormComponents/Text/CustomText';
import CustomTextArea from '../../../../components/FormComponents/TextArea/CustomTextArea';
import { editButton } from '../../../../layouts/dashboardLayout/DashboardLayout';
import axios from 'axios';
import { ISO_to_HTML_Format } from '../../../../functions/DateFunctions';
const EditTopics = ({ id, name, description, startTime, endTime, date, payment, setResetContent }) => {
    const [openEditTopics, setOpenEditTopics] = useState(false);
    const { formData, errors, handleChange, handleErrors, toast, setFormData } = useHandleFormData();

    useEffect(() => {
        setFormData({
            name: name,
            description: description,
            startTime: startTime,
            endTime: endTime,
            date: ISO_to_HTML_Format(date),
            payment: payment,
        })
    }, [name, description, startTime, endTime, date, payment, setFormData])

    const handleSubmit = () => {
        const validationConfig = [
            {
                name: "name",
                validations: ["required"],
            },
            {
                name: "description",
                validations: ["required"],
            },
            {
                name: "startTime",
                validations: ["required"],
            },
            {
                name: "endTime",
                validations: ["required"],
            },
            {
                name: "date",
                validations: ["required"],
            },
            {
                name: "payment",
                validations: ["required"],
            },
        ];
        const validationResults = performValidation(validationConfig, formData);
        handleErrors(validationResults);
        if (Object.keys(validationResults).length === 0) {
            let bodyData = {
                topicName: formData.name,
                topicDescription: formData.description,
                startTime: formData.startTime,
                endTime: formData.endTime,
                date: formData.date,
                payment: formData.payment,
            }
            try {
                axios
                    .put(`${process.env.REACT_APP_BASE_URL + "/api/topic/" + id}`, bodyData, {
                        headers: {
                            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                        },
                    })
                    .then((res) => {
                        toast("Topic Edited Successfully", "successToast");
                        setOpenEditTopics(false);
                        setFormData({
                            name: "",
                            description: "",
                        });
                        setResetContent(Date.now())
                    })
                    .catch((err) => {
                        toast("Error in Editing Topic", "errorToast");
                    });
            } catch (err) {
                toast("Oops! Something went wrong", "errorToast");
            }
        }
    };

    return (
        <>
            <button type="button" className='no-button-style' onClick={() => { setOpenEditTopics(true) }}>{editButton}</button>
            <ModalBox
                visible={openEditTopics}
                visibleFunction={setOpenEditTopics}
                heading={"Edit Category"}
                body={
                    <div className='edit-category-form-body'>
                        <CustomText
                            fieldClassName={"edit-category-modal-field-text"}
                            label={"Name *"}
                            flex={"1"}
                            onChange={(e) => {
                                handleChange(e, "name");
                            }}
                            error={errors?.name}
                            value={formData.name}
                            placeholder={"Name"}
                        ></CustomText>
                        <CustomTextArea
                            fieldClassName={"edit-category-modal-field-textarea"}
                            label={"Description *"}
                            rows={10}
                            flex={"100%"}
                            onChange={(e) => {
                                handleChange(e, "description");
                            }}
                            error={errors?.description}
                            value={formData.description}
                            placeholder={"Description"}
                        ></CustomTextArea>
                        <CustomText
                            fieldClassName={"edit-category-modal-field-text"}
                            label={"Start Time *"}
                            flex={"1"}
                            type="time"
                            onChange={(e) => {
                                handleChange(e, "startTime");
                            }}
                            error={errors?.startTime}
                            value={formData.startTime}
                            placeholder={"Start Time"}
                        ></CustomText>
                        <CustomText
                            fieldClassName={"edit-category-modal-field-text"}
                            label={"End Time *"}
                            flex={"1"}
                            type="time"
                            onChange={(e) => {
                                handleChange(e, "endTime");
                            }}
                            error={errors?.endTime}
                            value={formData.endTime}
                            placeholder={"End Time"}
                        ></CustomText>
                        <CustomText
                            fieldClassName={"edit-category-modal-field-text"}
                            label={"Date *"}
                            flex={"1"}
                            type="date"
                            onChange={(e) => {
                                handleChange(e, "date");
                            }}
                            error={errors?.date}
                            value={formData.date}
                            placeholder={"Date"}
                        ></CustomText>
                        <CustomText
                            fieldClassName={"edit-category-modal-field-text"}
                            label={"Payment (LKR) *"}
                            flex={"1"}
                            type="number"
                            onChange={(e) => {
                                handleChange(e, "payment");
                            }}
                            error={errors?.payment}
                            value={formData.payment}
                            placeholder={"Payment"}
                        ></CustomText>
                    </div>
                }
                footerButtons={[
                    {
                        text: "Update",
                        type: "success",
                        onClick: () => {
                            handleSubmit();
                        }
                    },
                    {
                        text: "Close",
                        type: "danger",
                        onClick: () => { setOpenEditTopics(false); handleErrors({}) }
                    }
                ]}
            />
        </>
    )
}

export default EditTopics