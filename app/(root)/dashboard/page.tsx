// import { Button } from "@/components/ui/moving-border";

// -------- Giants Components ---------
import { RadialGradientSVG } from "@/components/ui/radialGradient";
// import { StarSVG, ArrowSVG } from "@/components/ui/importSVG";

// --------- Website Componenet ---------
import { Nav } from "@/components/nav";

// -------- NextJS Imports ---------
// import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="container bg-black bg-grid-white ">
      <Nav />
      <div className="sm:max-w-md md:max-w-[530px] w-full flex flex-col gap-5 items-center text-center justify-center">
       
        <div className="flex flex-col">
            <h1 className="text_gradient text-[80px] leading-none">Search for Mentors</h1>
            <p className="text-accent text-sm">Enter the name of a mentor you want to search for</p>
        </div>
       


        <RadialGradientSVG className="w-[150%] md:w-full -left-23 md:left-0" />
      </div>
    </div>
  );
}

