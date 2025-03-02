import React, { useEffect, useState } from 'react'
import { CategoriesData } from './CategoriesData'
import { formatDate } from '../../../../functions/DateFunctions';
import { deleteButton } from '../../../../layouts/dashboardLayout/DashboardLayout';
import PopUp from '../../../../components/PopUp/PopUp';
import Table from '../../../../components/Table/Table';
import { caption, headerData } from './TableConfig';
import EditTopics from '../EditTopics/EditTopics';
import AddTopics from '../AddTopics/AddTopics';
import axios from 'axios';
import useFireToast from '../../../../hooks/useFireToast';


const AllTopics = ({ categoryID }) => {
    const [topicsData, setTopicsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [resetContent, setResetContent] = useState(false);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL + "/api/category/" + categoryID + "/topics/"}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }
        })
            .then((response) => {
                setTopicsData(response.data);
                setLoading(false);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            });
    }, [resetContent])

    const tableData = Array.isArray(topicsData)
        ? topicsData.map((data, index) => {
            return {
                tableViewInfo: [
                    data.topicName,
                    data.topicDescription,
                    data.startTime,
                    data.endTime,
                    formatDate(data.date),
                    data.payment + " LKR",
                    <div className="action-icons">
                        <EditTopics
                            name={data.topicName}
                            description={data.topicDescription}
                            id={data?._id}
                            startTime={data.startTime}
                            endTime={data.endTime}
                            date={data.date}
                            payment={data.payment}
                            setResetContent={setResetContent}
                        />
                        <PopUp
                            message="Do you want to delete this Topic ?"
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
                onClickTr: ``,
                id: index,
            };
        })
        : [];

    const toast = useFireToast();
    const handleDelete = (topicID) => {
        try {
            axios.delete(`${process.env.REACT_APP_BASE_URL + "/api/topic/" + topicID}`, {
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
                <div className='all-categories-heading'>Topics</div>
                <AddTopics categoryID={categoryID} setResetContent={setResetContent} />
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

export default AllTopics