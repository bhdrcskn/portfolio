import React from "react"; 
import { Avatar, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
 
const greeting = "👋 Hi, I'm Bahadır Coşkun!"; 
const bio1 = "🏫 I'm an electrical engineering undergraduate student at Istanbul Technical University."; 
const bio2 = "👨🏻‍💻 I'm interested in software development and I'm working in this direction."; 
const bio3 = "🔎 You can find my work on GitHub and projects."
 
const LandingSection = () => ( 
 <FullScreenSection 
   justifyContent="center" 
   alignItems="center" 
   isDarkBackground 
   backgroundColor="#2A4365" 
 > 
   <VStack spacing={16}> 
     <VStack spacing={4} alignItems="center"> 
       <Avatar 
         src="https://avatars.githubusercontent.com/u/112313083?v=4" 
         size="2xl" 
         name="Bahadır Coşkun" 
       /> 
       <Heading as="h4" size="md" noOfLines={1}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading as="h1" size="md" noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size="md" noOfLines={1}> 
         {bio2} 
       </Heading> 
       <Heading as="h1" size="md" noOfLines={1}> 
         {bio3}
       </Heading>
     </VStack> 
   </VStack> 
 </FullScreenSection> 
); 
 
export default LandingSection;