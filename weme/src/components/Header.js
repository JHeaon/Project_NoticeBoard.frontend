import WeMe from '../asset/svg/WeMe.svg';
import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import isLogin from "../functions/IsLogin";
import {jwtDecode} from "jwt-decode";
import axios from "axios";
import env from "../functions/Env";


const Header = () => {
    const [nickname, setNickname] = useState()

    const logOut = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }

    const offLoginText = (
        <Link to={'/login'} className="text-gray-400 hover:text-gray-500">
            로그인
        </Link>
    )

    const onLoginText = (
        <div>
            <div onClick={logOut}>
                {nickname} 로그아웃
            </div>
        </div>
    )

    const getUserNickName = () => {
        if (isLogin()) {
            const userId = jwtDecode(localStorage.getItem('token'))['user_id'];
            axios.get(`${env.API_URL}/account/user/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${localStorage.getItem('token')}`,
                }
            }).then(res => {
                setNickname(res.data['nickname']);
            }).catch((err) => {
                localStorage.removeItem('token');
            });
        }
    }


    useEffect(() => {
        getUserNickName();
    }, []);


    return(
        <div className="flex justify-between rounded-sm  w-full p-4">
            <div>
                <img src={WeMe} alt="WeMe" className="w-20"/>
            </div>
            {isLogin() ? (onLoginText) : (offLoginText)}
        </div>
    )

}

export default Header;