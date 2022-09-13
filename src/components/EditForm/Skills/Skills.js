import React from 'react';

import SectionWrapper from '../../Utils/SectionWrapper';
import AddSkill from './AddSkill';
import SkillsList from './SkillsList';

const Skills = ({ skills }) => {
    return (
        <SectionWrapper title={'Skills'} isLast={true}>
            <AddSkill
                title={'Technical Skills'}
                placeholder={'Add a new tool'}
                type={'tools'}
            />
            <SkillsList type={'tools'} skills={skills.tools} />
            <AddSkill
                title={'Soft Skills'}
                placeholder={'Add a new skill'}
                type={'soft'}
            />
            <SkillsList type={'soft'} skills={skills.soft} />
        </SectionWrapper>
    );
};

export default Skills;
