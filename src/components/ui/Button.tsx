import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'social';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'flex items-center justify-center gap-3 px-4 py-3 rounded-lg transition-colors';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    social: 'border border-gray-300 hover:bg-gray-50'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}