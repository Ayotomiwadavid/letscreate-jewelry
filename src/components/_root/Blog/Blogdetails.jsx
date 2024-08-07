import React from "react";
import { useParams } from "react-router-dom";
import Blogs from "../../../data/Blogdata";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import DiamondImage from '../../../assets/BlogImages/DiamondImage.jpg';
import emeraldImage from '../../../assets/BlogImages/emeraldImage.webp';
import FascinatingImage from '../../../assets/BlogImages/FascinatingImage.jpg';
import MostpopularGems from '../../../assets/BlogImages/MostpopularGems.jpeg';
import NaturalEmeraldFact from '../../../assets/BlogImages/NaturalEmeraldFact.jpg';
import Opals from '../../../assets/BlogImages/Opals.jpg';
import PERIDOTSimage from '../../../assets/BlogImages/PERIDOTSimage.jpg';
import RealVsFake from '../../../assets/BlogImages/RealVsFake.webp';
import Saphier from '../../../assets/BlogImages/Saphier.webp';
import TurquoiseImage from '../../../assets/BlogImages/TurquoiseImage.jpg';
import Topaz from '../../../assets/BlogImages/Topaz.jpg';
import Rubies from '../../../assets/BlogImages/Rubies.webp';
import amethysts from '../../../assets/BlogImages/amethysts.jpg';
import garnet from '../../../assets/BlogImages/garnet.webp';

const imageMap = {
  'DiamondImage.jpg': DiamondImage,
  'emeraldImage.webp': emeraldImage,
  'FascinatingImage.jpg': FascinatingImage,
  'MostpopularGems.jpeg': MostpopularGems,
  'NaturalEmeraldFact.jpg': NaturalEmeraldFact,
  'Opals.jpg': Opals,
  'PERIDOTSimage.jpg': PERIDOTSimage,
  'RealVsFake.webp': RealVsFake,
  'Saphier.webp': Saphier,
  'TurquoiseImage.jpg': TurquoiseImage,
  'Topaz.jpg': Topaz,
  'Rubies.webp': Rubies,
  'amethysts.jpg': amethysts,
  'garnet.webp': garnet,
};

const Blogdetails = () => {
  const { blogslug } = useParams();
  console.log(blogslug);

  const blogPost = Blogs.find((blog) => blog.slug === blogslug);

  if (!blogPost) {
    return <p>Blog post not found!</p>;
  }

  const getImagePath = (imageName) => {
    return imageMap[imageName] || null;
  };

  const imageSrc = getImagePath(blogPost.blogImage);

  return (
    <section>
      <Navbar />
      <main className="py-[50px] px-[5vw] flex w-full items-center justify-center">
        <div>
          <h1 className="font-bold text-3xl text-left py-4">{blogPost.blogTitle}</h1>
          <div className="w-full py-3 items-center justify-center flex">
            {imageSrc && <img src={imageSrc} alt={blogPost.blogTitle} className="w-[80%]" />}
          </div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ src, alt }) => {
                const imagePath = getImagePath(src);
                return <div className="w-full flex items-center justify-center md:justify-start py-5"><img className="md:w-[75%] w-full max-h-[650px]" src={imagePath} alt={alt} /></div>;
              },

              p: ({ children }) => <p className="my-4">{children}</p>, // Apply custom styles to paragraphs
              h1: ({ children }) => <h1 className="font-bold text-4xl my-6">{children}</h1>,
              h2: ({ children }) => <h2 className="font-bold text-3xl my-5">{children}</h2>,
              h3: ({ children }) => <h3 className="font-bold text-2xl my-4">{children}</h3>,
              h4: ({ children }) => <h4 className="font-bold text-xl my-3">{children}</h4>,
              h5: ({ children }) => <h5 className="font-bold text-lg my-2">{children}</h5>,
              h6: ({ children }) => <h6 className="font-bold text-base my-1">{children}</h6>,
              strong: ({ children }) => <strong className="font-bold">{children}</strong>,
              a: ({ href, children }) => (
                <a href={href} className="text-blue-500 underline hover:text-blue-700">
                  {children}
                </a>
              ), 
            }}
          >
            {blogPost.mainBlog}
          </ReactMarkdown>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default Blogdetails;
