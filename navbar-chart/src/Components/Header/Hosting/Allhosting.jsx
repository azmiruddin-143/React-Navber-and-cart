import Singlehosting from "./Singlehosting";
import PropTypes from 'prop-types'; // ES6


const Allhosting = ({ alerttost }) => {
    const hostingServices = [
        {
            id: 1,
            name: 'Bluehost',
            price: '$2.95/month',
            storage: '50 GB SSD',
            bandwidth: 'Unmetered',
            support: '24/7 Support',
        },
        {
            id: 2,
            name: 'HostGator',
            price: '$2.75/month',
            storage: 'Unlimited SSD',
            bandwidth: 'Unmetered',
            support: '24/7 Support',
        },
        {
            id: 3,
            name: 'SiteGround',
            price: '$3.99/month',
            storage: '10 GB SSD',
            bandwidth: '10,000 visits/month',
            support: '24/7 Support',
        },
        {
            id: 4,
            name: 'A2 Hosting',
            price: '$2.99/month',
            storage: '100 GB SSD',
            bandwidth: 'Unlimited',
            support: '24/7 Support',
        },
        {
            id: 5,
            name: 'InMotion Hosting',
            price: '$2.29/month',
            storage: '100 GB SSD',
            bandwidth: 'Unlimited',
            support: '24/7 Support',
        },
        {
            id: 6,
            name: 'DreamHost',
            price: '$2.59/month',
            storage: 'Unlimited SSD',
            bandwidth: 'Unlimited',
            support: '24/7 Support',
        },
    ];
    return (
        <div className="grid grid-cols-3 gap-2 items-center text-center px-16">
            {
                hostingServices.map(hostloop => <Singlehosting key={hostloop.id} hostloop={hostloop} alerttost={alerttost}   ></Singlehosting>)
            }
        </div>
    );
};

Allhosting.propTypes = {
    alerttost: PropTypes.object.isRequired
}

export default Allhosting;