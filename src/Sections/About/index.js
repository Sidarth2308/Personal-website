import { Flex } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import './styles/styles.css'
import AboutImage from '../../Assets/About3.jpg'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import { ScrollContext } from '../../Context'
import { useMediaQuery } from 'react-responsive'
export default function About() {
    const is770 = useMediaQuery({ query: '(max-width: 770px)' })
    const [showNow, setShowNow] = useState(false)
    const { AboutRef } = useContext(ScrollContext)
    return (
        <Flex className="About-Container" ref={AboutRef}>
            <Flex w="100%" alignItems="center">
                {!is770 && (
                    <Flex className="About-LeftColumn-Container">
                        <Flex
                            className="About-Image"
                            bgImage={AboutImage}
                        ></Flex>
                    </Flex>
                )}
                <Flex className="About-RightColumn-Container">
                    <Flex className="About-RightColumn">
                        <Flex className="About-RightColumn-Heading">
                            About Me
                        </Flex>
                        <Flex className="About-RightColumn-Description">
                            I hail from the state capital city of Lucknow where
                            I developed a keen sense of problem solving while
                            munching on delicacies of the old city. Currently
                            based out of Chennai, India.
                        </Flex>
                        <Flex className="About-RightColumn-Details">
                            <Flex className="About-RightColumn-Details-Item">
                                <Flex className="About-RightColumn-Details-Item-Left">
                                    Name:
                                </Flex>
                                <Flex className="About-RightColumn-Details-Item-Right">
                                    Sidarth Jaitly
                                </Flex>
                            </Flex>

                            <Flex className="About-RightColumn-Details-Item">
                                <Flex className="About-RightColumn-Details-Item-Left">
                                    Date of birth:
                                </Flex>
                                <Flex className="About-RightColumn-Details-Item-Right">
                                    28th March, 2000
                                </Flex>
                            </Flex>

                            <Flex className="About-RightColumn-Details-Item">
                                <Flex className="About-RightColumn-Details-Item-Left">
                                    Based out of:
                                </Flex>
                                <Flex className="About-RightColumn-Details-Item-Right">
                                    Chennai, Tamil Nadu, India
                                </Flex>
                            </Flex>

                            <Flex className="About-RightColumn-Details-Item">
                                <Flex className="About-RightColumn-Details-Item-Left">
                                    Email:
                                </Flex>
                                <Flex className="About-RightColumn-Details-Item-Right">
                                    sidarthjaitly@gmail.com
                                </Flex>
                            </Flex>
                            <Flex className="About-RightColumn-Details-Item">
                                <Flex className="About-RightColumn-Details-Item-Left">
                                    Phone:
                                </Flex>
                                <Flex className="About-RightColumn-Details-Item-Right">
                                    +91-8887959430
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex className="About-RightColumn-Projects">
                            <Flex>
                                <VisibilitySensor
                                    partialVisibility
                                    onChange={(isVisible) => {
                                        if (isVisible) {
                                            setShowNow(true)
                                        }
                                    }}
                                >
                                    <Flex className="About-RightColumn-Projects-CountUp">
                                        {showNow ? (
                                            <CountUp end={20} duration={2} />
                                        ) : (
                                            20
                                        )}
                                        +
                                    </Flex>
                                </VisibilitySensor>

                                <Flex className="About-RightColumn-Projects-Title">
                                    &nbsp;Projects Completed
                                </Flex>
                            </Flex>
                            <a
                                className="About-RightColumn-Projects-Download"
                                download
                                href="https://drive.google.com/file/d/1i5rKsEnqsND0vn7h7hqaLVnKVv7z0PwV/view?usp=sharing"
                            >
                                View Resume
                            </a>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
