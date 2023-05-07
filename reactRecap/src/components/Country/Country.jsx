import './Country.css';
const Country = (props) => {
    console.log(props.country);
    const {area, population, name, flags, region} = props.country;
    return (
        <div className='country'>
            <h1>{name.common}</h1>
            <img src={flags.png} alt="" />
            <h2>Region: {region}</h2>
            <h3>Population: {population}</h3>
            <p>Area: <small>{area}</small></p>
        </div>
    );
};

export default Country;