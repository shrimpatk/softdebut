interface CategoryCardProps {
  defaultImg: string;
  hoverImg: string;
  alt: string;
}

export default function CategoryCard({
  defaultImg,
  hoverImg,
  alt,
}: CategoryCardProps) {
  return (
    <div className="group relative overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 w-[190px]">
      <div className="relative h-[50px]">
        <img
          src={defaultImg}
          alt={alt}
          className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src={hoverImg}
          alt={alt}
          className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
      </div>
    </div>
  );
}
