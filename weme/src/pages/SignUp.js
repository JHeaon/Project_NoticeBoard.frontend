import {Link} from "react-router-dom";
import WeMe from '../asset/svg/WeMe.svg';
import Backbutton from '../asset/svg/Backbutton.svg';
import {useState} from "react";
import axios from "axios";

export function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Repassword, setRePassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [idErrormsg, setIdErrormsg] = useState('');
  const [pwdErrormsg, setPwdErrormsg] = useState('');

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  const onNicknameHandler = (event) => {
    setNickname(event.currentTarget.value);
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }

  const onRePasswordHandler = (event) => {
    setRePassword(event.currentTarget.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    if(password !== Repassword){
        setPwdErrormsg('비밀번호와 확인 비밀번호가 일치하지 않습니다.');
        return;
    }

    if(idErrormsg !== '사용 가능한 이메일입니다.'){
        setPwdErrormsg('이메일 중복확인을 해주세요.');
        return;
    }

    axios.post("http://localhost:8000/account/signup/", {
      "email": email,
      "nickname": nickname,
      "password": password,
      "re_password": Repassword,
    }).then(res => {
      console.log(res.data);
      window.location.href = '/';
    }).catch((err) => {
      console.log(err);
    });
  }

  const checkEmailHandler = () => {
    axios.post("http://localhost:8000/account/email_check/", {
      "email": email,
    }).then(res => {
      console.log(res.data);
      if(res.data['message'] === '사용 가능한 이메일입니다.'){
        setIdErrormsg(res.data['message']);
      }
    }).catch((err) => {
      setIdErrormsg('이미 사용중인 이메일입니다.')
    });
  }

  return (
      <div>
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
                  <div className="flex justify-between w-full space-x-5 ">
                    <input id="email" value={email} name="email" onChange={onEmailHandler} type="email" autoComplete="email" required className=" w-full rounded-md border-0 text-gray-900 text-xl shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                    <button type="button" onClick={checkEmailHandler} className="rounded-md text-center bg-gray-400 px-8 text-white shadow-sm">
                      중복
                    </button>
                  </div>
                </div>
                <div className="text-xl py-0"> {idErrormsg}</div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="nickname" className="block text-xl font-medium leading-6 text-gray-900">Nickname</label>
                    <div className="text-sm">
                    </div>
                  </div>
                  <div className="mt-2">
                    <input id="nickname" value={nickname} name="nickname" onChange={onNicknameHandler} autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
                  <div className="flex items-center justify-between">
                    <label htmlFor="Repassword" className="block text-xl font-medium leading-6 text-gray-900">Repassword</label>
                    <div className="text-sm">
                    </div>
                  </div>
                  <div className="mt-2">
                    <input id="Repassword" value={Repassword} name="Repassword" onChange={onRePasswordHandler} type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>


                <div>
                  <p className="text-red-500 text-sm">{pwdErrormsg}</p>
                </div>

                <div>
                  <button type="submit" className="flex w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm">Sign Up</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SignUp;