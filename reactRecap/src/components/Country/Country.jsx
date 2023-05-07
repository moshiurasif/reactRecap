import './Country.css';
const Country = (props) => {
    console.log(props.country);
    const {area, population, name, flags, region} = props.country;
    return (
        <div className='country'>
            <h2>{name.common}</h2>
            <img src={flags.png} alt="" />
            <h3>Region: {region}</h3>
            <h4>Population: {population}</h4>
            <p>Area: <small>{area}</small></p>
        </div>
    );
};

export default Country;