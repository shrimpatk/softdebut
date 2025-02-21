interface DateInfo {
  day: number;
  month: string;
  year: number;
}

export interface BlogPostProps {
  date: DateInfo;
  image: string;
  title: string;
}

export default function BlogPost({ date, image, title }: BlogPostProps) {
  return (
    <div className="border-r border-gray-200 last:border-r-0">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-0 left-0 bg-black bg-opacity-70 text-white p-2">
          <div className="text-center">
            <div className="text-2xl font-bold">{date.day}</div>
            <div>{date.month}</div>
            <div>{date.year}</div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-sm font-normal">{title}</h2>
      </div>
    </div>
  );
}
