
const Input = ({placeholder, type}) => {
  return (
    <input
      type={type}
      id="input"
      className="border border-gray-300 outline-none rounded-lg focus:ring-2 focus:ring-violet-400 block w-full p-2.5"
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
