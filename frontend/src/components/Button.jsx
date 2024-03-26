import { cva } from "class-variance-authority";
const base = "flex items-center justify-center font-roboto align-middle	";

const button = cva(base, {
  variants: {
    intent: {
      primary: " text-primary-black bg-primary-yellow my-6",
      secondary: "",
      alert: "",
    },
    size: {
      small: "px-4 text-sm h-8 ",
      medium: "px-10 text-base h-16 py-3 w-11/12 md:w-64  lg:py-6 h-12",
    },
    rounded: {
      full: "rounded-full",

    },
  },
  compoundVariants: [],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export default function Button({
  className,
  intent,
  size,
  rounded,
  ...props
}) {
  return (
    <button
      className={button({ intent, size, rounded, className })}
      {...props}
    />
  );
}