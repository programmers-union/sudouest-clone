import Image from "next/image";
import styles from "./page.module.css";
import NewsCard from "./components/NewsCard";

import politicsData from "../../public/data/politics.json";
import businessData from "../../public/data/business.json";
import technologyData from "../../public/data/technology.json";
import sportsData from "../../public/data/sports.json";
import scienceData from "../../public/data/science.json";
import educationData from "../../public/data/education.json";
import healthData from "../../public/data/health.json";
import entertainmentData from "../../public/data/entertainment.json";
import lifestyleData from "../../public/data/lifestyle.json";
import RegionalNews from "./components/RegionalNews";
import NewsCard2 from "./components/NewsCard2";
import CategoryScroll from "./components/CategoryScroll";
import SectionHeading from "./components/SectionHeading";
import VideoCard from "./components/VideoCard";
import NewsArticleCard from "./components/NewsArticleCard";
import NumberedTextBlock from "./components/NumberedTextBlock";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <NewsCard
            title={businessData[1].title}
            subtitle={businessData[0].shortdescription}
            imageSrc={businessData[16].image}
            category={businessData[0].category}
            slug={businessData[0].slug}
            imageAlt={businessData[0].title}
          />
        </div>
        <div className="col-lg-4">
          <RegionalNews />
        </div>
      </div>

      <div className="row py-2">
        <div className="col-lg-3">
          <NewsCard2
            title={politicsData[0].title}
            subtitle={politicsData[0].shortdescription}
            imageSrc={politicsData[16].image}
            category={politicsData[0].category}
            slug={politicsData[0].slug}
            imageAlt={politicsData[0].title}
          />
        </div>
        <div className="col-lg-3">
          <NewsCard2
            title={politicsData[1].title}
            subtitle={politicsData[1].shortdescription}
            imageSrc={politicsData[1].image}
            category={politicsData[1].category}
            slug={politicsData[1].slug}
            imageAlt={politicsData[1].title}
          />
        </div>
        <div className="col-lg-3">
          <NewsCard2
            title={politicsData[2].title}
            subtitle={politicsData[2].shortdescription}
            imageSrc={politicsData[2].image}
            category={politicsData[2].category}
            slug={politicsData[2].slug}
            imageAlt={politicsData[2].title}
          />
        </div>
        <div className="col-lg-3">
          <NewsCard2
            title={businessData[3].title}
            subtitle={politicsData[3].shortdescription}
            imageSrc={politicsData[3].image}
            category={politicsData[3].category}
            slug={politicsData[3].slug}
            imageAlt={businessData[3].title}
          />
        </div>
      </div>
      <div className="row py-2">
        <div className="col-lg-3">
          <NewsCard2
            title={technologyData[0].title}
            subtitle={technologyData[0].shortdescription}
            imageSrc={technologyData[0].image}
            category={technologyData[0].category}
            slug={technologyData[0].slug}
            imageAlt={technologyData[0].title}
          />
        </div>
        <div className="col-lg-3">
          <NewsCard2
            title={technologyData[1].title}
            subtitle={technologyData[1].shortdescription}
            imageSrc={technologyData[1].image}
            category={technologyData[1].category}
            slug={technologyData[1].slug}
            imageAlt={technologyData[1].title}
          />
        </div>
        <div className="col-lg-3">
          <NewsCard2
            title={technologyData[2].title}
            subtitle={technologyData[2].shortdescription}
            imageSrc={technologyData[2].image}
            category={technologyData[2].category}
            slug={technologyData[2].slug}
            imageAlt={technologyData[2].title}
          />
        </div>
        <div className="col-lg-3">
          <NewsCard2
            title={technologyData[3].title}
            subtitle={technologyData[3].shortdescription}
            imageSrc={technologyData[3].image}
            category={technologyData[3].category}
            slug={technologyData[3].slug}
            imageAlt={technologyData[3].title}
          />
        </div>
      </div>
      <div className="row py-2">
        <div className="col-lg-3">
          <NewsCard2
            title={healthData[0].title}
            subtitle={healthData[0].shortdescription}
            imageSrc={healthData[0].image}
            category={healthData[0].category}
            slug={healthData[0].slug}
            imageAlt={healthData[0].title}
          />
        </div>
        <div className="col-lg-3">
          <NewsCard2
            title={healthData[1].title}
            subtitle={healthData[1].shortdescription}
            imageSrc={healthData[1].image}
            category={healthData[1].category}
            slug={healthData[1].slug}
            imageAlt={healthData[1].title}
          />
        </div>
        <div className="col-lg-3">
          <NewsCard2
            title={healthData[2].title}
            subtitle={healthData[2].shortdescription}
            imageSrc={healthData[2].image}
            category={healthData[2].category}
            slug={healthData[2].slug}
            imageAlt={healthData[2].title}
          />
        </div>
        <div className="col-lg-3">
          <NewsCard2
            title={healthData[3].title}
            subtitle={healthData[3].shortdescription}
            imageSrc={healthData[3].image}
            category={healthData[3].category}
            slug={healthData[3].slug}
            imageAlt={healthData[3].title}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center col-lg">
        <a href="#" className="btn custom-btn-outline-red">
          More news
        </a>
      </div>
      <div className="py-3">
        <CategoryScroll />
      </div>

      <div className="py-5">
        <SectionHeading heading="Our Latest Entertainment News" />
        <div className="row">
          <div className="col-lg-3">
            <VideoCard
              title={entertainmentData[0].title}
              subtitle={entertainmentData[0].shortdescription}
              imageSrc={entertainmentData[0].image}
              category={entertainmentData[0].category}
              slug={entertainmentData[0].slug}
              imageAlt={entertainmentData[0].title}
            />
          </div>
          <div className="col-lg-3">
            <VideoCard
              title={entertainmentData[1].title}
              subtitle={entertainmentData[1].shortdescription}
              imageSrc={entertainmentData[1].image}
              category={entertainmentData[1].category}
              slug={entertainmentData[1].slug}
              imageAlt={entertainmentData[1].title}
            />
          </div>
          <div className="col-lg-3">
            <VideoCard
              title={entertainmentData[2].title}
              subtitle={entertainmentData[2].shortdescription}
              imageSrc={entertainmentData[2].image}
              category={entertainmentData[2].category}
              slug={entertainmentData[2].slug}
              imageAlt={entertainmentData[2].title}
            />
          </div>
          <div className="col-lg-3">
            <VideoCard
              title={entertainmentData[3].title}
              subtitle={entertainmentData[3].shortdescription}
              imageSrc={entertainmentData[3].image}
              category={entertainmentData[3].category}
              slug={entertainmentData[3].slug}
              imageAlt={entertainmentData[3].title}
            />
          </div>
        </div>
      </div>

      <div className="py-3">
        <SectionHeading heading="Our Latest Education News" />
        <div className="row">
          <div className="col-lg-6">
            <NewsArticleCard
              title={educationData[0].title}
              subtitle={educationData[0].shortdescription}
              imageSrc={educationData[0].image}
              category={educationData[0].category}
              slug={educationData[0].slug}
              imageAlt={educationData[0].title}
            />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={educationData[1].title}
                  subtitle={educationData[1].shortdescription}
                  imageSrc={educationData[1].image}
                  category={educationData[1].category}
                  slug={educationData[1].slug}
                  imageAlt={educationData[1].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={educationData[2].title}
                  subtitle={educationData[2].shortdescription}
                  imageSrc={educationData[2].image}
                  category={educationData[2].category}
                  slug={educationData[2].slug}
                  imageAlt={educationData[2].title}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={educationData[3].title}
                  subtitle={educationData[3].shortdescription}
                  imageSrc={educationData[3].image}
                  category={educationData[3].category}
                  slug={educationData[3].slug}
                  imageAlt={educationData[3].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={educationData[4].title}
                  subtitle={educationData[4].shortdescription}
                  imageSrc={educationData[4].image}
                  category={educationData[4].category}
                  slug={educationData[4].slug}
                  imageAlt={educationData[4].title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3">
        <SectionHeading heading="Our Latest Sports News" />
        <div className="row">
          <div className="col-lg-6">
            <NewsArticleCard
              title={sportsData[20].title}
              subtitle={sportsData[20].shortdescription}
              imageSrc={sportsData[20].image}
              category={sportsData[20].category}
              slug={sportsData[20].slug}
              imageAlt={sportsData[20].title}
            />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={sportsData[21].title}
                  subtitle={sportsData[21].shortdescription}
                  imageSrc={sportsData[21].image}
                  category={sportsData[21].category}
                  slug={sportsData[21].slug}
                  imageAlt={sportsData[21].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={sportsData[22].title}
                  subtitle={sportsData[22].shortdescription}
                  imageSrc={sportsData[22].image}
                  category={sportsData[22].category}
                  slug={sportsData[22].slug}
                  imageAlt={sportsData[22].title}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={sportsData[23].title}
                  subtitle={sportsData[23].shortdescription}
                  imageSrc={sportsData[23].image}
                  category={sportsData[23].category}
                  slug={educationData[23].slug}
                  imageAlt={sportsData[23].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={sportsData[24].title}
                  subtitle={sportsData[24].shortdescription}
                  imageSrc={sportsData[24].image}
                  category={sportsData[24].category}
                  slug={sportsData[24].slug}
                  imageAlt={sportsData[24].title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <SectionHeading heading="Lifestyle" />
        <div className="row">
          <div className="col-lg-3">
            <VideoCard
              title={lifestyleData[0].title}
              subtitle={lifestyleData[0].shortdescription}
              imageSrc={lifestyleData[0].image}
              category={lifestyleData[0].category}
              slug={lifestyleData[0].slug}
              imageAlt={lifestyleData[0].title}
            />
          </div>
          <div className="col-lg-3">
            <VideoCard
              title={lifestyleData[1].title}
              subtitle={lifestyleData[1].shortdescription}
              imageSrc={lifestyleData[1].image}
              category={lifestyleData[1].category}
              slug={lifestyleData[1].slug}
              imageAlt={lifestyleData[1].title}
            />
          </div>
          <div className="col-lg-3">
            <VideoCard
              title={lifestyleData[2].title}
              subtitle={lifestyleData[2].shortdescription}
              imageSrc={lifestyleData[2].image}
              category={lifestyleData[2].category}
              slug={lifestyleData[2].slug}
              imageAlt={lifestyleData[2].title}
            />
          </div>
          <div className="col-lg-3">
            <VideoCard
              title={lifestyleData[3].title}
              subtitle={lifestyleData[3].shortdescription}
              imageSrc={lifestyleData[3].image}
              category={lifestyleData[3].category}
              slug={lifestyleData[3].slug}
              imageAlt={lifestyleData[3].title}
            />
          </div>
        </div>
      </div>
      <div className="py-3">
        <SectionHeading heading="Most popular articles" />
        <div className="row">
          <div className="col-lg-4">
            <NumberedTextBlock
              index="01"
              title={scienceData[0].title}
              date={scienceData[0]?.date || ""}
              className="fs-5"
            />
          </div>
          <div className="col-lg-4">
            <NumberedTextBlock
              index="02"
              title={technologyData[0].title}
              date={technologyData[0]?.date || ""}
              className="fs-5"
            />
          </div>
          <div className="col-lg-4">
            <NumberedTextBlock
              index="03"
              title={healthData[0].title}
              date={healthData[0]?.date || ""}
              className="fs-5"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <NumberedTextBlock
              index="04"
              title={businessData[1].title}
              date={businessData[1]?.date || ""}
              className="fs-5"
            />
          </div>
          <div className="col-lg-4">
            <NumberedTextBlock
              index="05"
              title={politicsData[0].title}
              date={politicsData[0]?.date || ""}
              className="fs-5"
            />
          </div>
          <div className="col-lg-4">
            <NumberedTextBlock
              index="06"
              title={educationData[0].title}
              date={educationData[0]?.date || ""}
              className="fs-5"
            />
          </div>
        </div>
      </div>

      <div className="py-3">
        <SectionHeading heading="Science" />
        <div className="row">
          <div className="col-lg-6">
            <NewsArticleCard
              title={scienceData[20].title}
              subtitle={scienceData[20].shortdescription}
              imageSrc={scienceData[20].image}
              category={scienceData[20].category}
              slug={scienceData[20].slug}
              imageAlt={scienceData[20].title}
            />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={scienceData[21].title}
                  subtitle={scienceData[21].shortdescription}
                  imageSrc={scienceData[21].image}
                  category={scienceData[21].category}
                  slug={scienceData[21].slug}
                  imageAlt={scienceData[21].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={scienceData[22].title}
                  subtitle={scienceData[22].shortdescription}
                  imageSrc={scienceData[22].image}
                  category={scienceData[22].category}
                  slug={scienceData[22].slug}
                  imageAlt={scienceData[22].title}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={scienceData[23].title}
                  subtitle={scienceData[23].shortdescription}
                  imageSrc={scienceData[23].image}
                  category={scienceData[23].category}
                  slug={scienceData[23].slug}
                  imageAlt={scienceData[23].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={scienceData[24].title}
                  subtitle={scienceData[24].shortdescription}
                  imageSrc={scienceData[24].image}
                  category={scienceData[24].category}
                  slug={scienceData[24].slug}
                  imageAlt={scienceData[24].title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3">
        <SectionHeading heading="Most commented articles" />
        <div className="row">
          <div className="col-lg-4">
            <NumberedTextBlock
              index="01"
              title={scienceData[1].title}
              date={scienceData[1]?.date || ""}
            />
          </div>
          <div className="col-lg-4">
            <NumberedTextBlock
              index="02"
              title={technologyData[1].title}
              date={technologyData[1]?.date || ""}
            />
          </div>
          <div className="col-lg-4">
            <NumberedTextBlock
              index="03"
              title={healthData[1].title}
              date={healthData[1]?.date || ""}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <NumberedTextBlock
              index="04"
              title={businessData[2].title}
              date={businessData[2]?.date || ""}
            />
          </div>
          <div className="col-lg-4">
            <NumberedTextBlock
              index="05"
              title={politicsData[1].title}
              date={politicsData[1]?.date || ""}
            />
          </div>
          <div className="col-lg-4">
            <NumberedTextBlock
              index="06"
              title={educationData[1].title}
              date={educationData[1]?.date || ""}
            />
          </div>
        </div>
      </div>

      <div className="py-3">
        <SectionHeading heading="Business" />
        <div className="row">
          <div className="col-lg-6">
            <NewsArticleCard
              title={businessData[25].title}
              subtitle={businessData[25].shortdescription}
              imageSrc={businessData[25].image}
              category={businessData[25].category}
              slug={businessData[25].slug}
              imageAlt={businessData[25].title}
            />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={businessData[26].title}
                  subtitle={businessData[26].shortdescription}
                  imageSrc={businessData[26].image}
                  category={businessData[26].category}
                  slug={businessData[26].slug}
                  imageAlt={businessData[26].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={businessData[27].title}
                  subtitle={businessData[27].shortdescription}
                  imageSrc={businessData[27].image}
                  category={businessData[27].category}
                  slug={businessData[27].slug}
                  imageAlt={businessData[27].title}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={businessData[28].title}
                  subtitle={businessData[28].shortdescription}
                  imageSrc={businessData[28].image}
                  category={businessData[28].category}
                  slug={businessData[28].slug}
                  imageAlt={businessData[28].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={businessData[29].title}
                  subtitle={businessData[29].shortdescription}
                  imageSrc={businessData[29].image}
                  category={businessData[29].category}
                  slug={businessData[29].slug}
                  imageAlt={businessData[29].title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3">
        <SectionHeading heading="Politics" />
        <div className="row">
          <div className="col-lg-6">
            <NewsArticleCard
              title={politicsData[26].title}
              subtitle={politicsData[26].shortdescription}
              imageSrc={politicsData[26].image}
              category={politicsData[26].category}
              slug={politicsData[26].slug}
              imageAlt={politicsData[26].title}
            />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={politicsData[25].title}
                  subtitle={politicsData[25].shortdescription}
                  imageSrc={politicsData[25].image}
                  category={politicsData[25].category}
                  slug={politicsData[25].slug}
                  imageAlt={politicsData[25].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={politicsData[27].title}
                  subtitle={politicsData[27].shortdescription}
                  imageSrc={politicsData[27].image}
                  category={politicsData[27].category}
                  slug={politicsData[27].slug}
                  imageAlt={politicsData[27].title}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={politicsData[28].title}
                  subtitle={politicsData[28].shortdescription}
                  imageSrc={politicsData[28].image}
                  category={politicsData[28].category}
                  slug={politicsData[28].slug}
                  imageAlt={politicsData[28].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={politicsData[29].title}
                  subtitle={politicsData[29].shortdescription}
                  imageSrc={politicsData[29].image}
                  category={politicsData[29].category}
                  slug={politicsData[29].slug}
                  imageAlt={politicsData[29].title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3">
        <SectionHeading heading="Helath" />
        <div className="row">
          <div className="col-lg-6">
            <NewsArticleCard
              title={healthData[26].title}
              subtitle={healthData[26].shortdescription}
              imageSrc={healthData[26].image}
              category={healthData[26].category}
              slug={healthData[26].slug}
              imageAlt={healthData[26].title}
            />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={healthData[25].title}
                  subtitle={healthData[25].shortdescription}
                  imageSrc={healthData[25].image}
                  category={healthData[25].category}
                  slug={healthData[25].slug}
                  imageAlt={healthData[25].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={healthData[27].title}
                  subtitle={healthData[27].shortdescription}
                  imageSrc={healthData[27].image}
                  category={healthData[27].category}
                  slug={healthData[27].slug}
                  imageAlt={healthData[27].title}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <NewsCard2
                  title={healthData[28].title}
                  subtitle={healthData[28].shortdescription}
                  imageSrc={healthData[28].image}
                  category={healthData[28].category}
                  slug={healthData[28].slug}
                  imageAlt={healthData[28].title}
                />
              </div>
              <div className="col-lg-6">
                <NewsCard2
                  title={healthData[29].title}
                  subtitle={healthData[29].shortdescription}
                  imageSrc={healthData[29].image}
                  category={healthData[29].category}
                  slug={healthData[29].slug}
                  imageAlt={healthData[29].title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-lg-4">
          <SectionHeading heading="Entertainment" />
          <NewsCard2
            title={entertainmentData[4].title}
            subtitle={entertainmentData[4].shortdescription}
            imageSrc={entertainmentData[4].image}
            category={entertainmentData[4].category}
            slug={entertainmentData[4].slug}
            imageAlt={entertainmentData[4].title}
          />
        </div>
        <div className="col-lg-4">
          <SectionHeading heading="Lifestyle" />
          <NewsCard2
            title={lifestyleData[5].title}
            subtitle={lifestyleData[5].shortdescription}
            imageSrc={lifestyleData[5].image}
            category={lifestyleData[5].category}
            slug={lifestyleData[5].slug}
            imageAlt={lifestyleData[5].title}
          />
        </div>
        <div className="col-lg-4">
          <SectionHeading heading="Education" />
          <NewsCard2
            title={educationData[5].title}
            subtitle={educationData[5].shortdescription}
            imageSrc={educationData[5].image}
            category={educationData[5].category}
            slug={educationData[5].slug}
            imageAlt={educationData[5].title}
          />
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className=" border-top border-bottom">
              <NumberedTextBlock
                title={entertainmentData[5].title}
                date={entertainmentData[5]?.date || ""}
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className=" border-top border-bottom">
              <NumberedTextBlock
                title={lifestyleData[6].title}
                date={lifestyleData[6]?.date || ""}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="border-top border-bottom">
              <NumberedTextBlock
                title={educationData[6].title}
                date={educationData[6]?.date || ""}
              />
            </div>
            
          </div>
        </div>
                <div className="row">
          <div className="col-lg-4">
            <div className=" border-top border-bottom">
              <NumberedTextBlock
                title={entertainmentData[6].title}
                date={entertainmentData[6]?.date || ""}
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className=" border-top border-bottom">
              <NumberedTextBlock
                title={lifestyleData[7].title}
                date={lifestyleData[7]?.date || ""}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="border-top border-bottom">
              <NumberedTextBlock
                title={educationData[7].title}
                date={educationData[7]?.date || ""}
              />
            </div>
          </div>
        </div>
      </div>

            <div className="row py-5">
        <div className="col-lg-4">
          <SectionHeading heading="Health" />
          <NewsCard2
            title={healthData[10].title}
            subtitle={healthData[10].shortdescription}
            imageSrc={healthData[10].image}
            category={healthData[10].category}
            slug={healthData[10].slug}
            imageAlt={healthData[10].title}
          />
        </div>
        <div className="col-lg-4">
          <SectionHeading heading="Science" />
          <NewsCard2
            title={scienceData[10].title}
            subtitle={scienceData[10].shortdescription}
            imageSrc={scienceData[10].image}
            category={scienceData[10].category}
            slug={scienceData[10].slug}
            imageAlt={scienceData[10].title}
          />
        </div>
        <div className="col-lg-4">
          <SectionHeading heading="Sports" />
          <NewsCard2
            title={sportsData[10].title}
            subtitle={sportsData[10].shortdescription}
            imageSrc={sportsData[10].image}
            category={sportsData[10].category}
            slug={sportsData[10].slug}
            imageAlt={sportsData[10].title}
          />
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className=" border-top border-bottom">
              <NumberedTextBlock
                title={healthData[11].title}
                date={entertainmentData[11]?.date || ""}
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className=" border-top border-bottom">
              <NumberedTextBlock
                title={scienceData[11].title}
                date={scienceData[11]?.date || ""}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="border-top border-bottom">
              <NumberedTextBlock
                title={sportsData[11].title}
                date={sportsData[11]?.date || ""}
              />
            </div>
            
          </div>
        </div>
                <div className="row">
          <div className="col-lg-4">
            <div className=" border-top border-bottom">
              <NumberedTextBlock
                title={healthData[12].title}
                date={healthData[12]?.date || ""}
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className=" border-top border-bottom">
              <NumberedTextBlock
                title={scienceData[12].title}
                date={scienceData[12]?.date || ""}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="border-top border-bottom">
              <NumberedTextBlock
                title={sportsData[12].title}
                date={sportsData[12]?.date || ""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
