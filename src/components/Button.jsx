const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
    >
      {children}
    </button>
  );
};

export default Button;