export const Square = ({ children, updateBoard, index }) => {
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-slate-200 w-24 h-24 border-2 border-solid border-slate-500 rounded-md grid items-center cursor-pointer text-4xl"
    >
      {children}
    </div>
  );
};

export const SquareTurn = ({ children, isSelected }) => {
  return (
    <div
      className={`bg-slate-200 w-14 h-14 rounded-md grid items-center text-2xl ${
        isSelected ? "border-2 border-slate-600" : ""
      }`}
    >
      {children}
    </div>
  );
};
