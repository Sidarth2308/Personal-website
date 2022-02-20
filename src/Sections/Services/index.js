import { Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ServicesData } from '../../Data'
import './styles/styles.css'
import { ScrollContext } from '../../Context'
const ServiceCard = ({ cardData }) => {
    const { service, description, icon } = cardData
    return (
        <Flex className="Service-Card-Container">
            <img src={icon} alt={service} className="Service-Card-Icon" />
            <Flex className="Service-Card-Title">{service}</Flex>
            <div className="Service-Card-Divider"></div>
            <Flex className="Service-Card-Description">{description}</Flex>
        </Flex>
    )
}

export default function Services() {
    const { ServicesRef } = useContext(ScrollContext)
    return (
        <Flex className="Services-Container" ref={ServicesRef}>
            <Flex className="Services-Container-Secondary">
                <Flex className="Services-Title">Services</Flex>
                <Flex className="Services-Description" mb="50px">
                    I offer nothing less than excellence with high level support
                    which has been established firmly by our previous partners.
                </Flex>
                <Flex className="Services-Cards">
                    {ServicesData.map((serviceData) => {
                        return (
                            <ServiceCard
                                key={serviceData.id}
                                cardData={serviceData}
                            />
                        )
                    })}
                </Flex>
            </Flex>
        </Flex>
    )
}

ServiceCard.propTypes = {
    cardData: PropTypes.object,
}
