import { Link } from "react-router-dom";
function Organs() {
  return (
    <div className="bg-sky-900  w-full h-[90vh] flex flex-col justify-evenly  items-center bg-gradient-to-t from-teal-900">
      <h1 className="font-bold text-5xl">
        <span className="text-sky-400">Organ </span>Verification
      </h1>
      <div className="max-w2xl h-[50vh] w-3/6 flex justify-center items-center bg-slate-800 rounded">
        <div className="flex flex-col justify-between">
          <div className="w-full p-6 flex flex-row justify-between items-start">
            <div className="flex flex-col justify-between mx-6">
              <label for="uname" className="flex items-center my-4">
                Organ Name
              </label>
              <input
                type="text"
                placeholder="Enter Organ Name"
                name="uname"
                className="p-1 rounded text-black"
                required
              />
            </div>
            <div className="flex flex-col justify-between mx-6">
              <label for="psw" className="my-4">Organ MetaData</label>
              <input
                type="password"
                placeholder="Metadata Comes Here"
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
        </div>
      </div>
    </div>
  );
}

export default Organs;
