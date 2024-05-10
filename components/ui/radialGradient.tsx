import {cn} from '@/lib/utils';

export function RadialGradientSVG ({
     className
    }: {
        className?:string;
}) {
  return (
    <svg
      className={cn(className, "absolute bottom-0 -left-23 md:left-0 transform translate-y-1/3 md:translate-y-1/2 z-0")}
      width="100%"
      viewBox="0 0 2309 1526"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_15_859)">
        <ellipse
          cx="1154.64"
          cy="762.765"
          rx="828.545"
          ry="436.965"
          fill="#7C30DD"
          fillOpacity="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_15_859"
          x="0.708618"
          y="0.411987"
          width="2307.87"
          height="1524.71"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="162.694" result="effect1_foregroundBlur_15_859" />
        </filter>
      </defs>
    </svg>
  );
};


