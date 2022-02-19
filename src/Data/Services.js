import FrontEndIcon from '../Assets/front-end.svg'
import BackEndIcon from '../Assets/back-end.svg'
import FullStackIcon from '../Assets/fullstack.svg'
import CloudSolutionsIcon from '../Assets/cloud-solutions.svg'

const ServicesData = [
    {
        id: 1,
        service: 'Full Stack Web Development',
        description:
            'Development of production grade website with MERN Stack and any integrable technology. Website support + Responsive + Testing.',
        icon: FullStackIcon,
    },
    {
        id: 2,
        service: 'Front-end Engineer',
        description:
            'Development of production grade front-end website with React framework. Website support + Responsive + Testing.',
        icon: FrontEndIcon,
    },
    {
        id: 3,
        service: 'Back-end Engineer',
        description:
            'Development of production grade back-end apis as well as front-end connection with node.js and Express framework. Website Support + Testing.',
        icon: BackEndIcon,
    },
    {
        id: 4,
        service: 'Cloud Solutions Architect',
        description:
            'Providing cloud-based solutions to problems. Also designing cloud architecture as well as managing cloud resources in Amazon AWS.',
        icon: CloudSolutionsIcon,
    },
]

export default ServicesData
