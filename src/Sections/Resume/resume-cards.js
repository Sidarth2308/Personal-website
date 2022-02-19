import React, { useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'
export const EducationCard = ({ educationData }) => {
    const {
        yearStart,
        yearEnd,
        course,
        institution,
        description,
        score,
        gradedIn,
    } = educationData
    return (
        <Flex className="Resume-Card-Education">
            <Flex className="Resume-Card-Education-Duration">
                {`${yearStart} - ${yearEnd}`}
            </Flex>
            <Flex className="Resume-Card-Education-Course">
                {course}
                <Flex className="Resume-Card-Education-Score">
                    &nbsp;{`- ${score}${gradedIn}`}
                </Flex>
            </Flex>
            <Flex className="Resume-Card-Education-Institution">
                {institution}
            </Flex>
            <Flex className="Resume-Card-Education-Description">
                {description}
            </Flex>
        </Flex>
    )
}

export const ExperienceCard = ({ experienceData }) => {
    const { monthStart, monthEnd, company, oneLiner, description, role } =
        experienceData
    return (
        <Flex className="Resume-Card-Education">
            <Flex className="Resume-Card-Education-Duration">
                {`${monthStart} - ${monthEnd}`}
            </Flex>
            <Flex className="Resume-Card-Education-Course">{`${company}  (${role}) `}</Flex>
            <Flex className="Resume-Card-Education-Description">
                {oneLiner}
            </Flex>

            <Flex className="Resume-Card-Education-Institution">
                Achievements:
            </Flex>
            <Flex className="Resume-Card-Education-Description">
                {description}
            </Flex>
        </Flex>
    )
}

export const SkillCard = ({ skillData }) => {
    const { skill, score } = skillData
    const [showNow, setShowNow] = useState(false)
    return (
        <Flex className="Resume-Card-Skill">
            <VisibilitySensor
                onChange={(isVisible) => {
                    if (isVisible) {
                        setShowNow(true)
                    }
                }}
            >
                <>
                    <Flex className="Resume-Card-Skill-Title">
                        <Flex zIndex={1} bg="#fff">
                            {' '}
                            {skill}
                        </Flex>

                        <Flex
                            className="Resume-Data-TitleScore"
                            right={showNow ? `${100 - score}%` : '95%'}
                        >
                            {score}%
                        </Flex>
                    </Flex>
                    <Flex className="Resume-Card-Skill-Progress">
                        <Box
                            className="Resume-Card-Skill-Score"
                            w={showNow ? `${score}%` : `${0}%`}
                        ></Box>
                        <div className="Resume-Card-Skill-Background"></div>
                    </Flex>
                </>
            </VisibilitySensor>
        </Flex>
    )
}
SkillCard.propTypes = {
    skillData: PropTypes.object,
}

ExperienceCard.propTypes = {
    experienceData: PropTypes.object,
}

EducationCard.propTypes = {
    educationData: PropTypes.object,
}
