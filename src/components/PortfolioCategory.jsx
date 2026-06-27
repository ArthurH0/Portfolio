import VideoCard from "./VideoCard";

export default function PortfolioCategory({
  title,
  subtitle,
  videos,
}) {
  return (
    <div className="mb-24">

      <div className="mb-10">

        <h3 className="text-3xl font-bold">
          {title}
        </h3>

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