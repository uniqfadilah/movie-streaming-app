import { InputHTMLAttributes } from 'react';

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type="text"
      placeholder="Username"
      className="w-full bg-stone-900 rounded text-white p-4"
      {...props}
    />
  );
};

export default Input;
