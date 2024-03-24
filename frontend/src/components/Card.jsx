import { cva } from "class-variance-authority";
const base = "flex-shrink-0 h-auto ";

const card = cva(base, {
    variants: {
        size: {
            small: "w-48",
            medium: "w-64",
            large: "w-96 md:w-[28rem]",
        },
    },
    compoundVariants: [],
    defaultVariants: {
        size: "small",
    },
});

export default function Card({ className, size, img, name, href }) {
    return (
        <div className={card({ size, className })}>
            <a href={href}>
                <img className='block object-cover rounded-md' src={img} alt={name} />
            </a>
        </div>
    );
}

