import { cva } from "class-variance-authority";
const base = "font-roboto align-middle	";

const button = cva(base, {
  variants: {
    intent: {
      primary: " text-primary-black bg-primary-yellow my-6",
      secondary: "",
      alert: "",
    },
    size: {
      small: "px-4 text-sm h-8 ",
      medium: "px-10 text-base h-16 py-3",
    },
    rounded: {
      full: "rounded-full",

    },
    width: {
      32: "w-32",
      64: "w-64",
      "10/12": "w-11/12",
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
  width,
  ...props
}) {
  return (
    <button
      className={button({ intent, size, rounded, width, className })}
      {...props}
    />
  );
}