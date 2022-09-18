import React from 'react';

import {
    FaDownload,
    FaGithub,
    FaLinkedinIn,
    FaGlobe,
    FaTwitter,
    FaPlus,
    FaFacebook,
    FaYoutube,
    FaEnvelope,
    FaMobileAlt,
    FaMapMarkerAlt,
    FaCodepen,
    FaFreeCodeCamp,
} from 'react-icons/fa';

const icons = {
    download: FaDownload,
    github: FaGithub,
    linkedin: FaLinkedinIn,
    website: FaGlobe,
    twitter: FaTwitter,
    facebook: FaFacebook,
    youtube: FaYoutube,
    plus: FaPlus,
    email: FaEnvelope,
    phone: FaMobileAlt,
    address: FaMapMarkerAlt,
    codepen: FaCodepen,
    freeCodeCamp: FaFreeCodeCamp,
};

export const Icon = ({ name, onClick }) => {
    const FinalIcon = icons[name];
    return <FinalIcon onClick={onClick}></FinalIcon>;
};
