const bgClass = {
  orange: "bg-orange-400 hover:bg-orange-500",
};

const colorClass = {
  black: "text-black",
  white: "text-white"
};

const widthClass = {
  full: "w-full",
  half: "w-"
};

export default function Button({ children, bg, color, width, onClick }) {
  let classes = bg ? bgClass[bg] : "";
  classes += color ? " " + colorClass[color] : "";
  classes += width ? " " + widthClass[width] : "";

  return (
    <button className={`px-3 py-1.5 rounded-md ${classes}`} onClick={onClick}>
      {children}
    </button>
  );
}
