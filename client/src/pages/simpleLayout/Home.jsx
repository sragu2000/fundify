import React from 'react'
import Landing from '../../containers/simpleLayout/Home/Landing/Landing'
import HowTo from '../../containers/simpleLayout/Home/HowTo/HowTo'
import WhatWeSupport from '../../containers/simpleLayout/Home/WhatWeSupport/WhatWeSupport'
import CausesHome from '../../containers/simpleLayout/Home/Causes/CausesHome'
import Summary from '../../containers/simpleLayout/Home/Summary/Summary'
import ContactUs from '../../containers/simpleLayout/Home/ContactUs/ContactUs'

const Home = () => {
    return (
        <>
            <Landing />
            <HowTo />
            <WhatWeSupport />
            <CausesHome />
            <Summary />
            <ContactUs />
        </>
    )
}

export default Home