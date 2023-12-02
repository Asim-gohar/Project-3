import React from 'react';
import BlogList from '@/app/bloglist';
import "@/app/style.css"
import Link from 'next/link';


const BlogPage = () => {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Welcome to the Blog Page</h1>
      
      <BlogList />
    </div>
  );
};

export default BlogPage;
