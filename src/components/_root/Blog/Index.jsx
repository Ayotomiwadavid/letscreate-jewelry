import React from "react";
import Navbar from "../../shared/Navbar";
import Hero from "../../shared/hero/hero";
import Footer from "../../shared/Footer";
import Blogcard from "./Blogcard";
import Blogs from "../../../data/Blogdata";

const BlogPage = () => {
  return (
    <section className="">
      <Navbar />
      <Hero title='Blogs'/>
      <main className="py-[50px] grid grid-cols-1 md:px-5vw md:grid-cols-4 w-full place-content-start place-items-center gap-4">
       {
        Blogs.map((blog) => (<Blogcard blogDescription={blog.blogDescription} blogImage={blog.blogImage} BlogTitle={blog.blogTitle} blogSlug={blog.slug}/>))
       }
      </main>
      <Footer />
    </section>
  );
};

export default BlogPage;
