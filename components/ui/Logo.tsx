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
    sm: { container: 'w-36', icon: 48, text: 'text-[9px]' },
    md: { container: 'w-44', icon: 56, text: 'text-[10px]' },
    lg: { container: 'w-52', icon: 64, text: 'text-xs' },
  };

  const goldColor = '#D4AF37';
  const whiteColor = '#FFFFFF';
  const isDark = variant === 'dark';
  const logoColor = isDark ? goldColor : whiteColor;

  const currentSize = sizes[size];

  return (
    <div className={`${currentSize.container} flex flex-col items-center gap-1.5`}>
      {/* Logo Icon - Caballo con llama estilizada */}
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Forma de llama envolvente */}
        <path
          d="M100 15 Q120 20 135 40 Q145 60 145 85 Q145 110 135 130 Q125 145 110 155 Q100 160 100 175 Q100 160 90 155 Q75 145 65 130 Q55 110 55 85 Q55 60 65 40 Q80 20 100 15 Z"
          fill={logoColor}
          opacity="0.2"
        />
        
        {/* Llama exterior derecha */}
        <path
          d="M120 30 Q135 40 142 60 Q145 75 143 90 L140 95"
          stroke={logoColor}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
        
        {/* Llama exterior izquierda */}
        <path
          d="M80 30 Q65 40 58 60 Q55 75 57 90 L60 95"
          stroke={logoColor}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Caballo - Cabeza */}
        <ellipse
          cx="100"
          cy="75"
          rx="12"
          ry="15"
          fill={logoColor}
        />
        
        {/* Hocico */}
        <path
          d="M100 85 Q105 88 106 92 Q105 95 100 94 Q95 95 94 92 Q95 88 100 85"
          fill={logoColor}
        />
        
        {/* Ojo */}
        <circle
          cx="106"
          cy="72"
          r="2"
          fill={isDark ? '#0f172a' : '#D4AF37'}
        />
        
        {/* Orejas */}
        <path
          d="M95 63 L93 57 L97 62 Z"
          fill={logoColor}
        />
        <path
          d="M105 63 L107 57 L103 62 Z"
          fill={logoColor}
        />

        {/* Melena fluida - múltiples curvas */}
        <path
          d="M90 68 Q85 65 82 70 Q80 75 85 78"
          stroke={logoColor}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M88 72 Q83 72 80 78 Q78 82 82 85"
          stroke={logoColor}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M87 76 Q82 78 80 85 Q79 90 83 92"
          stroke={logoColor}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Cuello */}
        <path
          d="M100 88 Q98 95 97 105"
          stroke={logoColor}
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Pecho */}
        <ellipse
          cx="97"
          cy="115"
          rx="10"
          ry="13"
          fill={logoColor}
        />

        {/* Patas delanteras */}
        <rect
          x="93"
          y="125"
          width="4"
          height="30"
          rx="2"
          fill={logoColor}
        />
        <rect
          x="101"
          y="125"
          width="4"
          height="30"
          rx="2"
          fill={logoColor}
        />

        {/* Cuerpo posterior */}
        <ellipse
          cx="105"
          cy="120"
          rx="12"
          ry="16"
          fill={logoColor}
          opacity="0.9"
        />

        {/* Patas traseras */}
        <rect
          x="108"
          y="130"
          width="4"
          height="25"
          rx="2"
          fill={logoColor}
        />
        <rect
          x="116"
          y="130"
          width="4"
          height="25"
          rx="2"
          fill={logoColor}
        />

        {/* Cola fluida */}
        <path
          d="M115 115 Q125 110 130 115 Q133 120 128 125"
          stroke={logoColor}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Texto del logo */}
      {showText && (
        <div className="flex flex-col items-center -mt-1">
          <span 
            className={`font-bold tracking-[0.25em] ${currentSize.text} leading-tight`}
            style={{ color: logoColor }}
          >
            SHERFAND TRADE SL
          </span>
        </div>
      )}
    </div>
  );
};
