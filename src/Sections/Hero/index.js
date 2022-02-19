import { Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import './styles/styles.css'
import ReactTypingEffect from 'react-typing-effect'
import { ScrollContext } from '../../Context'
export default function Hero() {
    const { HeroRef, AboutRef, ResumeRef, ServicesRef, ProjectsRef } =
        useContext(ScrollContext)
    return (
        <Flex className="Hero-Container" ref={HeroRef}>
            <Flex className="Hero-Container-Overlay"></Flex>
            <Flex w="100%" direction="column" zIndex="1">
                <Flex className="Hero-TopNav">
                    <Flex
                        className="Hero-TopNav-Link"
                        onClick={() => {
                            HeroRef.current.scrollIntoView()
                        }}
                    >
                        Home
                    </Flex>
                    <Flex
                        className="Hero-TopNav-Link"
                        onClick={() => {
                            AboutRef.current.scrollIntoView()
                        }}
                    >
                        About
                    </Flex>
                    <Flex
                        className="Hero-TopNav-Link"
                        onClick={() => {
                            ResumeRef.current.scrollIntoView()
                        }}
                    >
                        Resume
                    </Flex>
                    <Flex
                        className="Hero-TopNav-Link"
                        onClick={() => {
                            ServicesRef.current.scrollIntoView()
                        }}
                    >
                        Services
                    </Flex>
                    <Flex
                        className="Hero-TopNav-Link"
                        onClick={() => {
                            ProjectsRef.current.scrollIntoView()
                        }}
                    >
                        Projects
                    </Flex>
                    <Flex className="Hero-TopNav-Link">Contact</Flex>
                </Flex>

                <Flex className="Hero-CenterShow">
                    <Flex className="Hero-CenterShow-Pre">HEY! I AM</Flex>
                    <Flex className="Hero-CenterShow-Main">Sidarth Jaitly</Flex>
                    <Flex className="Hero-CenterShow-Post">
                        I&apos;m a&nbsp; {' < '}
                        <ReactTypingEffect
                            speed="100"
                            eraseSpeed="100"
                            eraseDelay="2000"
                            typingDelay="500"
                            cursor="/"
                            text={[
                                'Web-Developer',
                                'Front-end Engineer',
                                'Full-Stack Engineer',
                                'Back-end Engineer',
                                'Cloud Solutions Engineer',
                            ]}
                            cursorRenderer={(cursor) => <>&nbsp;{cursor}</>}
                            displayTextRenderer={(text) => {
                                return (
                                    <Flex className="Hero-CenterShow-Post2">
                                        {text}
                                    </Flex>
                                )
                            }}
                        />
                        {' > '}
                        {/* <Flex className="Hero-CenterShow-Post2">
                            Web-Developer
                        </Flex> */}
                    </Flex>
                    <Flex
                        className="Hero-Scroll"
                        direction="column"
                        align="center"
                        onClick={() => {
                            ResumeRef.current.scrollIntoView()
                        }}
                    >
                        <div
                            className="Hero-ScrollAnimation"
                            onClick={() => {
                                ResumeRef.current.scrollIntoView()
                            }}
                        ></div>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
