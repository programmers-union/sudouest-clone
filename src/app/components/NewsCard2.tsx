// components/NewsCard.js
import Image from "next/image";
import sampleImg from "../public/sample.jpg"; 
import Link from "next/link";

interface NewsCard2SectionProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  imageAlt: string;
  category: string;
  slug: string;

  
}

const NewsCard2: React.FC<NewsCard2SectionProps> = ({
  imageSrc,
  title,
  subtitle,
  imageAlt,
  category,
  slug,

}) => {
  return (
     <Link href={`/${category.toLowerCase()}/${slug}`} className='text-decoration-none text-reset'>
<div className="overflow-hidden">
  <div className="position-relative">
    <Image
      src={imageSrc}
      alt="Madeleine"
      className="img-fluid w-100 rounded-3"  // Only round top corners
      style={{ objectFit: "cover", height: "200px" }}
      width={600}
      height={400}
    />
  </div>

  <div className="card-body p-3 bg-transparent rounded-bottom-3"> {/* Round bottom corners */}
    <div className="d-flex justify-content-between text-muted small mb-1">
      <span>Mont-de-marsan</span>
      <span>July 31, 2025</span>
    </div>
    <h6 className="card-title fw-bold mb-0">{title}</h6>
  </div>
</div>
</Link>
  );
}

export default NewsCard2;