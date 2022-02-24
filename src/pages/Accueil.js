import React from 'react';
import NavbarC from "../components/NavbarC";
import CarouselC from '../components/CarouselC';
import SectionAboutUs from "../components/SectionAboutUs";
import SectionServices from "../components/SectionServices";
import SectionReferences from "../components/SectionReferences";
import Footer from "../components/Footer";
import CopyRight from "../components/CopyRight";

function Accueil() {
    return (
        <>
            <NavbarC />
            <CarouselC />
            <SectionAboutUs />
            <SectionServices />
            <SectionReferences />
            <Footer />
            <CopyRight />
        </>
    )
}

export default Accueil