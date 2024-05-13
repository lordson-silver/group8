import { Button } from "@/components/ui/moving-border";

// -------- Giants Components ---------
import { RadialGradientSVG } from "@/components/ui/radialGradient";
import { StarSVG, ArrowSVG } from "@/components/ui/importSVG";

// --------- Website Componenet ---------
import { Nav } from "@/components/nav";

// -------- NextJS Imports ---------
import Link from "next/link";

export default function Home() {
  return (
    <div className="container bg-black bg-grid-white ">
      <Nav />
      <div className="sm:max-w-md md:max-w-[530px] w-full flex flex-col gap-5 items-center text-center justify-center">
        <div className="flex items-center p-1 md:px-2 rounded-2xl border-2 border-primary">
          <StarSVG className="mr-1 xmd:mr-2" />
          <p className="text-xs md:text-sm text-white">
            Student Mentorship Matching Platform
          </p>
          <StarSVG className="ml-1 md:ml-2" />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl text_gradient">
          Empowering Students through Mentorship
        </h1>
        <p className="text-white text-sm mb-6">
          Connect with experienced mentors in your field, gain valuable insights, and explore exciting opportunities.
        </p>

        <Link href="/">
          <Button
            borderRadius=".75rem"
            className="bg-primary flex gap-2 text-md text-white z-10"
          >
            Join Now
            <ArrowSVG/>
          </Button>
        </Link>

        <RadialGradientSVG className="w-[150%] md:w-full -left-23 md:left-0" />
      </div>
    </div>
  );
}

