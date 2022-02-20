import { Flex } from '@chakra-ui/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import StickyBox from 'react-sticky-box'
import './styles/styles.css'
import { ResumeData } from '../../Data'
import { EducationCard, ExperienceCard, SkillCard } from './resume-cards'
import useOnScreen from '../../Hooks/isOnScreen'
import { ScrollContext } from '../../Context'
import { useMediaQuery } from 'react-responsive'
export default function Resume() {
    const [currentVisible, setCurrentVisible] = useState('')
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const isVisible1 = useOnScreen(ref1)
    const isVisible2 = useOnScreen(ref2)
    const isVisible3 = useOnScreen(ref3)

    const { ResumeRef } = useContext(ScrollContext)
    useEffect(() => {
        if (isVisible3) {
            setCurrentVisible('skills')
        } else if (isVisible2) {
            setCurrentVisible('experience')
        } else if (isVisible1) {
            setCurrentVisible('education')
        }
    }, [isVisible1, isVisible2, isVisible3])

    const is770 = useMediaQuery({ query: '(max-width: 770px)' })

    return (
        <Flex className="Resume-Container" ref={ResumeRef}>
            <Flex w="100%" className="Resume-Container-Secondary">
                {!is770 && (
                    <StickyBox offsetTop={10} offsetBottom={10}>
                        <Flex className="Resume-SideNav">
                            <Flex
                                className="Resume-SideNav-Link"
                                color={
                                    currentVisible === 'education'
                                        ? '#3e64ff'
                                        : '#000'
                                }
                                left={
                                    currentVisible === 'education'
                                        ? '30px'
                                        : '0'
                                }
                                onClick={() => {
                                    ref1.current.scrollIntoView()
                                    setCurrentVisible('education')
                                }}
                            >
                                Education
                            </Flex>
                            <Flex
                                className="Resume-SideNav-Link"
                                left={
                                    currentVisible === 'experience'
                                        ? '30px'
                                        : '0'
                                }
                                color={
                                    currentVisible === 'experience'
                                        ? '#3e64ff'
                                        : '#000'
                                }
                                onClick={() => {
                                    setCurrentVisible('experience')
                                    ref2.current.scrollIntoView()
                                }}
                            >
                                Experience
                            </Flex>
                            <Flex
                                className="Resume-SideNav-Link"
                                left={
                                    currentVisible === 'skills' ? '30px' : '0'
                                }
                                color={
                                    currentVisible === 'skills'
                                        ? '#3e64ff'
                                        : '#000'
                                }
                                onClick={() => {
                                    setCurrentVisible('skills')
                                    ref3.current.scrollIntoView()
                                }}
                            >
                                Skills
                            </Flex>
                        </Flex>
                    </StickyBox>
                )}

                <Flex w="100%">
                    <Flex className="Resume-Data">
                        <div ref={ref1}>
                            <Flex className="Resume-Data-Title">Education</Flex>
                            {ResumeData.Education.map((educationData) => {
                                return (
                                    <EducationCard
                                        key={educationData.id}
                                        educationData={educationData}
                                    />
                                )
                            })}
                        </div>
                        <div ref={ref2}>
                            <Flex className="Resume-Data-Title" mt="80px">
                                Work Experience
                            </Flex>
                            {ResumeData.Experience.map((experienceData) => {
                                return (
                                    <ExperienceCard
                                        key={experienceData.id}
                                        experienceData={experienceData}
                                    />
                                )
                            })}
                        </div>
                        <div ref={ref3}>
                            <Flex className="Resume-Data-Title" mt="80px">
                                Skills
                            </Flex>
                            <Flex className="Resume-Skills-Container">
                                {ResumeData.Skills.map((skillData) => {
                                    return (
                                        <SkillCard
                                            key={skillData.id}
                                            skillData={skillData}
                                        />
                                    )
                                })}
                            </Flex>
                        </div>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
