import { FunctionComponent, ElementType } from 'react';
import * as Styled from './ImageItem.styled';

type ImageItemProps = {
    id: string;
    to?: string;
    onItemClick?: () => void;
    isSelected?: boolean;
    altText: string;
    imgSrc: string;
}

type IImageItem = FunctionComponent<ImageItemProps> & {
    LoadingItem: ElementType;
  };

export const ImageItemView: IImageItem = ({ id, to, isSelected = false, altText, imgSrc, onItemClick = () => { } }) => {
    if (to) {
        return (
            <Styled.LinkItem id={id} to={to} onClick={onItemClick} isSelected={isSelected}>
                <img loading="lazy" src={imgSrc} alt={altText} />
            </Styled.LinkItem>
        )
    }
    return (
        <Styled.Item id={id} onClick={onItemClick}>
            <img loading="lazy" src={imgSrc} alt={altText} />
        </Styled.Item>
    )
};

ImageItemView.LoadingItem = Styled.LoadingItem;


