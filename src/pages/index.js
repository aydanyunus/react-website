import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);


    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} handleOpen={handleOpen} />
            <Navbar handleOpen={handleOpen} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
