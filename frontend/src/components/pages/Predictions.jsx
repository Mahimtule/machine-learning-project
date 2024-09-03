import { Link } from "react-router-dom";

const Predictions = () => {
  const data = ["Hours_Studied", "Marks_Obtained"];

  return (
    <main className="p-10 bg-gray-100 w-full h-screen flex flex-col gap-4">
      <div className="p-5 bg-white flex flex-col justify-start items-center gap-5 rounded-lg border shadow lg:flex-row">
        <Link className="text-2xl font-medium" to="/">
          Machine Learning Project
        </Link>
      </div>
      <div className="w-full p-6 bg-white flex flex-col justify-center items-start gap-4 border rounded-lg shadow">
        <h1 className="text-xl font-medium">
          Predictions
        </h1>
        <hr className="w-full" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
          voluptate, facere labore, accusantium saepe deserunt, sunt incidunt
          expedita ex dicta inventore quibusdam corrupti temporibus dolore fugit
          enim? Quaerat, nostrum nobis?
        </p>
      </div>
    </main>
  );
};

export default Predictions;
