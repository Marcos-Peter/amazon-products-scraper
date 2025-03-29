import React from 'react';

import { Star, StarHalf } from 'lucide-react';

const FILL_STAR_HEX_COLOR = '#e17100';

export const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
    const MAX_STARS = 5;

    const getStarType = (index: number): React.JSX.Element => {
        if (rating >= index + 1) return <RatingStar.Filled key={index} />;
        if (rating > index && rating < index + 1) return <RatingStar.HalfFilled key={index} />;
        return <RatingStar.Empty key={index} />;
    };

    return (
        <div className='flex flex-row text-amber-600 h-8'>
            {Array.from({ length: MAX_STARS }, (_, index) => {
                return getStarType(index);
            })}
        </div>
    );
};

const FilledStar: React.FC = () => {
    return <Star fill={FILL_STAR_HEX_COLOR} />;
};

const EmptyStar: React.FC = () => {
    return <Star />;
};

const HalfFilledStar: React.FC = () => {
    return (
        <div className='relative h-8 w-6'>
            <Star className='absolute top-0' />
            <StarHalf fill={FILL_STAR_HEX_COLOR} className='absolute top-0' />
        </div>
    );
};

export const RatingStar = {
    Empty: EmptyStar,
    Filled: FilledStar,
    HalfFilled: HalfFilledStar,
};
