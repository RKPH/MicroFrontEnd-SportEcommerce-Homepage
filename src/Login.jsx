import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link component

export function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center flex-col"
      style={{
        backgroundImage: `url('https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_4288,h_2412,c_limit/BlackForest-Germany-GettyImages-147180370.jpg')`,
      }}
    >
      <div className="w-full flex flex-col justify-center text-center items-center mb-8">
        <img
          src="https://micro-front-end-sport-ecommerce-homepage.vercel.app//logo.png"
          alt="Logo"
          className="h-24 mb-4" // Adjust height as needed
        />
        <span className="text-2xl text-black font-bold">
          Welcome to sport ecommerce
        </span>
      </div>
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-8 shadow-lg max-w-md w-full">
        <h3 className="text-3xl text-blue-gray-800 mb-2 text-center">
          Sign In
        </h3>
        <p className="mb-16 text-gray-600 text-center text-lg">
          Enter your email and password to sign in
        </p>
        <form action="#" className="mx-auto max-w-md text-left">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block font-medium text-gray-900 mb-2"
            >
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full px-4 py-2 border rounded-lg focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block font-medium text-gray-900 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type={passwordShown ? "text" : "password"}
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg focus:border-blue-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-10 text-gray-600"
            >
              {passwordShown ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition mt-6"
          >
            Sign In
          </button>
          <div className="mt-4 flex justify-end">
            <a
              href="#"
              className="text-black-600 hover:text-gray-400 font-medium"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="button"
            className="w-full py-2 mt-6 border border-gray-300 rounded-lg flex items-center justify-center gap-2"
          >
            <img
              src="https://www.material-tailwind.com/logos/logo-google.png"
              alt="Google logo"
              className="h-6 w-6"
            />
            Sign in with Google
          </button>
          <p className="mt-4 text-center text-gray-900">
            Not registered?{" "}
            <a
              href="#"
              className="font-medium text-gray-900 hover:text-gray-400"
            >
              Create account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
