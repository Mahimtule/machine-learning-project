import Input from "../Input";
import Button from "../Button";
import Dropdown from "../Dropdown";
import { Link } from "react-router-dom";

const Predict = () => {
  const data = ["Hours_Studied", "Marks_Obtained"];

  return (
    <main className="p-10 bg-gray-100 w-full h-screen flex flex-col gap-4">
      <div className="p-5 bg-white flex flex-col justify-start items-center gap-5 rounded-lg border shadow lg:flex-row">
        <Link className="text-2xl font-medium" to="/">
          Machine Learning Project
        </Link>
        <div className="w-full flex flex-col justify-center items-center gap-2 md:flex-row lg:w-fit">
          <Dropdown
            options={[
              "linear_regression",
              "logistic_regression",
              "descicion_tree",
              "knn",
              "naive_bayes",
            ]}
          />
          {data && <Dropdown options={data.reverse()} />}
        </div>
      </div>
      <div className="w-full p-6 bg-white flex flex-col justify-center items-start gap-4 border rounded-lg shadow">
        <h1 className="text-xl text-green-500 font-medium">
          Model Trained Successfully : 200
        </h1>
        <hr className="w-full" />
        <form className="w-full flex flex-col justify-center items-start gap-4">
          <label className="text-xl font-medium">Make Predictions</label>
          <Input
            type="text"
            placeholder="enter some data to make predictions"
          />
          <Button type="submit">make prediction</Button>
        </form>
      </div>
    </main>
  );
};

export default Predict;
