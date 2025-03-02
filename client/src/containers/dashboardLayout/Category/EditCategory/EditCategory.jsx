import React, { useEffect, useState } from 'react'
import ModalBox from '../../../../components/ModalBox/ModalBox'
import useHandleFormData, { performValidation } from '../../../../hooks/useHandleFormData';
import CustomText from '../../../../components/FormComponents/Text/CustomText';
import CustomTextArea from '../../../../components/FormComponents/TextArea/CustomTextArea';
import "./EditCategory.css"
import { editButton } from '../../../../layouts/dashboardLayout/DashboardLayout';
import axios from 'axios';
const EditCategory = ({ id, name, description, setResetContent }) => {
    const [openEditCategory, setOpenEditCategory] = useState(false);
    const { formData, errors, handleChange, handleErrors, toast, setFormData } = useHandleFormData();

    useEffect(() => {
        setFormData({
            name: name,
            description: description,
            id: id,
        })
    }, [name, id, description, setFormData])

    const handleSubmit = () => {
        const validationConfig = [
            {
                name: "name",
                validations: ["required"],
                label: "Requirement",
            },
            {
                name: "description",
                validations: ["required"],
                label: "Expertise",
            },
        ];
        const validationResults = performValidation(validationConfig, formData);
        handleErrors(validationResults);
        if (Object.keys(validationResults).length === 0) {
            console.log(formData);
            let bodyData = {
                name: formData.name,
                description: formData.description,
            }

            try {
                axios
                    .put(`${process.env.REACT_APP_BASE_URL + "/api/category/" + id}`, bodyData, {
                        headers: {
                            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                        },
                    })
                    .then((res) => {
                        toast("Topic Edited Successfully", "successToast");
                        setOpenEditCategory(false);
                        setFormData({
                            name: "",
                            description: "",
                        });
                        setResetContent(Date.now());
                    })
                    .catch((err) => {
                        toast("Error in Adding Career", "errorToast");
                    });
            } catch (err) {
                toast("Oops! Something went wrong", "errorToast");
            }
        }
    };

    return (
        <>
            <button
                type="button"
                className='no-button-style'
                onClick={(event) => {
                    event.stopPropagation();
                    setOpenEditCategory(true)
                }}
            >
                {editButton}
            </button>
            <ModalBox
                visible={openEditCategory}
                visibleFunction={setOpenEditCategory}
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
                    </div>
                }
                footerButtons={[
                    {
                        text: "Update",
                        type: "success",
                        onClick: (event) => {
                            event.stopPropagation();
                            handleSubmit();
                        }
                    },
                    {
                        text: "Close",
                        type: "danger",
                        onClick: (event) => {
                            event.stopPropagation();
                            setOpenEditCategory(false);
                            handleErrors({})
                        }
                    }
                ]}
            />
        </>
    )
}

export default EditCategory