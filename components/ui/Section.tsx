import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'gradient';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'white',
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-secondary-50',
    gradient: 'bg-gradient-to-br from-primary-50 via-white to-secondary-50',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
};
