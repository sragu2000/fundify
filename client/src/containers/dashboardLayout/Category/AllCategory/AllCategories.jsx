import React, { useEffect, useState } from 'react'
import { formatDate } from '../../../../functions/DateFunctions';
import { Link } from "react-router-dom";
import { deleteButton } from '../../../../layouts/dashboardLayout/DashboardLayout';
import PopUp from '../../../../components/PopUp/PopUp';
import Table from '../../../../components/Table/Table';
import { caption, headerData } from './TableConfig';
import EditCategory from '../EditCategory/EditCategory';
import AddCategory from '../AddCategory/AddCategory';
import "./AllCategories.css"
import axios from 'axios';
import useFireToast from '../../../../hooks/useFireToast';

const AllCategories = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [resetContent, setResetContent] = useState(false);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL + "/api/category"}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }
        }).then((response) => {
            setCategoryData(response.data);
            setLoading(false);
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
            setLoading(false);
        });
    }, [resetContent])

    const tableData = Array.isArray(categoryData)
        ? categoryData.map((data, index) => {
            return {
                tableViewInfo: [
                    <Link to={`/dashboard/topics/${data._id}`}>{data.name}</Link>,
                    data.description,
                    formatDate(data.updatedAt),
                    <div className="action-icons">
                        <EditCategory
                            name={data.name}
                            description={data.description}
                            id={data?._id}
                            setResetContent={setResetContent}
                        />
                        <PopUp
                            message="Do you want to delete this Category ?"
                            onYes={[
                                () => {
                                    handleDelete(data._id);
                                },
                            ]}
                            buttonText={deleteButton}
                            className="dashboard-form-delete-button"
                        />
                    </div>,
                ],
                onClickTr: "",
                id: index,
            };
        })
        : [];

    const toast = useFireToast();

    const handleDelete = (categoryID) => {
        try {
            axios.delete(`${process.env.REACT_APP_BASE_URL + "/api/category/" + categoryID}`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            }).then((res) => {
                toast("Category Deleted Successfully", "successToast");
                setResetContent(Date.now());
            }).catch((err) => {
                toast("Error in Deleting Category", "errorToast");
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <section>
            <div className='all-categories-header'>
                <div className='all-categories-heading'>Categories</div>
                <AddCategory setResetContent={setResetContent} />
            </div>
            <div className='all-categories-table-container'>
                <Table
                    caption={caption}
                    headerData={headerData}
                    tableData={tableData}
                    disableRowClick={true}
                />
            </div>
        </section>
    )
}

export default AllCategories