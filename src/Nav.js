import {Link} from 'react-router-dom';
import './nav.css';


function Nav({data})
{
    return(
        <nav>
            <ul>
            <li>
                <Link to={"Home"} className='link'>HOME</Link>
            </li>
                {
                    data.map(
                        truck => (
                            <li key={truck.model}>
                                
                                <Link to={`${truck.model}`} className='link'>{truck.model}</Link>
                                
                            </li>
                        )
                    )
                }
            </ul>
        </nav>
    )
}

export default Nav;