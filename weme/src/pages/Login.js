import {Link} from "react-router-dom";
import WeMe from '../asset/svg/WeMe.svg';
import Backbutton from '../asset/svg/Backbutton.svg';

export function Login() {
  return (
      <div className="pt-20">
        <div>
          <div className="flex min-h-full flex-col px-6 py-12 lg:px-8">
              <Link to={'/'} className="sm:mx-auto sm:w-full sm:max-w-sm pb-24">
                  <img src={Backbutton} alt="Backbutton" className="w-6"/>
              </Link>

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img className="mx-auto h-10 w-auto" src={WeMe} />
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-xl font-medium leading-6 text-gray-900">Email</label>
                  <div className="mt-2">
                    <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-xl font-medium leading-6 text-gray-900">Password</label>
                    <div className="text-sm">
                    </div>
                  </div>
                  <div className="mt-2">
                    <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <button type="submit" className="flex w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm">Sign in</button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Forgot password?
              </p>
            </div>
          </div>
        </div>


      </div>
  );
}

export default Login;