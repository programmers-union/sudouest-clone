import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  slug: string;
  shortdescription: string;
  description: string;
  author?: string;
  readTime?: string;
}

export default function DetailComponent({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  category,
  slug,
  shortdescription,
  description,
  author = "Staff Writer",
  readTime = "5 min read"
}: Props) {
  const publishDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const titleStyle = {
    fontFamily: "Times New Roman, serif",
    color: "#000",
    borderBottom: "2px solid #000",
    paddingBottom: "10px"
  };

  const subtitleStyle = {
    fontFamily: "Times New Roman, serif",
    fontStyle: "italic"
  };

  const leadParaStyle = {
    fontSize: "1.25rem",
    fontFamily: "Times New Roman, serif",
    borderLeft: "3px solid #000",
    paddingLeft: "15px"
  };

  const articleBodyStyle = {
    fontFamily: "Times New Roman, serif",
    fontSize: "1.1rem",
    color: "#333",
    textAlign: "justify" as const
  };

  return (
    <div className="bg-white">
      {/* Simple header line */}
      <div className="bg-dark" style={{ height: "2px" }}></div>

      {/* Header with breadcrumb */}
      <div className="border-bottom bg-light py-3">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 small">
              <li className="breadcrumb-item">
                <a href="/" className="text-decoration-none text-dark">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href={`/category/${category.toLowerCase()}`} className="text-decoration-none text-dark">
                  {category}
                </a>
              </li>
              <li className="breadcrumb-item active text-muted" aria-current="page">Article</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center">
          {/* Main Content */}
          <div className="col-lg-8 col-xl-7">
            <article>
              {/* Category Badge */}
              <div className="mb-4">
                <span className="badge bg-primary text-uppercase fw-bold px-3 py-2 rounded-0">
                  {category}
                </span>
              </div>

              {/* Title */}
              <header className="mb-5">
                <h1 className="display-4 fw-bold lh-1 mb-4" style={titleStyle}>
                  {title}
                </h1>

                {subtitle && (
                  <h2 className="h3 text-dark fw-semibold mb-4 lh-base" style={subtitleStyle}>
                    {subtitle}
                  </h2>
                )}

                {/* Article Meta */}
                <div className="d-flex flex-wrap align-items-center gap-3 pb-3 mb-4 border-bottom">
                  <div className="d-flex align-items-center">
                    <div className="bg-secondary rounded-circle me-2" style={{ width: "32px", height: "32px" }}></div>
                    <div>
                      <div className="fw-semibold small">By {author}</div>
                    </div>
                  </div>
                  <div className="small text-muted">
                    <i className="bi bi-clock me-1"></i>
                    Published {publishDate}
                  </div>
                  <div className="small text-muted">
                    <i className="bi bi-book me-1"></i>
                    {readTime}
                  </div>
                </div>

                {/* Social Share */}
                <div className="d-flex gap-2 mb-4">
                  <button className="btn btn-outline-primary btn-sm">
                    <i className="bi bi-facebook me-1"></i>
                    Share
                  </button>
                  <button className="btn btn-outline-info btn-sm">
                    <i className="bi bi-twitter me-1"></i>
                    Tweet
                  </button>
                  <button className="btn btn-outline-success btn-sm">
                    <i className="bi bi-whatsapp me-1"></i>
                    WhatsApp
                  </button>
                  <button className="btn btn-outline-secondary btn-sm">
                    <i className="bi bi-envelope me-1"></i>
                    Email
                  </button>
                </div>
              </header>

              {/* Featured Image */}
              <figure className="mb-5">
                <div className="position-relative">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="img-fluid w-100 shadow"
                    width={800}
                    height={500}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <figcaption className="text-muted small mt-2 fst-italic">
                  {imageAlt}
                </figcaption>
              </figure>

              {/* Article Content */}
              <div className="article-content">
                {/* Lead paragraph */}
                <p className="lead fw-normal mb-4 lh-base" style={leadParaStyle}>
                  {shortdescription}
                </p>

                {/* Main content with split sentences */}
                <div className="article-body lh-lg" style={articleBodyStyle}>
                  {description
                    .split(". ")
                    .filter((sentence) => sentence.trim() !== "")
                    .map((sentence, index) => (
                      <p key={index}>
                        {sentence.trim().endsWith('.') ? sentence.trim() : sentence.trim() + '.'}
                      </p>
                    ))}
                </div>
              </div>

              {/* Article Footer */}
              <footer className="mt-5 pt-4 border-top">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <div className="d-flex gap-2">
                    <span className="badge bg-light text-dark border">Breaking News</span>
                    <span className="badge bg-light text-dark border">Politics</span>
                    <span className="badge bg-light text-dark border">Local</span>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-danger btn-sm">
                      <i className="bi bi-heart me-1"></i>
                      Like
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                      <i className="bi bi-bookmark me-1"></i>
                      Save
                    </button>
                  </div>
                </div>
              </footer>
            </article>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4 col-xl-3 ms-xl-4">
            <div className="sidebar-container">
              <div className="mb-4">
                <h5 className="fw-bold mb-3 border-bottom pb-2">Advertisement</h5>
                <div className="sticky-ad-wrapper">
                  <Image
                    src="/ad/ad-1.png"
                    alt="Advertisement"
                    width={400}
                    height={600}
                    className="img-fluid"
                    priority
                  />
                </div>
              </div>

              {[2, 3, 4].map((adNum) => (
                <div key={adNum} className="mb-4">
                  <div className="sticky-ad-wrapper">
                    <Image
                      src="/ad/ad-1.png"
                      alt={`Advertisement ${adNum}`}
                      width={400}
                      height={600}
                      className="img-fluid"
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
