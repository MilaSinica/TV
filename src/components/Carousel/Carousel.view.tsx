import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Location } from 'react-router-dom';
import { CarouselItem } from '../../definitions/types';
import Item from '../ImageItem';
import * as Styled from './Carousel.styled';

type CarouselProps = {
    items: CarouselItem[];
    visibleItems?: number;
    isLoading: boolean;
    onSelectItem: (id: number) => void;
}

export const CarouselView = ({ items, isLoading, onSelectItem, visibleItems = 6 }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [_, setLocation] = useState<Location<any>>();
    const [visibleItemsList, setVisibleItemsList] = useState(() => items.slice(currentIndex, currentIndex + visibleItems));
    const totalItems = items.length;

    const currentLocation = useLocation();
    const navigate = useNavigate();

    // As we reuse same HomePage and carousel component for 3 scenes, we need to pragmatically scroll 
    // carousel back whenever location path change to emulate page rerendering for UX
    useEffect(() => {
        setLocation((prevLocation) => {
            if (prevLocation !== currentLocation) {
                setCurrentIndex(0);
            }
            return currentLocation;
        });
    }, [currentLocation]);

    const getId = (indx: number) => `carousel-item-${indx}`;

    useEffect(() => {
        setVisibleItemsList(items.slice(currentIndex, currentIndex + visibleItems));
    }, [visibleItems, currentIndex, items]);

    const handleSelectItem = (itemId: number) => {
        onSelectItem(itemId);
        navigate(items[itemId].link);
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight') {
                setCurrentIndex((prevIndex) => prevIndex < items.length ? (prevIndex + 1) % items.length : 0);
            } else if (event.key === 'ArrowLeft') {
                setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
            } else if (event.key === 'Enter') {
                handleSelectItem(currentIndex);
            }
        }; document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentIndex, visibleItems, totalItems, items, navigate]);

    useEffect(() => {
        // Remove focus from Nav button items on component load
        document.getElementById(getId(currentIndex))?.focus();
    }, [currentIndex]);

    return (
        <Styled.Container>
            <Styled.Track>
                {isLoading ? Array.from(Array(visibleItems).keys()).map((item) => (
                    <Item.LoadingItem key={item} />
                )) : visibleItemsList.map((item) => (
                    <Item key={item.id} id={getId(item.id)} imgSrc={item.imageUrl} altText={item.title} to={item.link} onItemClick={() => onSelectItem(item.id)} isSelected={item.id === currentIndex} />
                ))}
            </Styled.Track>
        </Styled.Container>
    );
};


