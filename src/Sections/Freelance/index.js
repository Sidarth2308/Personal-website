import { Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import './styles/styles.css'
import BackgroundImage from '../../Assets/Lucknow-2.jpg'
import { ScrollContext } from '../../Context'
export default function Freelance() {
    const { ContactRef } = useContext(ScrollContext)
    return (
        <Flex className="Freelance-Container" bgImage={BackgroundImage}>
            <Flex className="Freelance-Container-Overlay"></Flex>
            <Flex className="Freelance-Container-Secondary">
                <Flex className="Freelance-Container-Title">
                    I&apos;m&nbsp;
                    <Flex color="#a0f669">Available</Flex>
                    &nbsp;for freelancing
                </Flex>
                <Flex
                    className="Freelance-Container-Button"
                    onClick={() => {
                        ContactRef.current.scrollIntoView()
                    }}
                >
                    Hire me
                </Flex>
            </Flex>
        </Flex>
    )
}
