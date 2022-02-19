import { Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ScrollContext } from '../../Context'
import './styles/styles.css'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { ProjectsData } from '../../Data'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    autoplay: true,
    swipeToSlide: true,
    cssEase: 'ease-in-out',
}

const ProjectsCard = ({ projectData }) => {
    const { thumbnail, title } = projectData
    return (
        <Flex className="Projects-Card-Container">
            <Flex className="Projects-Card-Image" bgImage={thumbnail}></Flex>
            <Flex align="center" justifyContent="space-around" w="100%">
                <Flex className="Projects-Card-Title">{title}</Flex>
                <Flex className="Projects-Card-Button">Learn More</Flex>
            </Flex>
        </Flex>
    )
}

export default function Projects() {
    const { ProjectsRef } = useContext(ScrollContext)

    return (
        <Flex className="Projects-Container" ref={ProjectsRef}>
            <Flex w="100%" direction="column" align="center">
                <Flex className="Projects-Title">Our Projects</Flex>
                <Flex className="Services-Description" mb="30px">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
                </Flex>
                <Flex className="Projects-Cards">
                    <Slider {...settings}>
                        {ProjectsData.map((projectData) => {
                            return (
                                <ProjectsCard
                                    key={projectData.id}
                                    projectData={projectData}
                                />
                            )
                        })}
                    </Slider>
                </Flex>
            </Flex>
        </Flex>
    )
}

ProjectsCard.propTypes = {
    projectData: PropTypes.object,
}
