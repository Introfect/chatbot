import SeedToScaleLogo from "../svg/SeedToScaleLogo";

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 z-10 bg-primary/95  py-4">
      <div className="max-w-4xl mx-auto px-4">
        <span className="flex items-center gap-2">
          <SeedToScaleLogo className="w-36" />
        </span>
      </div>
    </div>
  );
}
