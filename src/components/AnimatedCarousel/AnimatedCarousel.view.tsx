import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarouselItem } from '../../definitions/types';
import * as Styled from './AnimatedCarousel.styled';

type CarouselProps = {
    items: CarouselItem[];
};

export const AnimatedCarouselView = ({ items }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getId = (indx: number) => `carousel-item-${indx}`;

    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight') {
                setCurrentIndex((prevIndex) => prevIndex < items.length ? (prevIndex + 1) % items.length : 0);
            } else if (event.key === 'ArrowLeft') {
                setCurrentIndex((prevIndex) => prevIndex === 0 ? 0 : (prevIndex - 1 + items.length) % items.length);
            } else if (event.key === 'Enter') {
                navigate(items[currentIndex].link);
            }
        }; document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentIndex, navigate, items]);

    useEffect(() => {
        // Remove focus from Nav button items on component load
        document.getElementById(getId(currentIndex))?.focus();
    }, [currentIndex]);

    return (
        <Styled.Container>
            <Styled.Track translateX={currentIndex}>
                {items.map((item, index) => (
                    <Styled.Item key={index} id={getId(item.id)} to={item.link} isSelected={currentIndex === index}>
                        <img loading="lazy" src={item.imageUrl} alt={item.title} />
                    </Styled.Item>
                ))}
            </Styled.Track>
        </Styled.Container>
    );
};

