import VideoCard from "./VideoCard";

export default function PortfolioCategory({
  title,
  subtitle,
  videos,
}) {
  return (
    <div className="mb-24">
      <div className="mb-10">
        <div className="flex justify-between gap-4 align-center items-center">
          <h3 className="text-3xl font-bold">
            {title}
          </h3>
          <a href="#" className="text-blue-500 hover:text-blue-400">
            Ver todos →
          </a>
        </div>


        <p className="text-zinc-400 mt-2">
          {subtitle}
        </p>

      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {videos.map((video, index) => (
          <VideoCard
            key={index}
            {...video}
          />
        ))}

      </div>

    </div>
  );
}