export default function Trailer({ data }) {
  const { movie } = data;
  return (
    <div className="w-full h-full mt-20">
      <iframe
        style={{
          width: "100vw",
          height: "90vh",
          position: "static", // Ensures the iframe is positioned relative to the viewport
          top: 0,
          left: 0,
          border: "none", // Removes the border
        }}
        src={`${movie.video}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
