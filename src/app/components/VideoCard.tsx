import Image from 'next/image'

interface VideoCardProps{
imageSrc: string;
  title: string;
  subtitle?: string;
  imageAlt: string;
  category: string;
  slug: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  imageSrc,
  title,
  subtitle,
  imageAlt,
  category,
  slug,

}) => {
  return (
    <div className="card border-0 rounded-4 overflow-hidden shadow-sm">
      {/* Image with dark overlay */}
      <div className="position-relative">
        <Image
          src={imageSrc} // ← Put your image here
          alt="Video thumbnail"
          width={400}
          height={600}
          className="img-fluid w-100 video-image"
        />
        {/* Overlay gradient */}
        <div className="position-absolute bottom-0 start-0 end-0 p-3 text-white" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
          <div className="small mb-1">
            <i className="bi bi-play-fill me-1"></i>0:21
          </div>
          <h6 className="fw-bold mb-0">
           {title}
          </h6>
        </div>
      </div>
    </div>
  )
}

export default VideoCard