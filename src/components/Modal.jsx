export default function Modal({ title, children, onClose, width }) {
  return (
    <>
      <div className="fixed bg-white inset-0 opacity-70"></div>
      <div className="fixed inset-0">
        <div className="flex items-center justify-center min-h-full">
          <div
            className="bg-white rounded-lg shadow-[0_0_15px_rgb(0,0,0,0.2)]"
            style={{ width: `${width}rem` }}
          >
            <div className="border-b flex justify-between items-center p-4">
              <button className="invisible">&#10005;</button>
              <h5 className="text-2xl font-semibold">{title}</h5>
              <button onClick={onClose}>&#10005;</button>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
