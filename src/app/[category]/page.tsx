import politicsData from "../../../public/data/politics.json";
import businessData from "../../../public/data/business.json";
import technologyData from "../../../public/data/technology.json";
import sportsData from "../../../public/data/sports.json";
import scienceData from "../../../public/data/science.json";
import healthData from "../../../public/data/health.json";
import entertainmentData from "../../../public/data/entertainment.json";
import educationData from "../../../public/data/education.json";
import lifestyleData from "../../../public/data/lifestyle.json";
import NewsArticleCard from "../components/NewsArticleCard";
import Image from "next/image";
import HorizontalNewsCard from "../components/HorizontalNewsCard";
import NewsCard2 from "../components/NewsCard2";
import SectionHeading from "../components/SectionHeading";

type Article = {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date?: string;
};

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

// Generate static parameters for all categories
export async function generateStaticParams() {
  return [
    { category: "politics" },
    { category: "business" },
    { category: "technology" },
    { category: "sports" },
    { category: "science" },
    { category: "health" },
    { category: "entertainment" },
    { category: "education" },
    { category: "lifestyle" },
  ];
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  console.log("categorySlug:", category);

  let filteredArticles: Article[] = [];

  switch (category) {
    case "technology":
      filteredArticles = technologyData;
      break;
    case "sports":
      filteredArticles = sportsData;
      break;
    case "business":
      filteredArticles = businessData;
      break;
    case "health":
      filteredArticles = healthData;
      break;
    case "science":
      filteredArticles = scienceData;
      break;
    case "politics":
      filteredArticles = politicsData;
      break;
    case "entertainment":
      filteredArticles = entertainmentData;
      break;
    case "education":
      filteredArticles = educationData;
      break;
    case "lifestyle":
      filteredArticles = lifestyleData;
      break;
    default:
      break;
  }

  if (!filteredArticles.length) {
    return (
      <div className="p-4">No articles found for category: {category}</div>
    );
  }

  return (
    <div className="border-bottom">
    <div className="container my-4 width100">
      <div className="row">
        <div className="col text-center">
          <h1 className="category-title text-decoration-underline">
            {category}
          </h1>
        </div>
      </div>

      <div className="row">
        {/* Main Content (8 columns) */}
        <div className="col-lg-8">
          <div className="main-content">
            <NewsArticleCard
              title={filteredArticles[26]?.title}
              subtitle={filteredArticles[26]?.shortdescription}
              imageSrc={filteredArticles[26]?.image}
              category={filteredArticles[26]?.category}
              slug={filteredArticles[26]?.slug}
              imageAlt={filteredArticles[26]?.title}
            />

            {/* Add as many HorizontalNewsCards as you want here */}
            {filteredArticles.slice(0, 10).map((article, index) => (
              <div className="mb-4" key={index}>
                <HorizontalNewsCard
                  title={article.title}
                  subtitle={article.shortdescription}
                  imageSrc={article.image}
                  imageAlt={article.title}
                  category={article.category}
                  slug={article.slug}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sticky Ad Sidebar (4 columns) */}
        <div className="col-lg-4">
          <div className="sidebar-container">
            <div className="sticky-ad-wrapper">
              <Image
                src="/ad/ad-1.png"
                alt="Advertisement"
                width={400}
                height={600}
                className="img-fluid sticky-ad-image"
                priority
              />
            </div>
            <div className="sticky-ad-wrapper">
              <Image
                src="/ad/ad-1.png"
                alt="Advertisement"
                width={400}
                height={600}
                className="img-fluid sticky-ad-image"
                priority
              />
            </div>
            <div className="sticky-ad-wrapper">
              <Image
                src="/ad/ad-1.png"
                alt="Advertisement"
                width={400}
                height={600}
                className="img-fluid sticky-ad-image"
                priority
              />
            </div>
            <div className="sticky-ad-wrapper">
              <Image
                src="/ad/ad-1.png"
                alt="Advertisement"
                width={400}
                height={600}
                className="img-fluid sticky-ad-image"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-3">
        <SectionHeading heading="Latest News" />
        <div className="row">
          <div className="col-lg-6">
            <NewsArticleCard
              title={filteredArticles[11].title}
              subtitle={filteredArticles[11].shortdescription}
              imageSrc={filteredArticles[11].image}
              category={filteredArticles[11].category}
              slug={filteredArticles[11].slug}
              imageAlt={filteredArticles[11].title}
            />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={filteredArticles[12].title}
                  subtitle={filteredArticles[12].shortdescription}
                  imageSrc={filteredArticles[12].image}
                  category={filteredArticles[12].category}
                  slug={filteredArticles[12].slug}
                  imageAlt={filteredArticles[12].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={filteredArticles[13].title}
                  subtitle={filteredArticles[13].shortdescription}
                  imageSrc={filteredArticles[13].image}
                  category={filteredArticles[13].category}
                  slug={filteredArticles[13].slug}
                  imageAlt={filteredArticles[13].title}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={filteredArticles[14].title}
                  subtitle={filteredArticles[14].shortdescription}
                  imageSrc={filteredArticles[14].image}
                  category={filteredArticles[14].category}
                  slug={filteredArticles[14].slug}
                  imageAlt={filteredArticles[14].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={filteredArticles[15].title}
                  subtitle={filteredArticles[15].shortdescription}
                  imageSrc={filteredArticles[15].image}
                  category={filteredArticles[15].category}
                  slug={filteredArticles[15].slug}
                  imageAlt={filteredArticles[15].title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
                        <div className="py-3">
       
        <div className="row">
          <div className="col-lg-6">
            <NewsArticleCard
              title={filteredArticles[26].title}
              subtitle={filteredArticles[26].shortdescription}
              imageSrc={filteredArticles[26].image}
              category={filteredArticles[26].category}
              slug={filteredArticles[26].slug}
              imageAlt={filteredArticles[26].title}
            />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={filteredArticles[27].title}
                  subtitle={filteredArticles[27].shortdescription}
                  imageSrc={filteredArticles[27].image}
                  category={filteredArticles[27].category}
                  slug={filteredArticles[27].slug}
                  imageAlt={filteredArticles[27].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={filteredArticles[28].title}
                  subtitle={filteredArticles[28].shortdescription}
                  imageSrc={filteredArticles[28].image}
                  category={filteredArticles[28].category}
                  slug={filteredArticles[28].slug}
                  imageAlt={filteredArticles[28].title}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={filteredArticles[29].title}
                  subtitle={filteredArticles[29].shortdescription}
                  imageSrc={filteredArticles[29].image}
                  category={filteredArticles[29].category}
                  slug={filteredArticles[29].slug}
                  imageAlt={filteredArticles[29].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={filteredArticles[30].title}
                  subtitle={filteredArticles[30].shortdescription}
                  imageSrc={filteredArticles[30].image}
                  category={filteredArticles[30].category}
                  slug={filteredArticles[30].slug}
                  imageAlt={filteredArticles[30].title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

            <div className="py-3">
        <SectionHeading heading="Most Viewed" />
        <div className="row">
          <div className="col-lg-6">
            <NewsArticleCard
              title={filteredArticles[16].title}
              subtitle={filteredArticles[16].shortdescription}
              imageSrc={filteredArticles[16].image}
              category={filteredArticles[16].category}
              slug={filteredArticles[16].slug}
              imageAlt={filteredArticles[16].title}
            />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={filteredArticles[17].title}
                  subtitle={filteredArticles[17].shortdescription}
                  imageSrc={filteredArticles[17].image}
                  category={filteredArticles[17].category}
                  slug={filteredArticles[17].slug}
                  imageAlt={filteredArticles[17].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={filteredArticles[18].title}
                  subtitle={filteredArticles[18].shortdescription}
                  imageSrc={filteredArticles[18].image}
                  category={filteredArticles[18].category}
                  slug={filteredArticles[18].slug}
                  imageAlt={filteredArticles[18].title}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={filteredArticles[19].title}
                  subtitle={filteredArticles[19].shortdescription}
                  imageSrc={filteredArticles[19].image}
                  category={filteredArticles[19].category}
                  slug={filteredArticles[19].slug}
                  imageAlt={filteredArticles[19].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={filteredArticles[20].title}
                  subtitle={filteredArticles[20].shortdescription}
                  imageSrc={filteredArticles[20].image}
                  category={filteredArticles[20].category}
                  slug={filteredArticles[20].slug}
                  imageAlt={filteredArticles[20].title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

                  <div className="py-3">
       
        <div className="row">
          <div className="col-lg-6">
            <NewsArticleCard
              title={filteredArticles[21].title}
              subtitle={filteredArticles[21].shortdescription}
              imageSrc={filteredArticles[21].image}
              category={filteredArticles[21].category}
              slug={filteredArticles[21].slug}
              imageAlt={filteredArticles[21].title}
            />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={filteredArticles[22].title}
                  subtitle={filteredArticles[22].shortdescription}
                  imageSrc={filteredArticles[22].image}
                  category={filteredArticles[22].category}
                  slug={filteredArticles[22].slug}
                  imageAlt={filteredArticles[22].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={filteredArticles[23].title}
                  subtitle={filteredArticles[23].shortdescription}
                  imageSrc={filteredArticles[23].image}
                  category={filteredArticles[23].category}
                  slug={filteredArticles[23].slug}
                  imageAlt={filteredArticles[23].title}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={filteredArticles[24].title}
                  subtitle={filteredArticles[24].shortdescription}
                  imageSrc={filteredArticles[24].image}
                  category={filteredArticles[24].category}
                  slug={filteredArticles[24].slug}
                  imageAlt={filteredArticles[24].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={filteredArticles[25].title}
                  subtitle={filteredArticles[25].shortdescription}
                  imageSrc={filteredArticles[25].image}
                  category={filteredArticles[25].category}
                  slug={filteredArticles[25].slug}
                  imageAlt={filteredArticles[25].title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}
