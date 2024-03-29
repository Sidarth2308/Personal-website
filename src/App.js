import React, { useRef } from 'react'
import { Flex } from '@chakra-ui/react'
import {
    Hero,
    About,
    Resume,
    Services,
    Footer,
    Projects,
    Freelance,
    Contact,
} from './Sections'
import { ChakraProvider } from '@chakra-ui/react'
import { ScrollContext } from './Context'
import TopNav from './Components/TopNav'
function App() {
    const HeroRef = useRef(null)
    const AboutRef = useRef(null)
    const ResumeRef = useRef(null)
    const ServicesRef = useRef(null)
    const ProjectsRef = useRef(null)
    const ContactRef = useRef(null)

    return (
        <ChakraProvider resetCSS={true}>
            <ScrollContext.Provider
                value={{
                    HeroRef,
                    AboutRef,
                    ResumeRef,
                    ServicesRef,
                    ProjectsRef,
                    ContactRef,
                }}
            >
                <Flex align="center" direction="column">
                    <TopNav />

                    <Flex w="100%" align="center" direction="column">
                        <Hero />
                    </Flex>
                    <Flex
                        zIndex="1"
                        w="100%"
                        align="center"
                        direction="column"
                        bg="rgb(255, 255, 255)"
                        pt="30px"
                    >
                        <About />
                    </Flex>
                    <Flex
                        zIndex="1"
                        w="100%"
                        align="center"
                        direction="column"
                        bg="rgb(255, 255, 255)"
                        pt="50px"
                    >
                        <Resume />
                    </Flex>
                    <Flex
                        zIndex="1"
                        w="100%"
                        align="center"
                        direction="column"
                        bg="rgb(255, 255, 255)"
                        pt="150px"
                    >
                        <Services />
                    </Flex>
                    <Flex
                        zIndex="1"
                        w="100%"
                        align="center"
                        direction="column"
                        bg="rgb(255, 255, 255)"
                        pt="150px"
                        pb="50px"
                    >
                        <Projects />
                    </Flex>
                    <Flex
                        zIndex="1"
                        w="100%"
                        align="center"
                        direction="column"
                        bg="rgb(255, 255, 255)"
                    >
                        <Freelance />
                    </Flex>
                    <Flex
                        zIndex="1"
                        w="100%"
                        align="center"
                        direction="column"
                        bg="rgb(255, 255, 255)"
                        pt="150px"
                        pb="50px"
                    >
                        <Contact />
                    </Flex>
                    <Flex
                        zIndex="1"
                        w="100%"
                        align="center"
                        direction="column"
                        bg="#000000"
                    >
                        <Footer />
                    </Flex>
                </Flex>
            </ScrollContext.Provider>
        </ChakraProvider>
    )
}

export default App
