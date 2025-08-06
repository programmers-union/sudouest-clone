// components/HorizontalNewsCard.tsx
import Image from "next/image";
import Link from "next/link";

interface Props {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  category:string;
  slug:string
}

export default function HorizontalNewsCard({ imageSrc, imageAlt, title, subtitle,category,slug }: Props) {
  return (
     <Link href={`/${category.toLowerCase()}/${slug}`} className='text-decoration-none text-reset'>
    <div className="row g-3">
      {/* Left Image */}
      <div className="col-12 col-md-5">
        <div className="ratio ratio-16x9">
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="col-12 col-md-7">
        <h6 className="fw-bold">{title}</h6>
        <p className="mb-0 small text-muted">{subtitle}</p>
      </div>
    </div>
    </Link>
  );
}
