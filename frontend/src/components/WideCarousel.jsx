import { useRef } from 'react';
import Card from './Card';
import data from '../assets/film-data.json';
import ScrollContainer from 'react-indiana-drag-scroll';
import SlideButton from './SlideButton';

export default function WideCarousel() {
    const containerRef = useRef(null);
  



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
        <div className="relative py-6 bg-primary-background">
            <div className='flex flex-col px-5 pb-6'>
                <h3 className='text-xl font-bold text-center font-roboto text-primary-white'>Choose From popular titles</h3>
                <p className='text-xs text-center font-roboto text-primary-white'>Movies or series? Don&apos;t worry, we have something for everyone!</p>
            </div>
            <div className='relative'><ScrollContainer className="flex flex-row gap-2 px-4 overflow-x-auto md:gap-6 scroll-container flex-nowrap cursor-grab" ref={containerRef}>
                {data.movies.map((movie, index) => (
                    <Card size={"large"} key={index} img={movie.wideimg} name={movie.title} href={movie.href} />
                ))}
            </ScrollContainer>
            <SlideButton
                direction="left"
                onClick={handleScrollLeft}
             
            />
            <SlideButton
                direction="right"
                onClick={handleScrollRight}
            /></div>
            
        </div >
    );
}