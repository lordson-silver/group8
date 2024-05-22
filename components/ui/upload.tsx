import React from 'react';

import { cn } from '@/lib/utils';
export interface IconProps extends React.SVGProps<SVGSVGElement> {}

const Upload = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn('', className)}
      width="18"
      height="15"
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.99977 5.50189V14.5019M8.99977 5.50189L11.9998 8.50189M8.99977 5.50189L5.99977 8.50189M14.4998 10.5019C16.0188 10.5019 16.9998 9.27089 16.9998 7.75189C16.9997 7.15051 16.8025 6.56573 16.4384 6.0871C16.0743 5.60848 15.5633 5.26241 14.9838 5.10189C14.8946 3.98035 14.4298 2.92166 13.6645 2.09699C12.8991 1.27231 11.878 0.729857 10.7663 0.557321C9.6545 0.384784 8.51703 0.592253 7.53776 1.14618C6.55849 1.70012 5.79467 2.56813 5.36977 3.60989C4.4752 3.36192 3.51875 3.47946 2.71085 3.93668C1.90294 4.39389 1.30975 5.15332 1.06177 6.04789C0.813794 6.94247 0.931342 7.89891 1.38856 8.70682C1.84577 9.51473 2.6052 10.1079 3.49977 10.3559"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
);

Upload.displayName = 'Upload';
export default Upload;
