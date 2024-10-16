import { forwardRef } from "react";

// Input component using forwardRef to pass a ref 
const Input = forwardRef(function Input({ isTextArea, label, ...props }, ref) {
  // Defining a set of common CSS classes
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 text-stone-600 focus:outline-none focuse:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {isTextArea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className="" {...props} />
      )}
    </p>
  );
});

export default Input;
