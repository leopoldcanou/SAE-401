import { cva } from "class-variance-authority";
const base = "font-roboto";

const button = cva(base, {
  variants: {
    intent: {
      primary: " text-primary-black bg-primary-yellow",
      secondary: "",
      alert: "",
    },
    size: {
      small: "px-4 text-sm h-8 w-32",
      medium: "px-10 text-base h-12 w-64",
    },
    rounde: {
      rd: "rounded-full",

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
  rounde,
  ...props
}) {
  return (
    <button
      className={button({ intent, size, rounde, className })}
      {...props}
    />
  );
}