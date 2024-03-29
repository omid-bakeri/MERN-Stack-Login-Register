import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();
  axios.defaults.withCredentials = true;

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Fill in all require Fields");
    }

    axios
      .post("http://127.0.0.1:5001/api/login", {
        email,
        password,
      })
      .then((result) => setData(result))
      .catch((err) => {
        // console.log(err);
        setError(err);
      });

    if (data) {
      console.log(data);
    }

    if (data && data.data.status == 200) {
      toast.success("Successfully Login in Site Transfering ...");
      // const setTime = async () => {
      //   await setTimeout(() => {
      //     navigate("/Home");
      //   }, 3000);
      // };
      // setTime();
    }
    if (data && data.data.status == 404) {
      toast.error(data.data.message);
    }
    if (error) {
      console.log(error);
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link to="/">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Login in Site
          </a>
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login in Site
            </h1>
            <form
              onSubmit={handleSubmitLogin}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email <span className="text-red-500">*</span>
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5 gap-2">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border
                     border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300
                      dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600
                       dark:ring-offset-gray-800"
                    required=""
                  />
                  <div className="text-white">Remember me</div>
                </div>
              </div>
              <button className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Dont have any Account?{" "}
                <Link to="/register">
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Register
                  </a>
                </Link>
                <p className="mt-2">forget password</p>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;
