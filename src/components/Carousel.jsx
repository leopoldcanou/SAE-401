import { useRef, useState, useEffect } from 'react';
import Card from './Card';
import data from '../assets/film-data.json';
import ScrollContainer from 'react-indiana-drag-scroll';
import SlideButton from './SlideButton';

export default function Carousel() {
    const containerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const container = containerRef.current.container.current;
        const handleScroll = () => {
            setScrollPosition(container.scrollLeft);
        };
        container.addEventListener('scroll', handleScroll);
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollLeft = () => {
        const container = containerRef.current.container.current;
        container.scrollBy({
            left: -400,
            behavior: 'smooth'
        });
    };

    const handleScrollRight = () => {
        const container = containerRef.current.container.current;
        container.scrollBy({
            left: 400,
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative">
            <ScrollContainer className="flex gap-4 px-4 overflow-x-auto scroll-container flex-nowrap" ref={containerRef}>
                {data.movies.map((movie, index) => (
                    <Card key={index} img={movie.img} name={movie.title} />
                ))}
            </ScrollContainer>
            <SlideButton
                direction="left"
                onClick={handleScrollLeft}
                isHidden={scrollPosition === 0}
            />
            <SlideButton
                direction="right"
                onClick={handleScrollRight}
                isHidden={scrollPosition >= containerRef.current?.container.current?.scrollWidth - containerRef.current?.container.current?.clientWidth}
            />
        </div >
    );
}
