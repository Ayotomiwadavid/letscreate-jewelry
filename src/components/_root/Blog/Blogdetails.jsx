import React from "react";
import { useParams } from "react-router-dom";
import Blogs from "../../../data/Blogdata";
import Markdown from "react-markdown";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";

import Image1 from '../../../assets/BlogImages/DiamondImage.jpg'
import Image2 from '../../../assets/BlogImages/emeraldImage.webp'
import Image3 from '../../../assets/BlogImages/FascinatingImage.jpg'
import Image4 from '../../../assets/BlogImages/MostpopularGems.jpeg'
import Image5 from '../../../assets/BlogImages/NaturalEmeraldFact.jpg'
import Image6 from '../../../assets/BlogImages/Opals.jpg'
import Image7 from '../../../assets/BlogImages/PERIDOTSimage.jpg'
import Image8 from '../../../assets/BlogImages/RealVsFake.webp'
import Image9 from '../../../assets/BlogImages/Saphier.webp'
import Image0 from '../../../assets/BlogImages/TurquoiseImage.jpg'

const Blogdetails = () => {
  const { blogslug } = useParams();
  console.log(blogslug);

  const blogPost = Blogs.find((blog) => blog.slug === blogslug);
  console.log(blogPost);
  return (
    <section>
      {/* <Helmet>
        <title>{post.title} | Lets craete jewelry</title>
        <meta name="description" content={post.description} />
      </Helmet> */}
      <Navbar />
      <main className="py-[50px] px-[5vw]">
        <Markdown>{blogPost.mainBlog}</Markdown>
      </main>
      <Footer />
    </section>
  );
};

export default Blogdetails;
