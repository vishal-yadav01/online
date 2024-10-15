const Loading = ({ val }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">Loading... {val}</h1>
    </div>
  );
};

export default Loading;
