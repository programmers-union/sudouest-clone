// components/NewsCard.js
import Image from 'next/image'



interface NewsCardaSectionProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  imageAlt: string;
  category: string;
  slug: string;

  
}


const NewsCard: React.FC<NewsCardaSectionProps> = ({
  imageSrc,
  title,
  subtitle,
  imageAlt,
  category,
  slug,

}) => {
  return (
    <div className="container my-4">
      <div className="position-relative rounded overflow-hidden">
        <Image
          src={imageSrc}
          alt="Trump Tariff News"
          width={600}
          height={200}
          className="img-fluid w-100 rounded newscard-img"
        />

        {/* Overlay */}
        <div className="overlayText position-absolute text-white">
          <h2 className="fw-bold mb-2">
         {title}
          </h2>
          <small className="d-block mt-2">Il y a 29 minutes</small>
        </div>
      </div>
    </div>
  )
}


export default NewsCard;