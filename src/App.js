import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Hero, About, Resume } from './Sections'
import { ChakraProvider } from '@chakra-ui/react'
function App() {
    return (
        <ChakraProvider resetCSS={true}>
            <Flex align="center" direction="column">
                <Flex w="100%" align="center" direction="column">
                    <Hero />
                </Flex>
                <Flex
                    zIndex="1"
                    w="100%"
                    align="center"
                    direction="column"
                    bg="rgb(255, 255, 255)"
                >
                    <About />
                </Flex>
                <Flex
                    zIndex="1"
                    w="100%"
                    align="center"
                    direction="column"
                    bg="rgb(255, 255, 255)"
                >
                    <Resume />
                </Flex>
                <Flex
                    zIndex="1"
                    w="100%"
                    align="center"
                    direction="column"
                    bg="rgb(255, 255, 255)"
                >
                    <About />
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}

export default App
