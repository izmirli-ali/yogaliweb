import { XIcon } from "@heroicons/react/outline";

function Modal({ onClickOutside, onClickClose, children }) {
  return (
    <div
      onClick={onClickOutside}
      className="fixed w-screen z-50 h-screen top-0 left-0 px-6 md:px-10 py-5 bg-black/50 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl overflow-auto w-full h-fit max-h-full p-8 bg-[#DDE4EE] dark:bg-[#222]"
      >
        <button
          onClick={onClickClose}
          className="absolute top-2 right-2 hover:text-primary transition"
        >
          <XIcon className="w-6 h-6" />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
