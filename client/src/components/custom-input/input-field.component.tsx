import React, { type ComponentProps } from 'react';

import { twMerge } from 'tailwind-merge';

type InputFieldProps = ComponentProps<'input'>;

export const InputField: React.FC<InputFieldProps> = ({ className, ...props }) => {
    return <input className={twMerge('flex-1 outline-0 placeholder-gray-400', className)} {...props} />;
};
