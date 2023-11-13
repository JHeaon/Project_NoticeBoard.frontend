import WeMe from '../asset/svg/WeMe.svg';
import User from '../asset/svg/User.svg';
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <div className="flex justify-between rounded-sm  w-full p-4">
            <div>
                <img src={WeMe} alt="WeMe" className="w-20"/>
            </div>
            <Link to={'/login'}>
                <div className="flex space-x-4">
                    <img src={User} alt="WeMe" className="w-6"/>
                </div>
            </Link>

        </div>
    )

}

export default Header;