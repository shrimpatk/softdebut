import sOneLogo from "../../assets/footer/SOne_index_logos.png";

export default function Footer() {
  return (
    <footer className="w-full py-2">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-2">
        <img src={sOneLogo} alt="S-ONE Logo" className="h-6 object-contain" />
        <p className="text-white text-sm flex-1 bg-black py-2 px-2 rounded-md">
          Copyright © 2025
        </p>
      </div>
    </footer>
  );
}
