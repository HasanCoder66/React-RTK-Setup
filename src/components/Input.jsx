const InputField = ({ label, type = "text", value, onChange, placeholder, name }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-1 text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black/70"
      />
    </div>
  );
};

export default InputField