const config = {
  site: "https://shivam-portfolio.vercel.app",
  title: "Shivam Kumar | Full-Stack Developer",
  description: {
       long: "Explore the portfolio of Shivam, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Shivam, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Shivam",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Framer Motion",
  ],
  author: "Shivam",
  email: "shivamkrsingh112@gmail.com",
  insta: "something.shivam",

  // for github stars button
  githubUsername: "OG-shivam",
  githubRepo: "shivam-portfolio",
 
    get ogImg() {
  return `${this.site}/assets/seo/og-image.png`;
},


  
  social: {
  linkedin: "https://www.linkedin.com/in/shivam-kumar-singh-80989a325",
  instagram: "https://www.instagram.com/something.shivam",
  github: "https://github.com/OG-shivam",
},

};
export { config };
