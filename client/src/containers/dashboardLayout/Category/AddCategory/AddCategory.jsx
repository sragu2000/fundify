import React, { useEffect, useState } from 'react'
import useHandleFormData, { performValidation } from '../../../../hooks/useHandleFormData';
import CustomText from '../../../../components/FormComponents/Text/CustomText';
import CustomTextArea from '../../../../components/FormComponents/TextArea/CustomTextArea';
import ModalBox from '../../../../components/ModalBox/ModalBox';
import axios from "axios";
// import "./EditCategory.css"
const AddCategory = ({ setResetContent }) => {
    const { formData, errors, handleChange, handleErrors, toast, setFormData } = useHandleFormData();
    useEffect(() => {
        setFormData({
            name: "",
            description: "",
        });
    }, [setFormData])
    const [openAddCategory, setOpenAddCategory] = useState(false);

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
                    .post(`${process.env.REACT_APP_BASE_URL + "/api/category/"}`, bodyData, {
                        headers: {
                            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                        },
                    })
                    .then((res) => {
                        toast("Career Added Successfully", "successToast");
                        setOpenAddCategory(false);
                        setFormData({
                            name: "",
                            description: "",
                        });
                        setResetContent(Date.now())
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
            <button onClick={() => setOpenAddCategory(true)} className='primary-button'>Add Category</button>
            <ModalBox
                visible={openAddCategory}
                visibleFunction={setOpenAddCategory}
                heading={"Add Category"}
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
                            fieldClassName={" edit-category-modal-field-textarea"}
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
                        text: "Save",
                        type: "success",
                        onClick: () => { handleSubmit(); }
                    },
                    {
                        text: "Close",
                        type: "danger",
                        onClick: () => { setOpenAddCategory(false); handleErrors({}) }
                    }
                ]}
            />
        </>
    )
}

export default AddCategory