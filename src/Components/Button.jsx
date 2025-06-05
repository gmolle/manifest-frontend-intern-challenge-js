import clsx from "clsx";

export default function Button({
  variant = "primary",
  inverted = false,
  disabled = false,
  children,
  ...props
}) {
  const base =
    "px-4 py-2 rounded-[9px] font-medium transition-colors duration-200 h-[40px] min-w-[150px] lg:min-w-[225px] ";

  const variants = {
    primary: clsx(
      disabled
        ? "bg-[#ede6dd] cursor-not-allowed text-[#999]"
        : inverted
        ? "border-[2px] border-[#3B968B] text-[#3B968B] hover:bg-[#3B968B] hover:text-white active:bg-[#3B968B] cursor-pointer"
        : "bg-[#3B968B] text-white hover:bg-[#3B968B] active:bg-[#3B968B] cursor-pointer"
    ),
    secondary: clsx(
      "border-[2px] ",
      disabled
        ? "border-[#ccc] text-gray-400 cursor-not-allowed"
        : inverted
        ? "bg-[#3B968B] text-white hover:bg-white hover:text-[#3B968B] border-none cursor-pointer"
        : "border-[#3B968B] text-[#3B968B] hover:bg-[#3B968B] hover:text-white active:bg-[#3B968B] cursor-pointer"
    ),
    text: clsx(
      disabled
        ? "text-gray-400 cursor-not-allowed"
        : inverted
        ? "bg-[#3B968B] text-white hover:bg-white hover:text-[#3B968B] border-none cursor-pointer"
        : "text-[#3B968B] hover:bg-[#3B968B] active:bg-[#3B968B] cursor-pointer hover:text-white"
    ),
  };

  return (
    <button
      className={clsx(base, variants[variant])}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
