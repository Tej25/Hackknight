import { Link } from "react-router-dom";
function Login() {
  return (
    <div
      className="bg-sky-900  w-full h-[90vh] flex flex-col justify-evenly  items-center bg-gradient-to-t from-teal-900" style={{
        backgroundImage: ` url(
          "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMG1vdW50YWlufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        )`,
        backgroundBlendMode:"lighten",
        backgroundRepeat:"no-repeat"
      }}
    >
      <h1 className="font-bold text-5xl">
        <span className="text-sky-400">Doctor </span>Login
      </h1>
      <div className="max-w-xl h-[45vh] w-3/6 flex justify-center items-center bg-slate-800 rounded">
        <div className="flex items-center w-full justify-center">
          <form className="w-full max-w-lg bg-inherit p-2 flex flex-col justify-between">
            <div className="w-[9/10] p-6">
              <div className="flex justify-between w-full my-6">
                <label for="uname" className="flex items-center">
                  Doctor ID
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  className="p-1 rounded text-black"
                  required
                />
              </div>
              <div className="flex justify-between items-center ">
                <label for="psw">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  className="border-b border-teal-400 p-1 text-black rounded focus-within:outline-1"
                  required
                />
              </div>
            </div>
            <br />
            <Link
              to={"/organs"}
              className="mx-auto bg-sky-400 text-slate-800 font-[inter] py-2 px-4 rounded-full uppercase font-semibold hover:shadow hover:shadow-sky-900 hover:bg-sky-50 hover:text-sky-700"
            >
              Submit
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
