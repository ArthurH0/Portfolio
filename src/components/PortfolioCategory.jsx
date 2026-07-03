import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

export default function PortfolioCategory({
  title,
  subtitle,
  videos,
  category,
  seeMore,
  empresaTitle
}) {
  return (
    <div className="mb-24 p-5">
      <div className="mb-10">
        <div className="flex justify-between items-center gap-4">
          <h3 className="text-3xl font-bold text-white">
            {title}
          </h3>
          {seeMore &&
            <Link
              to={`/portfolio/${category}`}
              className="text-orange-500 hover:text-orange-200 transition-colors duration-300 font-medium"
            >
              Ver mais →
            </Link>
          }
        </div>
        <p className="text-zinc-400">
          {subtitle}
        </p>
      </div>

      {empresaTitle &&
        <h2 className="text-2xl font-bold text-white my-5">{empresaTitle}</h2>
      }
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