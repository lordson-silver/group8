import { Button } from "@/components/ui/moving-border";
import { RadialGradientSVG } from "@/components/ui/radialGradient";

export default function Home() {
  return (
    <div className="h-full w-full bg-black bg-grid-white  relative flex items-center justify-center overflow-hidden">
        <Button
          borderRadius=".75rem"
          className="bg-primary text-md text-white"
        >
          Join Now
        </Button>



        <RadialGradientSVG className="w-full" />
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
