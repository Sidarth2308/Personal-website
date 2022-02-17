import { Flex } from '@chakra-ui/react'
import React from 'react'
import './styles/styles.css'
export default function Hero() {
    return (
        <Flex className="Hero-Container">
            <Flex className="Hero-Container-Overlay"></Flex>
            <Flex w="100%" direction="column" zIndex="1">
                <Flex className="Hero-TopNav">
                    <Flex className="Hero-TopNav-Link">Home</Flex>
                    <Flex className="Hero-TopNav-Link">About</Flex>
                    <Flex className="Hero-TopNav-Link">Resume</Flex>
                    <Flex className="Hero-TopNav-Link">Services</Flex>
                    <Flex className="Hero-TopNav-Link">Projects</Flex>
                    <Flex className="Hero-TopNav-Link">Contact</Flex>
                </Flex>

                <Flex className="Hero-CenterShow">
                    <Flex className="Hero-CenterShow-Pre">HEY! I AM</Flex>
                    <Flex className="Hero-CenterShow-Main">Sidarth Jaitly</Flex>
                    <Flex className="Hero-CenterShow-Post">
                        I&apos;m a&nbsp;
                        <Flex className="Hero-CenterShow-Post2">
                            Web-Developer
                        </Flex>
                    </Flex>
                    <Flex
                        className="Hero-Scroll"
                        direction="column"
                        align="center"
                    >
                        <div className="Hero-ScrollAnimation"></div>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
