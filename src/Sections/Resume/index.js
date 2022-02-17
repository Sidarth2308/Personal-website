import { Flex } from '@chakra-ui/react'
import React from 'react'
import StickyBox from 'react-sticky-box'
import './styles/styles.css'
export default function Resume() {
    return (
        <Flex className="Resume-Container">
            <Flex w="100%" mt="80px">
                <StickyBox offsetTop={10} offsetBottom={10}>
                    <Flex className="Resume-SideNav">
                        <Flex className="Resume-SideNav-Link">Education</Flex>
                        <Flex className="Resume-SideNav-Link">Experience</Flex>
                        <Flex className="Resume-SideNav-Link">Skills</Flex>
                    </Flex>
                </StickyBox>
                <Flex></Flex>
            </Flex>
        </Flex>
    )
}
