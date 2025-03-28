import React, { type ComponentProps } from 'react';

import { twMerge } from 'tailwind-merge';

type InputIconProps = ComponentProps<'span'>;

export const InputIcon: React.FC<InputIconProps> = ({ className, ...props }) => {
    return (
        <span
            className={twMerge(
                'text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger',
                className,
            )}
            {...props}
        />
    );
};
