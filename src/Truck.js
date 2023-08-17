import './truck.css';

function Truck({truck})
{
    return(

        <div className="component container">
            <h1>{truck.model}</h1>
            <h2>{truck.tagline}</h2>
            <p>{truck.blurb}</p>
            <p><button>Click for more info...</button></p>
        </div>
    );
}

export default Truck;

