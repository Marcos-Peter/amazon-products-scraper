import React, { type ComponentProps } from 'react';

import { Spinner } from '@/components/button/loading-spinner.component';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ComponentProps<'button'> & {
    loading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ className, children, loading = false, ...props }) => {
    return (
        <button
            className={twMerge(
                'flex justify-center items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300',
                loading && 'cursor-not-allowed opacity-70',
                className,
            )}
            disabled={loading}
            {...props}
        >
            {loading ? <Spinner /> : children}
        </button>
    );
};
