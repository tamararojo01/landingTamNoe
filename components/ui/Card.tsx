import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  icon: Icon,
  title,
  description,
  iconColor = 'text-primary-600',
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${className}`}>
      {Icon && (
        <div className={`${iconColor} mb-4`}>
          <Icon size={48} strokeWidth={1.5} />
        </div>
      )}
      <h3 className="text-xl md:text-2xl font-bold text-secondary-900 mb-3">
        {title}
      </h3>
      <p className="text-secondary-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
