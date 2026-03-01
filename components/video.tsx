export function Video({
  alt,
  height = 315,
  width = 560,
  ytId,
}: {
  alt: string
  height?: number
  width?: number
  ytId: string
}) {
  return (
    <div className="my-6 aspect-video w-full">
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full rounded-md"
        height={height}
        src={`https://www.youtube.com/embed/${ytId}`}
        title={alt}
        width={width}
      />
    </div>
  )
}
