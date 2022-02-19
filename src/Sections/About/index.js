import { Flex, Image } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import './styles/styles.css'
import AboutImage from '../../Assets/About2.jpeg'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import { ScrollContext } from '../../Context'
export default function About() {
    const [showNow, setShowNow] = useState(false)
    const { AboutRef } = useContext(ScrollContext)
    return (
        <Flex className="About-Container" ref={AboutRef}>
            <Flex w="100%" alignItems="center">
                <Flex flex="1" justifyContent="flex-end">
                    <Flex className="About-ImageContainer">
                        <Image
                            maxH="100%"
                            maxW="100%"
                            src={AboutImage}
                            alt="Sidarth Jaitly"
                        />
                    </Flex>
                </Flex>
                <Flex flex="1">
                    <Flex className="About-RightColumn">
                        <Flex className="About-RightColumn-Heading">
                            About Me
                        </Flex>
                        <Flex className="About-RightColumn-Description">
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia.
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
                                    Lucknow, Uttar Pradesh, India
                                </Flex>
                            </Flex>

                            <Flex className="About-RightColumn-Details-Item">
                                <Flex className="About-RightColumn-Details-Item-Left">
                                    Email:
                                </Flex>
                                <Flex className="About-RightColumn-Details-Item-Right">
                                    sj4917@srmist.edu.in
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
                                href="https://drive.google.com/u/0/uc?id=11oiNekLwgNr_PTj2PidHrWJQejRcDlwu&export=download"
                            >
                                Download CV
                            </a>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
