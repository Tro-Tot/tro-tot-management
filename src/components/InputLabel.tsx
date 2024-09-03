import { FC, ReactNode } from 'react';

interface InputLabelProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}

const InputLabel: FC<InputLabelProps> = ({
  label,
  htmlFor,
  required = false,
  children,
}) => {
  return (
    <div className="space-y-2 mb-5">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  );
};

export default InputLabel;
