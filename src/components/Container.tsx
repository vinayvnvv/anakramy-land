// components/Container.tsx
import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`max-w-screen-2xl bg-none  mx-auto px-4 bg-transparent sm:px-6 lg:px-8 ${className || ''}`}>
      {children}
    </div>
  );
};

export default Container;
