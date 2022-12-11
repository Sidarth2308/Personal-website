import { Flex, Spinner, useToast } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import './styles/styles.css'
import { Input, Textarea } from '@chakra-ui/react'
import emailjs from '@emailjs/browser'
import { ScrollContext } from '../../Context'

export default function Contact() {
    const toast = useToast()
    const { ContactRef } = useContext(ScrollContext)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [isLoading, setIsLoading] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)
    useEffect(() => {
        if (
            formData.name === '' ||
            formData.message === '' ||
            formData.subject === '' ||
            formData.email === ''
        ) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }, [formData])
    const handleChange = (name, value) => {
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const handleSubmission = () => {
        setIsLoading(true)
        emailjs.init('MHuSan2GLsIrAYjqT')
        emailjs
            .send('service_mpiz9o5', 'template_434u1o1', {
                sender_name: formData.name,
                sender_email: formData.email,
                sender_subject: formData.subject,
                message: formData.message,
            })
            .then((response) => {
                console.log(response.status, response.text)
                if (response.status == 200) {
                    toast({
                        title: 'Message sent successfully',
                        description: 'We will get back to you shortly.',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                        position: 'top',
                    })
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                    })
                } else {
                    toast({
                        title: 'Error occurred',
                        description:
                            'We could not process your request, please try again later.',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                        position: 'top',
                    })
                }

                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                toast({
                    title: 'Error occurred',
                    description:
                        'We could not process your request, please try again later.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top',
                })
                setIsLoading(false)
            })
    }
    return (
        <Flex className="Contact-Container" ref={ContactRef}>
            <Flex
                w="100%"
                direction="column"
                align="center"
                className="Contact-Container-Secondary"
            >
                <Flex className="Contact-Title">Contact Me</Flex>
                <Flex className="Services-Description" mb="30px">
                    Contact me via this form or drop an email to
                    sidarthjaitly@gmail.com and I will get back to you within
                    24-48 hours
                </Flex>
                <Flex className="Contact-Form">
                    <Input
                        value={formData.name}
                        onChange={(e) => {
                            handleChange('name', e.target.value)
                        }}
                        required
                        placeholder="Your Name"
                        mb="20px"
                        color="black"
                        bgColor="white"
                    />
                    <Input
                        value={formData.email}
                        onChange={(e) => {
                            handleChange('email', e.target.value)
                        }}
                        required
                        placeholder="Your Email"
                        type="email"
                        mb="20px"
                        color="#000"
                        bgColor="white"
                    />
                    <Input
                        value={formData.subject}
                        onChange={(e) => {
                            handleChange('subject', e.target.value)
                        }}
                        required
                        color="#000"
                        placeholder="Subject"
                        mb="20px"
                        bgColor="white"
                    />
                    <Textarea
                        value={formData.message}
                        onChange={(e) => {
                            handleChange('message', e.target.value)
                        }}
                        color="#000"
                        rows="6"
                        required
                        placeholder="Message"
                        resize="none"
                        size="lg"
                        bgColor="white"
                        mb="30px"
                    />
                    <Flex
                        className="Contact-Button"
                        bg={isDisabled ? '#999' : 'rgb(62, 100, 255)'}
                        onClick={() => {
                            if (!isDisabled && !isLoading) {
                                handleSubmission()
                            } else {
                                toast({
                                    title: 'Invalid fields',
                                    description:
                                        'Please enter valid information for all the fields',
                                    status: 'warning',
                                    duration: 5000,
                                    isClosable: true,
                                    position: 'top',
                                })
                            }
                        }}
                    >
                        {isLoading ? <Spinner /> : <div>Send Message</div>}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
