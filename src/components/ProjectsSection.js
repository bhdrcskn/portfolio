import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading } from "@chakra-ui/react"; 
import Card from "./Card"; 
import { faGithub } from "@fortawesome/free-brands-svg-icons";
 
const projects = [ 
 { 
   title: <a href="https://create-theme-switcher.vercel.app/" target="_blank">Theme Switcher »</a>,
   description: <a href="https://github.com/bhdrcskn/CreateThemeSwitcher" target="_blank">GitHub Repository »</a>,
   getImageSrc: () => require("../images/photo1.jpg"),
 }, 
 { 
   title: <a href="https://creating-registration-form.vercel.app/" target="_blank">Registration Form »</a>, 
   description: <a href="https://github.com/bhdrcskn/CreatingRegistrationForm" target="_blank">GitHub Repository »</a>, 
   getImageSrc: () => require("../images/photo2.jpg"),
 }, 
 { 
   title: <a href="https://basit-faiz-hesabi.vercel.app/" target="_blank">Simple Interest Calculator »</a>, 
   description: <a href="https://github.com/bhdrcskn/BasitFaizHesabi" target="_blank">GitHub Repository »</a>,
   getImageSrc: () => require("../images/photo3.jpg"), 
 }, 
 { 
   title: <a href="https://hesapmakinesi.vercel.app/" target="_blank">Simple Calculator »</a>, 
   description: <a href="https://github.com/bhdrcskn/hesapmakinesi" target="_blank">GitHub Repository »</a>,
   getImageSrc: () => require("../images/photo4.jpg"),
 }, 
]; 
 
const ProjectsSection = () => { 
 return ( 
   <FullScreenSection 
     backgroundColor="#14532d" 
     isDarkBackground 
     p={8} 
     alignItems="flex-start" 
     spacing={8} 
   > 
     <Heading as="h1" id="projects-section"> 
       Featured Projects 
     </Heading> 
     <Box 
       display="grid" 
       gridTemplateColumns="repeat(2,minmax(0,1fr))" 
       gridGap={8} 
     > 
       {projects.map((project,url) => ( 
         <Card 
           key={url} 
           title={project.title} 
           description={project.description} 
           url={project.url}
           target="_blank" 
           rel="noopener noreferrer" 
           imageSrc= {project.getImageSrc()}
         /> 
       ))} 
     </Box> 
   </FullScreenSection> 
 ); 
}; 
 
export default ProjectsSection;