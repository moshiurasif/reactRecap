import './Country.css';
const Country = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>Population: {props.population}</h3>
        </div>
    );
};

export default Country;