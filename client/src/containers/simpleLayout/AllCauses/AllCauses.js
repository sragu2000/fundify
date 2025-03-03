import React from 'react'
import Heading from '../../../components/Heading/Heading'
import CausesCard from '../../../components/CausesCard/CausesCard'

const AllCauses = () => {
    const causesData = [
        {
            "id": 1,
            "image": "https://www.wvi.org/sites/default/files/2022-03/D200-0913-105.jpg",
            "title": "Clean Water for All",
            "description": "Providing clean and safe drinking water to communities in need to prevent waterborne diseases.",
            "goal": 12000,
            "raised": 8000,
            "donationCount": 14
        },
        {
            "id": 2,
            "image": "https://www.unicef.org/srilanka/sites/unicef.org.srilanka/files/styles/hero_extended/public/dDSC01079.jpg.webp?itok=wrKJ-7Y3",
            "title": "Education for Every Child",
            "description": "Ensuring access to quality education for underprivileged children around the world.",
            "goal": 15000,
            "raised": 9200,
            "donationCount": 20
        },
        {
            "id": 3,
            "image": "https://uwcf.org/wp-content/uploads/2019/10/United_Way-13-1030x688.jpg",
            "title": "End Hunger Initiative",
            "description": "Providing nutritious meals and food supplies to children and families facing hunger.",
            "goal": 18000,
            "raised": 10200,
            "donationCount": 30
        },
        {
            "id": 4,
            "image": "https://www.rcrc-resilience-southeastasia.org/wp-content/uploads/2016/10/Koppu_Flood-affected-residents-of-Barangay-Delfin-Albano-Isabela-receive-relief-goods-frm-Red-Cross-Oct-20-2015-October-2015-c-Noel-Celis-IFRC-1024x659.jpg",
            "title": "Disaster Relief Fund",
            "description": "Helping communities recover from natural disasters with emergency aid and shelter.",
            "goal": 20000,
            "raised": 13500,
            "donationCount": 25
        },
        {
            "id": 5,
            "image": "https://ccare.com/wp-content/uploads/2019/11/photo-ccare-support-for-cancer-patients-2000x1335-1-768x513.jpeg",
            "title": "Cancer Treatment Support",
            "description": "Providing medical assistance and financial support to cancer patients in need.",
            "goal": 25000,
            "raised": 17000,
            "donationCount": 40
        },
        {
            "id": 6,
            "image": "https://images.unsplash.com/photo-1583971663176-dd7180de1b76?ixid=MnwxNTA5Nzd8MHwxfHNlYXJjaHwxfHxGZW1hbGUlMjBlbXBvd2VybWVudHxlbnwwfHx8fDE2Mzg5NzEyMDU",
            "title": "Empowering Women & Girls",
            "description": "Supporting education, health, and economic opportunities for women and girls worldwide.",
            "goal": 14000,
            "raised": 9500,
            "donationCount": 18
        }
    ]
    return (
        <section >
            <div className='flex align-center justify-space-between'>
                <Heading heading={"Latest Causes"}></Heading>
            </div>
            <div className='sl-home-causes-card'>
                {
                    causesData.map((cause, index) => {
                        return (<CausesCard
                            image={cause.image}
                            title={cause.title}
                            description={cause.description}
                            id={cause.id}
                            goal={cause.goal}
                            raised={cause.raised}
                            donationCount={cause.donationCount}
                        />)
                    })
                }
            </div>
        </section>
    )
}

export default AllCauses