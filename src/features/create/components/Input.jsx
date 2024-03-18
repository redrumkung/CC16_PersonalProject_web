export default function Input({ type, value, onChange, name, errorMessage, label }) {
  const extendedClasses = errorMessage
    ? "border-red-500 focus:ring-red-300"
    : "border-gray-300 focus:border-blue-500 focus:ring-blue-300";
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs" 
        
      />
      {errorMessage ? (
        <small className="text-red-500">{errorMessage}</small>
      ) : null}
    </label>
  );
}
