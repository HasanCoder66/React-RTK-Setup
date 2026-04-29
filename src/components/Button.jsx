const Button = ({ children, onClick, type = "button", title }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-2 rounded-xl bg-black text-white hover:bg-black/80 transition-all"
    >
      {title}
    </button>
  );
};

export default Button