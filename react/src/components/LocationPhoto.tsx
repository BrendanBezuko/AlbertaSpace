type LocationPhotoProps = {
  src: string
  alt: string
  className?: string
}

export function LocationPhoto({
  src,
  alt,
  className = 'location-photo',
}: LocationPhotoProps) {
  return (
    <figure className={className}>
      <img
        src={`${import.meta.env.BASE_URL}${src}`}
        alt={alt}
        width={960}
        height={540}
        loading="lazy"
      />
    </figure>
  )
}
