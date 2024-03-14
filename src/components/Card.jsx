export default function Card({ img, name, href }) {
    return (

        <div className="flex-shrink-0 w-48 h-auto">
            <a href={href}>
                <img className='block object-cover rounded-md' src={img} alt={name} />
            </a>
        </div>
    );
}