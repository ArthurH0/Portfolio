export default function VideoCard({
  thumbnail,
  title,
}) {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-2xl
      bg-zinc-900
      cursor-pointer
      "
    >

      <div className="overflow-hidden">

        <img
          src={thumbnail}
          alt={title}
          className="
            aspect-video
            w-full
            object-cover
            duration-500
            group-hover:scale-110
          "
        />

      </div>

      <div className="p-5">

        <h4 className="font-semibold text-lg">
          {title}
        </h4>

      </div>

    </div>
  );
}