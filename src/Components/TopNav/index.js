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

import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { ScrollContext } from '../../Context'
import HamburgerIcon from '../../Assets/hamburger.svg'
import { useMediaQuery } from 'react-responsive'
export default function TopNav() {
    const is1000 = useMediaQuery({ query: '(max-width: 1000px)' })
    console.log(is1000)
    const [menuOpen, setMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [isAtTop, setIsAtTop] = useState(true)
    const {
        HeroRef,
        AboutRef,
        ResumeRef,
        ServicesRef,
        ProjectsRef,
        ContactRef,
    } = useContext(ScrollContext)

    useScrollPosition(({ prevPos, currPos }) => {
        if (prevPos.y < currPos.y && currPos.y < -500) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }

        if (currPos.y > -500) {
            setIsAtTop(true)
        } else {
            setIsAtTop(false)
        }
    })
    const showNow = isVisible && !isAtTop
    return (
        <Flex
            className="TopNav-Container"
            transform={showNow ? 'translateY(0)' : 'translateY(-100px)'}
        >
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
        </Flex>
    )
}
