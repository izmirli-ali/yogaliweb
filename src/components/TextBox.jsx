import { forwardRef } from "preact/compat";
import { twMerge } from "tailwind-merge";

const TextBox = forwardRef(function TextBox(
  { rounded, placeholder, full, className, type, ...rest },
  ref
) {
  return (
    <div className="py-4">
      <div className="relative group textbox-wrapper">
        <input
          ref={ref}
          {...(type ? { type } : { type: "text" })}
          placeholder=" "
          className={twMerge(
            `py-2 border-b focus:border-primary transition placeholder:text-slate-400 bg-transparent outline-none peer ${
              full && "w-full"
            }`,
            className
          )}
          {...rest}
        />
        <label className="block absolute bottom-2 left-0 origin-left transition duration-300 pointer-events-none">
          {placeholder}
        </label>
      </div>
    </div>
  );
});

export default TextBox;
