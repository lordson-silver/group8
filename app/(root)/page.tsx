import { Button } from "@/components/ui/moving-border";
import { RadialGradientSVG } from "@/components/ui/radialGradient";
import { StarSVG } from "@/components/ui/star";

// --------- componenet ---------
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className="h-full w-full bg-black bg-grid-white  relative flex flex-col items-center justify-center overflow-hidden">
      <Nav className=""/>
      <div className="max-w-md md:max-w-[530px] w-full flex flex-col gap-5 items-center text-center justify-center">
        <div className="flex items-center p-1 px-2 rounded-2xl border-2 border-gradient">
          <StarSVG className="mr-2" />
          <p className="text-sm text-white">Student Mentorship Matching Platform</p>
          <StarSVG className="ml-2" />
        </div>

        <p className="text-4xl md:text-6xl bg-gradient text-white ">Empowering Students through Mentorship</p>
        <p className="text-white text-sm">Connect with experienced mentors in your field, gain valuable insights, and explore exciting opportunities.</p>
          <Button
            borderRadius=".75rem"
            className="bg-primary text-md text-white"
          >
            Join Now
          </Button>



          <RadialGradientSVG className="w-[150%] md:w-full" />
      </div>
    </div>
  );
}

