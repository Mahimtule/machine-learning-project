const Dropdown = ({ options }) => {
  return (
    <select className="p-2 w-full border border-gray-300 rounded focus:border-gray-500 cursor-pointer outline-none lg:w-[300px]">
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
