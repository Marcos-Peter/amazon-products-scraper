import React, { type ComponentProps } from 'react';

import { twMerge } from 'tailwind-merge';

interface InputRootProps extends ComponentProps<'div'> {
    error?: boolean;
}

export const InputRoot: React.FC<InputRootProps> = ({ error = false, className, ...props }) => {
    return (
        <div
            data-error={error}
            className={twMerge(
                'group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger',
                className,
            )}
            {...props}
        />
    );
};
