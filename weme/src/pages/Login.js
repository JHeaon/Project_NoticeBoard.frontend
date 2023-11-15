import {Link} from "react-router-dom";
import WeMe from '../asset/svg/WeMe.svg';
import Backbutton from '../asset/svg/Backbutton.svg';
import {useState} from "react";
import axios from "axios";

export function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errormsg, setErrormsg] = useState('');

     const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }


  function submitHandler(event) {
    event.preventDefault();

    axios.post("http://localhost:8000/account/login/", {
      "email": email,
      "password": password
    }).then(res => {
      console.log(res);
      localStorage.setItem('token', res.data['access']);
      localStorage.setItem('refresh_token', res.data['refresh']);
      window.location.href = '/';
    }).catch((err) => {
        setErrormsg('아이디 또는 비밀번호가 일치하지 않습니다.');
    });
  }

  return (
      <di>
        <div>
          <div className="flex pt-20 min-h-screen bg-gray-100 flex-col px-6 py-12 lg:px-8">
              <Link to={'/'} className="sm:mx-auto sm:w-full sm:max-w-sm pb-24">
                  <img src={Backbutton} alt="Backbutton" className="w-6"/>
              </Link>

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img className="mx-auto h-10 w-auto" src={WeMe} alt="WeMe"/>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={submitHandler}>
                <div>
                  <label htmlFor="email" className="block text-xl font-medium leading-6 text-gray-900">Email</label>
                  <div className="mt-2">
                    <input id="email" value={email} name="email" onChange={onEmailHandler} type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-xl font-medium leading-6 text-gray-900">Password</label>
                    <div className="text-sm">
                    </div>
                  </div>
                  <div className="mt-2">
                    <input id="password" value={password} name="password" onChange={onPasswordHandler} type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
              <div>
                <p className="text-red-500 text-sm">{errormsg}</p>
              </div>
                <div>
                  <button type="submit" className="flex w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm">Sign in</button>
                </div>
              </form>

                <div className='flex justify-center space-x-10'>
                    <p className="mt-10 text-center text-lg text-gray-500">
                        Forgot password?
                    </p>
                    <Link to={'/signup'} className="mt-10 text-center text-lg text-gray-500">
                        Sign up
                    </Link>
                </div>

            </div>
          </div>
        </div>


      </di>
  );
}

export default Login;