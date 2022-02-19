import { Flex } from '@chakra-ui/react'
import React from 'react'
import './styles/styles.css'
import BackgroundImage from '../../Assets/Lucknow-2.jpg'
export default function Freelance() {
    return (
        <Flex className="Freelance-Container" bgImage={BackgroundImage}>
            <Flex className="Freelance-Container-Overlay"></Flex>
            <Flex className="Freelance-Container-Secondary">
                <Flex className="Freelance-Container-Title">
                    I&apos;m&nbsp;
                    <Flex color="#a0f669">Available&nbsp;</Flex>
                    for freelancing
                </Flex>
                <Flex className="Freelance-Container-Button">Hire me</Flex>
            </Flex>
        </Flex>
    )
}
