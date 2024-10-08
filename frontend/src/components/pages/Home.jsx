import File_Input from "../File_Input";
import Dropdown from "../Dropdown";
import { useState } from "react";
import Button from "../Button";

const Home = () => {
  const [isUpLoaded, setisUpLoaded] = useState(false);
  const data = ["Hours_Studied", "Marks_Obtained"];
  return (
    <main className="p-10 bg-gray-100 w-full h-screen flex flex-col gap-4">
      <div className="p-5 bg-white flex flex-col justify-start items-center gap-5 rounded-lg border shadow lg:flex-row">
        <h1 className="text-2xl font-medium">Machine Learning Project</h1>
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
      <div className="w-full p-6 bg-white flex justify-center items-center border rounded-lg shadow">
        {!isUpLoaded ? <File_Input /> : <Button>train model</Button>}
      </div>
    </main>
  );
};

export default Home;
