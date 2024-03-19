import { cva } from "class-variance-authority";
const base = "font-roboto";

const button = cva(base, {
  variants: {
    intent: {
      primary: " text-primary-black bg-primary-yellow my-6",
      secondary: "",
      alert: "",
    },
    size: {
      small: "px-4 text-sm h-8 w-32",
      medium: "px-10 text-base h-12 w-64 py-2",
    },
    rounded: {
      full: "rounded-full",

    },
    width: {
      "10/12": "w-10/12",
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