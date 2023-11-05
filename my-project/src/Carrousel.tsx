import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

interface CarouselProps{
    slides: string[];
}

const Carousel = ({slides}:CarouselProps) => {
    const timerRef = useRef<number|null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    const goToNext = useCallback(() => {
        setIsTransitioning(true);
        const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
    },[currentIndex,slides.length]);

    const goToPrevious = () => {
        setIsTransitioning(true);
        const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
    };

    const goToSlide = (slideIndex:number) => {
        setIsTransitioning(true);
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        //returns number for typescript
        timerRef.current = window.setTimeout(goToNext, 5000);

        const transitionTimeout = setTimeout(() => {
            setIsTransitioning(false);
        }, 700); 

        return () => {
            //ensure number for clear timeout
            if (timerRef.current !== null){
                clearTimeout(timerRef.current);
            }
            clearTimeout(transitionTimeout);
        };
    }, [currentIndex, goToNext]);

    return (
        <div className="h-full relative">
            <ChevronLeft
                className="absolute top-1/2 -translate-y-1/2 left-8 text-black z-10 cursor-pointer bg-white shadow rounded-full"
                size={40}
                onClick={goToPrevious}
            />
            <ChevronRight
                className="absolute top-1/2 -translate-y-1/2 right-8 text-black z-10 cursor-pointer bg-white shadow rounded-full"
                size={40}
                onClick={goToNext}
            />
            {/* FIX SO INITALLY ALL LOAD WITH OPACITY 0 EXCEPT FIRST, THEN TRANSITIONS */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={slide}
                        style={{
                            backgroundImage: `url(${slide})`,
                            opacity: index === currentIndex ? 1 : 0,
                            transition: isTransitioning ? 'opacity 0.7s ease-in-out' : 'none',
                        }}
                        className="absolute inset-0 bg-cover bg-center"
                    />
                ))}
            </div>
            <div className="flex justify-center items-center text-center absolute bottom-0 w-full p-4">
                {slides.map((_, slideIndex) => (
                    <div
                        className={`mx-1 cursor-pointer inline-block ${
                            currentIndex === slideIndex ? 'text-5xl' : 'text-3xl'
                        }`}
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        •
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

