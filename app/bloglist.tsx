import React from 'react';
import Link from 'next/link';
import { blogPages } from '@/public/data/page';
import Image from 'next/image';
import "@/app/style.css"
import blog from "@/app/blog/page"

const BlogList = () => {
  return (

    <div className='blog-list'>
      <h2>Blog Pages</h2>
      <ul className="blog-grid">
        {blogPages.map((page : any) => (
         <li key={page.slug} className="blog-item">
            <Link href={`/blog/${page.slug}`}> 
        <div className='img'>        
          {page.title === "Exploring the Top Software Tools for Websites" && (
            <img src='images/software-head.png' alt='Software Head' />)}            

        {page.title === "Top Software Companies Shaping the Tech Industry" && (
          <img src='images/companies-head.jpg' alt='Companies Head' />)} 

        {page.title === "The Future of Artificial Intelligence: Trends and Predictions" && (
          <img src='images/AI-head.jpg' alt='AI Head' />)} 

        {page.title === "Budget-Friendly Travel Tips: Explore the World Without Breaking the Bank" && (
          <img src='images/travel-head.jpg' alt='travel Head' />)} 

        {page.title === "The Impact of Social Media on Society:" && (
          <img src='images/media-head.jpg' alt='travel Head' />)} 
          
        {page.title === "Healthy Living: Balancing Physical and Mental Well-being:" && (
          <img src='images/health-head.jpg' alt='travel Head' />)} 


            <h1>{ page.title }</h1>  <hr />
            
            </div>          
            </Link>           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
