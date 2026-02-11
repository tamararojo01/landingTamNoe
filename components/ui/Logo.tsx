import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  size = 'md',
  showText = true 
}) => {
  const sizes = {
    sm: { container: 'w-32', icon: 32, text: 'text-[10px]' },
    md: { container: 'w-40', icon: 40, text: 'text-xs' },
    lg: { container: 'w-48', icon: 48, text: 'text-sm' },
  };

  const colors = {
    light: {
      primary: '#D4AF37', // Dorado elegante
      secondary: '#B8941F',
      text: '#0f172a',
    },
    dark: {
      primary: '#FFFFFF',
      secondary: '#E5E7EB',
      text: '#FFFFFF',
    },
  };

  const currentSize = sizes[size];
  const currentColors = colors[variant];

  return (
    <div className={`${currentSize.container} flex flex-col items-center gap-2`}>
      {/* Logo Icon - Caballo estilizado en escudo */}
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Escudo moderno */}
        <path
          d="M50 5 L85 20 L85 50 Q85 75 50 95 Q15 75 15 50 L15 20 Z"
          fill="url(#shieldGradient)"
          stroke={currentColors.primary}
          strokeWidth="2"
        />
        
        {/* Caballo estilizado - silueta minimalista */}
        <g transform="translate(30, 25)">
          {/* Cabeza */}
          <path
            d="M20 8 Q22 5 25 6 L27 10 Q28 12 26 14 L24 16"
            stroke={variant === 'dark' ? '#0f172a' : '#FFFFFF'}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Cuello */}
          <path
            d="M24 16 Q22 20 20 24"
            stroke={variant === 'dark' ? '#0f172a' : '#FFFFFF'}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Cuerpo */}
          <path
            d="M20 24 L15 24 Q12 28 12 35 L12 45"
            stroke={variant === 'dark' ? '#0f172a' : '#FFFFFF'}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Patas delanteras */}
          <line
            x1="15"
            y1="28"
            x2="15"
            y2="45"
            stroke={variant === 'dark' ? '#0f172a' : '#FFFFFF'}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Espalda */}
          <path
            d="M20 24 L28 26 Q32 28 32 35 L32 45"
            stroke={variant === 'dark' ? '#0f172a' : '#FFFFFF'}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Patas traseras */}
          <line
            x1="28"
            y1="32"
            x2="28"
            y2="45"
            stroke={variant === 'dark' ? '#0f172a' : '#FFFFFF'}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Cola */}
          <path
            d="M32 30 Q35 28 38 32"
            stroke={variant === 'dark' ? '#0f172a' : '#FFFFFF'}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Gradiente para el escudo */}
        <defs>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={currentColors.primary} stopOpacity="0.15" />
            <stop offset="100%" stopColor={currentColors.secondary} stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>

      {/* Texto del logo */}
      {showText && (
        <div className="flex flex-col items-center">
          <span 
            className={`font-bold tracking-[0.2em] ${currentSize.text}`}
            style={{ color: currentColors.text }}
          >
            SHERFANDTRADE
          </span>
        </div>
      )}
    </div>
  );
};
