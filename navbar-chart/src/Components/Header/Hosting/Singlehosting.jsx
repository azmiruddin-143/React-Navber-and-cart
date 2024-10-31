import PropTypes from 'prop-types'; // ES6

const Singlehosting = ({hostloop,alerttost}) => {



    const {name,price,storage,bandwidth,support} = hostloop
    return (
        <div>
            <div className="bg-[#83198a] space-y-5 py-6 text-white rounded-md">
                <h1 className="text-3xl font-bold">{name}</h1>
                <h1>{price}</h1>
                <h1>{storage}</h1>
                <h1>{bandwidth}</h1>
                <h1>{support}</h1>
                <button onClick={()=> alerttost(hostloop)} className="bg-[#191085] text-white py-2 px-5 rounded-md">Buy Now</button>
            </div>
        </div>
    );
};
Singlehosting.propTypes = {
    hostloop: PropTypes.object.isRequired,
    alerttost: PropTypes.func
}

export default Singlehosting;