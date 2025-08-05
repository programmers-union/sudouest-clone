import Image from 'next/image'

interface NewsArticleCardProps{
imageSrc: string;
  title: string;
  subtitle?: string;
  imageAlt: string;
  category: string;
  slug: string;
}

const NewsArticleCard: React.FC<NewsArticleCardProps> = ({
  imageSrc,
  title,
  subtitle,
  imageAlt,
  category,
  slug,

}) => {
  return (
    <div className="card border-0 rounded shadow-sm overflow-hidden mb-4">
      {/* Image */}
      <Image
        src={imageSrc}
        alt="Article Image"
        width={800}
        height={500}
        className="img-fluid w-100"
        style={{ objectFit: 'cover', maxHeight: '400px' }}
      />

      {/* Content */}
      <div className="card-body">
        {/* Meta row */}
        <div className="d-flex justify-content-between text-muted small mb-2">
          <span>Bertrand Cantat</span>
          <span>01 août 2025</span>
        </div>

        {/* Title */}
        <h5 className="card-title fw-bold mb-3">
         {title}
        </h5>

        {/* Excerpt */}
        <p className="card-text text-muted mb-0" style={{ whiteSpace: 'pre-line' }}>
          {subtitle}
        </p>
      </div>
    </div>
  )
}


export default NewsArticleCard;