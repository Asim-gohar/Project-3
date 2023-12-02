import Link from "next/link"
import { Children } from "react"
import { Inter } from "next/font/google"
import "@/app/layout";
import {FaFacebookF , FaInstagram , FaTwitter , FaLinkedin, FaWhatsapp} from "react-icons/fa"

const inter = Inter({ subsets: ['latin'] })
    export default function RootLayout({ 
        children,
      }: {
        children: React.ReactNode
      }) {
        return (
          <html lang="en">
            <body className={inter.className}>
            <Link href="blog"><img src="images/logo.png" alt="logo" className='logo'/></Link>
            <div className="nav-links" id="navLinks">                
               <ul>                   
                   <li><Link href="/"  style={{color:"black"}}>Home</Link></li>
                   <li><Link href="/blog"  style={{color:"black"}}>Blog</Link ></li>
               </ul>
       </div>
              {children}
            <section className="footer">
        <hr/>
        <Link href="/about"><h4>About Us</h4></Link>
        <p><b>Blog</b> is your gateway to a world of knowledge and inspiration. Our mission is to empower you with insightful content that sparks curiosity and fuels your desire for continuous learning.
           Join us on a journey of exploration, where we delve into diverse topics, share valuable insights, and foster a community passionate about knowledge.
        </p>
        <hr />
<Link href="/contact"><h4>Contact Us</h4></Link>
        <div className="icons">
            <Link href="https://www.facebook.com/profile.php?id=100036069652618&mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i><FaFacebookF style={{color:'#1877F2'}}/></Link>
            <Link href="https://instagram.com/asimbutt3349?igshid=NGVhN2U2NjQ0Yg=="><i className="fab fa-instagram"></i><FaInstagram style={{color:'#dd2a7b'}}/></Link>
            <i className="fab fa-twitter"></i><FaTwitter style={{color:'#1DA1F2'}}/>
            <Link href="https://api.whatsapp.com/send?phone=923079664615"><i className="fab fa-whatsapp"></i><FaWhatsapp style={{color:'color: #075E54;'}}/></Link>
           <Link href='https://www.linkedin.com/in/asim-butt-5b03182a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'> <i className="fab fa-linkedin"></i><FaLinkedin style={{color:'#0077B5'}}/></Link>
        </div>
        <p>Made with <i className="fas fa-heart"></i> by <a href="https://api.whatsapp.com/send?phone=923079664615">Asim Developer</a>
</p>
        <p>Copyright © 2021 <a href="/">BLOG</a>. All Rights Reserved</p>
    </section>
            </body>
          </html>
        )
      }
      
