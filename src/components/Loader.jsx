import spinner from "./spinner.gif";

const Loader = () => {
  return (
    <div>
      <img className="my-8 mx-auto block" src={spinner} alt="Loading..." />
    </div>
  );
};

export default Loader;
