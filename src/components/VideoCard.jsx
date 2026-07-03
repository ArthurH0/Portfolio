
function getYoutubeId(url) {
  const regex =
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([^?&/]+)/;

  return url.match(regex)?.[1];
}

export default function VideoCard({ title, videoUrl }) {
  const videoId = getYoutubeId(videoUrl);

  return (
    <div className="rounded-xl overflow-hidden bg-zinc-800">
      <div className="aspect-[9/16] rounded-xl overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allowFullScreen
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
}