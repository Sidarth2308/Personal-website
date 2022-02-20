import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import './styles/styles.css'
import ReactTypingEffect from 'react-typing-effect'
import { ScrollContext } from '../../Context'
import { useMediaQuery } from 'react-responsive'
import HamburgerIcon from '../../Assets/hamburger.svg'
export default function Hero() {
    const {
        HeroRef,
        AboutRef,
        ResumeRef,
        ServicesRef,
        ProjectsRef,
        ContactRef,
    } = useContext(ScrollContext)
    const [menuOpen, setMenuOpen] = useState(false)
    const is1000 = useMediaQuery({ query: '(max-width: 1000px)' })
    const is550 = useMediaQuery({ query: '(max-width: 550px)' })
    return (
        <Flex className="Hero-Container" ref={HeroRef}>
            <Flex className="Hero-Container-Overlay"></Flex>
            <Flex w="100%" direction="column" zIndex="1">
                {is1000 ? (
                    <Flex className="Hero-TopNavSmall">
                        <Flex
                            align="center"
                            justifyContent="flex-end"
                            marginLeft="auto"
                            cursor="pointer"
                            userSelect="none"
                            onClick={() => {
                                setMenuOpen((prev) => !prev)
                            }}
                        >
                            <Flex className="Hero-TopNav-Link">Menu</Flex>
                            <Flex className="Hero-TopNav-Hamburger">
                                <img w="100%" src={HamburgerIcon} alt="Menu" />
                            </Flex>
                        </Flex>

                        <Drawer
                            placement="top"
                            onClose={() => {
                                setMenuOpen(false)
                            }}
                            isOpen={menuOpen}
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerHeader borderBottomWidth="1px">
                                    Navigation
                                </DrawerHeader>
                                <DrawerBody>
                                    <Flex
                                        className="Hero-TopNav-Link"
                                        onClick={() => {
                                            HeroRef.current.scrollIntoView()
                                            setMenuOpen(false)
                                        }}
                                    >
                                        Home
                                    </Flex>
                                    <Flex
                                        className="Hero-TopNav-Link"
                                        onClick={() => {
                                            AboutRef.current.scrollIntoView()
                                            setMenuOpen(false)
                                        }}
                                    >
                                        About
                                    </Flex>
                                    <Flex
                                        className="Hero-TopNav-Link"
                                        onClick={() => {
                                            ResumeRef.current.scrollIntoView()
                                            setMenuOpen(false)
                                        }}
                                    >
                                        Resume
                                    </Flex>
                                    <Flex
                                        className="Hero-TopNav-Link"
                                        onClick={() => {
                                            ServicesRef.current.scrollIntoView()
                                            setMenuOpen(false)
                                        }}
                                    >
                                        Services
                                    </Flex>
                                    <Flex
                                        className="Hero-TopNav-Link"
                                        onClick={() => {
                                            ProjectsRef.current.scrollIntoView()
                                            setMenuOpen(false)
                                        }}
                                    >
                                        Projects
                                    </Flex>
                                    <Flex
                                        className="Hero-TopNav-Link"
                                        onClick={() => {
                                            ContactRef.current.scrollIntoView()
                                            setMenuOpen(false)
                                        }}
                                    >
                                        Contact
                                    </Flex>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </Flex>
                ) : (
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
                        <Flex
                            className="Hero-TopNav-Link"
                            onClick={() => {
                                ContactRef.current.scrollIntoView()
                            }}
                        >
                            Contact
                        </Flex>
                    </Flex>
                )}

                <Flex className="Hero-CenterShow">
                    <Flex className="Hero-CenterShow-Pre">HEY! I AM</Flex>
                    <Flex className="Hero-CenterShow-Main">Sidarth Jaitly</Flex>
                    <Flex className="Hero-CenterShow-Post">
                        I&apos;m a&nbsp;
                        {!is550 && (
                            <>
                                {' '}
                                {' < '}{' '}
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
                                    cursorRenderer={(cursor) => (
                                        <>&nbsp;{cursor}</>
                                    )}
                                    displayTextRenderer={(text) => {
                                        return (
                                            <Flex className="Hero-CenterShow-Post2">
                                                {text}
                                            </Flex>
                                        )
                                    }}
                                />
                                {' > '}{' '}
                            </>
                        )}
                        {/* <Flex className="Hero-CenterShow-Post2">
                            Web-Developer
                        </Flex> */}
                    </Flex>
                    <Flex className="Hero-CenterShow-Post">
                        {is550 && (
                            <>
                                {' '}
                                {' < '}{' '}
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
                                    cursorRenderer={(cursor) => (
                                        <>&nbsp;{cursor}</>
                                    )}
                                    displayTextRenderer={(text) => {
                                        return (
                                            <Flex className="Hero-CenterShow-Post2">
                                                {text}
                                            </Flex>
                                        )
                                    }}
                                />
                                {' > '}{' '}
                            </>
                        )}
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
