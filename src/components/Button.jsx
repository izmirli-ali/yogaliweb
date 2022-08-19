import { twMerge } from "tailwind-merge";

function Button({
  children,
  rounded,
  roundedFull,
  type,
  full,
  disabled,
  small,
  className,
  ...props
}) {
  const padding = small ? "px-4 py-2" : "px-4 py-3";

  return (
    <button
      className={twMerge(
        `bg-primary text-white ${padding} flex items-center justify-center ${
          rounded && "rounded"
        } ${roundedFull && "rounded-full"} ${
          full && "w-full"
        } disabled:bg-opacity-50`,
        className
      )}
      disabled={!!disabled}
      {...(type && { type })}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
