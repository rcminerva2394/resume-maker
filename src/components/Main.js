import React, { useState, useRef, createContext, useMemo } from 'react';

import styled from 'styled-components';
import BtnGrp from './BtnGrp/BtnGrp';
import EditForm from './EditForm/EditForm';
import PrevForm from './PrevForm/PrevForm';
import { v4 as uuidv4 } from 'uuid';
import { useReactToPrint } from 'react-to-print';
import ChangeTheme from './ChangingTheme/ChangeTheme';

const PLACEHOLDER =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur. sint commodi repudiandae consequuntur';

const INITIALSOCLINKS = [
    { name: 'website', link: '', id: uuidv4() },
    { name: 'linkedin', link: '', id: uuidv4() },
    { name: 'github', link: '', id: uuidv4() },
    { name: 'twitter', link: '', id: uuidv4() },
    { name: 'facebook', link: '', id: uuidv4() },
    { name: 'youtube', link: '', id: uuidv4() },
    { name: 'codepen', link: '', id: uuidv4() },
    { name: 'freeCodeCamp', link: '', id: uuidv4() },
];

const SKILLS = {
    tools: [
        { name: 'CLICK ME TO EDIT', id: uuidv4() },
        { name: 'HTML', id: uuidv4() },
        { name: 'CSS', id: uuidv4() },
        { name: 'JavaScript', id: uuidv4() },
    ],
    soft: [
        { name: 'CLICK ME TO EDIT', id: uuidv4() },
        { name: 'Adaptability', id: uuidv4() },
        { name: 'Time Mgmt', id: uuidv4() },
        { name: 'Communication', id: uuidv4() },
    ],
};

const PERSONALINFO = {
    firstname: 'SAMPLE',
    lastname: 'NAME',
    job: 'Full-stack web developer',
    email: 'sampleemail@gmail.com',
    number: '(63)963-234667',
    address: '155 4th St. Ste 1050 San Francisco, CA 94103, USA',
};

const EXPERIENCE = [
    {
        id: uuidv4(),
        position: 'Frontend Developer',
        company: 'Company Name',
        from: 'Feb 2022',
        to: 'May 2022',
        description: PLACEHOLDER,
    },
];

const EDUCATION = [
    {
        id: uuidv4(),
        course: "Course Name or Bachelor's Degree",
        school: 'University of Simple People',
        from: 'June 2012',
        to: 'June 2016',
    },
];

export const SkillsContext = createContext({
    skills: {},
    setSkills: () => {},
});

export const ThemeColor = createContext({
    hexTheme: '',
    setHexTheme: () => {},
});

const Main = () => {
    const [isEditing, setIsEditing] = useState(true);
    const [photoUploaded, setPhotoUploaded] = useState(null);
    const [description, setDescription] = useState(PLACEHOLDER);
    const [finalSocLinks, setFinalSocLinks] = useState(INITIALSOCLINKS);
    const [skills, setSkills] = useState(SKILLS);
    const value = useMemo(() => ({ skills, setSkills }), [skills]);
    const [personalInfo, setPersonalInfo] = useState(PERSONALINFO);
    const [experience, setExperience] = useState(EXPERIENCE);
    const [education, setEducation] = useState(EDUCATION);
    const [hexTheme, setHexTheme] = useState('#645D5D');
    const colorValue = { hexTheme, setHexTheme };

    const editPrev = (e) => {
        setIsEditing(e);
    };

    const uploadPhotoHandler = (e) => {
        setPhotoUploaded(URL.createObjectURL(e.target.files[0]));
    };

    const aboutMeHandler = (value) => {
        setDescription(value);
    };

    const soclLinkEditHandler = (inputLink, id) => {
        const updatedSocLinks = INITIALSOCLINKS.map((socLink) => {
            if (socLink.id === id) {
                socLink.link = inputLink;
            }
            return socLink;
        });
        setFinalSocLinks(updatedSocLinks);
    };

    const personalInfoChangeHandler = (e) => {
        const { name, value } = e.target;
        setPersonalInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const experienceChangeHandlder = (e, id) => {
        const { name, value } = e.target;
        const updatedExperience = experience.map((experienceItem) => {
            if (experienceItem.id === id) {
                return { ...experienceItem, [name]: value };
            }
            return experienceItem;
        });
        setExperience(updatedExperience);
    };

    const deleteExperienceItem = (id) => {
        const updatedExperience = experience.filter(
            (experienceItem) => experienceItem.id !== id
        );
        setExperience(updatedExperience);
    };

    const addExperienceItem = () => {
        setExperience((prevExperience) => {
            return [
                ...prevExperience,
                {
                    id: uuidv4(),
                    position: '',
                    company: '',
                    from: '',
                    to: '',
                    description: '',
                },
            ];
        });
    };

    const educationChangeHandlder = (e, id) => {
        const { name, value } = e.target;
        const updatedEducation = education.map((educationItem) => {
            if (educationItem.id === id) {
                return { ...educationItem, [name]: value };
            }
            return educationItem;
        });
        setEducation(updatedEducation);
    };

    const deleteEducationItem = (id) => {
        const updatedEducation = education.filter(
            (educationItem) => educationItem.id !== id
        );
        setEducation(updatedEducation);
    };

    const addEducationItem = () => {
        setEducation((prevEducation) => {
            return [
                ...prevEducation,
                {
                    id: uuidv4(),
                    course: '',
                    school: '',
                    from: '',
                    to: '',
                },
            ];
        });
    };

    /** For printing to pdf using react-to-print */
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <ThemeColor.Provider value={colorValue}>
            <SkillsContext.Provider value={value}>
                <MainWrapper>
                    <BtnGrpThemeWrapper>
                        <BtnGrp
                            onEditPrev={editPrev}
                            onDownLoad
                            editState={isEditing}
                            role='button'
                            onPrint={handlePrint}
                        ></BtnGrp>
                        <ChangeTheme />
                    </BtnGrpThemeWrapper>
                    {isEditing ? (
                        <EditForm
                            onUploadPhoto={uploadPhotoHandler}
                            photo={photoUploaded}
                            onAboutMe={aboutMeHandler}
                            aboutMe={description}
                            socLinks={finalSocLinks}
                            onEditSocLink={soclLinkEditHandler}
                            skills={skills}
                            personalInfo={personalInfo}
                            onChangePersonalInfo={personalInfoChangeHandler}
                            experience={experience}
                            onChangeExperience={experienceChangeHandlder}
                            onDeleteExperience={deleteExperienceItem}
                            onAddExperience={addExperienceItem}
                            education={education}
                            onChangeEducation={educationChangeHandlder}
                            onDeleteEducation={deleteEducationItem}
                            onAddEducation={addEducationItem}
                        ></EditForm>
                    ) : (
                        <PrevForm
                            ref={componentRef}
                            photo={photoUploaded}
                            aboutMe={description}
                            socLinks={finalSocLinks}
                            skills={skills}
                            personalInfo={personalInfo}
                            experience={experience}
                            education={education}
                        ></PrevForm>
                    )}
                </MainWrapper>
            </SkillsContext.Provider>
        </ThemeColor.Provider>
    );
};

const MainWrapper = styled.main`
    display: grid;
    justify-content: center;
    margin: auto;
    padding-top: 30rem;
    padding-bottom: 30rem;
`;

const BtnGrpThemeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20rem 0;
`;
export default Main;
