import React from 'react'
import AllTopics from '../../containers/dashboardLayout/Topics/AllTopics/AllTopics'
import { useParams } from 'react-router-dom';

const Topics = () => {
    const { categoryID } = useParams();
    return (
        <AllTopics categoryID={categoryID} />
    )
}

export default Topics