import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectText from './ContentDisplay-Components/ProjectText';
import ProjectImg from './ContentDisplay-Components/ProjectImg';
import ProjectTitle from './ContentDisplay-Components/ProjectTitle';
import ProjectDetails from './ContentDisplay-Components/ProjectDetails';
import ProjectMediaContainer from './ContentDisplay-Components/ProjectMediaContainer';
import ProjectBanner from './ContentDisplay-Components/ProjectBanner';
import ProjectTools from './ContentDisplay-Components/ProjectTools';
import ProjectVideo from './ContentDisplay-Components/ProjectVideo';
import ProjectTextContainer from './ContentDisplay-Components/ProjectTextContainer';
import ProjectInfoContainer from './ContentDisplay-Components/ProjectInfoContainer';
import ProjectSubheading from './ContentDisplay-Components/ProjectSubheading';
import ProjectSpacer from './ContentDisplay-Components/ProjectSpacer';

function Projects({mediaState,selectedProject,setSelectedProject,activeContentGetSet}) {


    return (
        <div className='Projects'>
            <h3 className={`text-xl text-stone-500 font-normal border-b border-stone-500 mb-5 transition-opacity`}>Projects</h3>
            <div className='pl-2'>
                <ProjectCard setMedia={mediaState.set} setActiveContent={activeContentGetSet.set} index={10} selectedProject={selectedProject} setSelectedProject={setSelectedProject} 
                title={"Expressive Metrics"} tags={["Web", "Full Stack"]} highlightedProject={true}>
                    <ProjectInfoContainer>
                        <ProjectTitle>Expressive Metrics</ProjectTitle>
                        <ProjectDetails year={2023} projectType={"Web App"}
                            links={[
                                {name: "Live Site", shortUrl: "expressivemetrics.vercel.app", url: "https://expressivemetrics.vercel.app/"},
                                {name: "Github", shortUrl: "github.com/zackshersh/art-metrics", url: "https://github.com/zackshersh/art-metrics"}

                            ]}
                        ></ProjectDetails>
                        <ProjectText>Expressive Metrics is a fullstack web application that aims to measure and organize art by quantifying several qualities that relate to the reaction the work evokes for viewers. It positions each work of art along 3 axes: from Boba to Kiki, from Fresh to Smelly, and from Sleepy to Amped. Users are asked to rate artworks along these 3 axes, indicating where they feel each work falls on the spectrum. </ProjectText>
                    </ProjectInfoContainer>

                    <ProjectSubheading>Features</ProjectSubheading>
                    <ProjectVideo src={"expressive-metrics-rating.webm"} />
                    <ProjectText>The rating section of the site is supposed to be a fun activity in and of itself, giving users the opportunity to engage with art in an emotional and analytical way. Users are given no guidance on what to base their ratings off of, so they are pushed to interrogate what specific qualities of the work lead them to feel that it is an exceptionally sleepy piece or a slightly smelly one.</ProjectText>
                    <ProjectSpacer size={"medium"} />
                    <ProjectVideo src={"expressive-metrics-scatterplot.webm"} />
                    <ProjectText>The other section of the site, an interactive scatterplot, lets users explore all of the works featured on the site. The scatterplot takes one of the three metrics to be the X-axis and another as the Y, and places each work according to the average of all user ratings. This creates a unique way to discover artworks based on vibe, rather than the way artworks are often shown based on artist, era, style, etc… Users can observe the similarities between works that are placed near one another, and groupings that seem to naturally emerge.</ProjectText>

                    <ProjectSubheading>Design</ProjectSubheading>
                    <ProjectText>My design process was directed by several rounds of UX testing I performed with friends and family. This process was essential for figuring out how to design interfaces that would intuitively  communicate the somewhat unorthodox concept of the project. One of the largest issues was getting users to intuitively understand how each piece could fall on a spectrum between the two extremes. Users would grasp that each art piece was supposed to be one of the two extremes (e.g. Fresh OR Smelly), but they were confused when asked to put a piece somewhere between the two.</ProjectText>
                    <ProjectSpacer size={"medium"} />
                    <ProjectVideo src={"expressive-metrics-svgicon.webm"} small/>
                    <ProjectText>On the Rating Page, I developed a React component that interpolated the shape and color of an svg element between two shapes, one that represented one of the extremes and another that represented the other. As the user moves the input slider, the svg shape would interpolate accordingly and visually represent the continuous transition from one to the other.</ProjectText>
                    <ProjectText>Similarly, I communicated the continuous transition on the scatterplot through colored gradient axes which transitioned smoothly from one color to the other. Associating a color with each end of each metric consistently throughout the site also helped to communicate to users how each metric was representative of a more emotional quality which users initially didn’t understand.</ProjectText>

                    <ProjectSubheading>Technical</ProjectSubheading>
                    <ProjectText>The frontend of Expressive Metrics was built in React and makes use of React Router and D3.js but is otherwise custom developed for this project. The backend is built in Node.js, and uses Express.js and MongoDB Atlas. It is deployed on Vercel.</ProjectText>
                </ProjectCard>

                <ProjectCard setMedia={mediaState.set} setActiveContent={activeContentGetSet.set} 
                 index={0} selectedProject={selectedProject} setSelectedProject={setSelectedProject} 
                title={"Green Ink Table of Contents"} tags={["Web", "3D","Collaborative"]}
                content={[
                ]}
                >
                    <ProjectInfoContainer>
                        <ProjectTitle>Green Ink Table of Contents</ProjectTitle>
                        <ProjectDetails year={2023} projectType={"Web App"}
                            links={[
                                {name: "Live Site", shortUrl: "zackshersh.github.io", url: "https://zackshersh.github.io/greenink-MEJO683/"}
                            ]}
                        ></ProjectDetails>
                        <ProjectText>The Green Ink Table of Contents was one aspect of the final project of my senior capstone magazine design course, in which the entire class collaborated to write and design a magazine. As the project's digital director, I led the creation of a piece of interactive digital media for my class' magazine, Green Ink, which focused on sustainability.</ProjectText>
                        <ProjectText>The primary obstacle I faced as digital director was the process of aligning my team. While my team members all possessed significant expertise, they brought a diversity of skill levels in digital mediums such as programming, motion graphics and video product, which made it challenging to determine what method we would use to create this digital product.</ProjectText>
                        <ProjectText>To allow the entire team to creatively engage and contribute to the product, my solution was to utilize a medium that was equally accessible to everyone. I brought modeling clay into class and facilitated a class session in which everyone sculpted a small object that was representative of the content of each of their articles in the magazine. I think instructed them in using Polycam, a photogrammetry app, to scan their objects into usable 3D models.</ProjectText>
                        <ProjectText>The final product was a web-based "virtual table of contents" that threw all of the objects together in a 3D physics simulation, and then presented each object next to a short description of the article it represents to serve as an illustrative and eye-catching visual. The result is an organic, cartoonish aesthetic that matches the style of the actual magazine.</ProjectText>

                    </ProjectInfoContainer>

                    <ProjectVideo src={"greenclay-demo.webm"} />
                    <ProjectVideo src={"greenclay-1.webm"} />
                    <ProjectMediaContainer>
                        <ProjectImg src={"greenclay-2.jpeg"} />
                        <ProjectImg src={"greenclay-3.jpeg"} />
                    </ProjectMediaContainer>
                    <ProjectTools str={"React.js, Three.js, Polycam (Photogrammetry), Physical Media"} />
                </ProjectCard>

                <ProjectCard setMedia={mediaState.set} setActiveContent={activeContentGetSet.set} selectedProject={selectedProject} setSelectedProject={setSelectedProject} index={2} title={"Image Filter Web App"} 
                tags={["Web","UI"]}>
                    <ProjectInfoContainer>
                        <ProjectTitle>Image Filter Web App</ProjectTitle>
                        <ProjectDetails year={2021} projectType={"Web App"}
                            links={[
                                {name: "Live Site", shortUrl: "zackshersh.github.io", url: "https://zackshersh.github.io/little-image-filter-thingy-app/"},
                                {name: "Github", shortUrl: "https://github.com/zackshersh/little-", url: "https://github.com/zackshersh/little-image-filter-thingy-app"}
                            ]}></ProjectDetails>
                        <ProjectText>Image Filter Web App is an aptly named web application that enables users to layer a number of different image filters onto images they upload to create unique effects. I created this as a passion project to explore image processing and more complex user interfaces in React.</ProjectText>
                    </ProjectInfoContainer>
                    <ProjectImg src={"filter-1.jpeg"} />
                    <ProjectImg specialMaxW='2' wider={true} src={"filter-2.jpeg"} />
                    <ProjectMediaContainer>
                        <ProjectImg src={"filter-3.jpeg"} />
                        <ProjectImg src={"filter-4.jpeg"} />
                    </ProjectMediaContainer>
                    <ProjectTools str={"React.js, Canvas API"} />
                </ProjectCard>

                <ProjectCard setMedia={mediaState.set} setActiveContent={activeContentGetSet.set} selectedProject={selectedProject} setSelectedProject={setSelectedProject} index={7} title={"Behavioral Health Solutions"} 
                tags={["Web","Client"]}>
                    <ProjectInfoContainer>
                        <ProjectTitle>Behavioral Health Solutions</ProjectTitle>
                        <ProjectDetails year={2022} projectType={"Client Website"}
                            links={[
                                {name: "Live Site", shortUrl: "behavioralhealthsolutions.com", url: "https://behavioralhealthsolutions.com/index.html"},
                            ]}></ProjectDetails>
                        <ProjectText>Behavioral Health Solutions is a therapy practice in Durham, NC that hired me to develop a bespoke website. The site was developed to fit the practice's specific needs, which included communicating key information to clients and reflecting the practice's extensive experience through a modern, updated platform.</ProjectText>
                        <ProjectText>Additionally, I developed a form system to streamline the intake process for new clients. The practice has found a niche in a specific, sensitive realm of therapy that prevents people from getting the help they need. This form system allows them to begin the process of seeking help without direct interaction, hopefully encouraging more people to pursue treatment.</ProjectText>
                    </ProjectInfoContainer>
                    <ProjectImg src={"bhs-0.jpeg"} />
                    <ProjectImg src={"bhs-1.jpeg"} />
                    <ProjectImg src={"bhs-2.jpeg"} />
                    <ProjectImg src={"bhs-3.jpeg"} />
                </ProjectCard>

                <ProjectCard setMedia={mediaState.set} setActiveContent={activeContentGetSet.set} selectedProject={selectedProject} setSelectedProject={setSelectedProject} index={8} title={<span><i>Yuck!</i> Clothing</span>} tags={["Branding", "Graphic Design", "Video", "Multimedia"]}>
                    <ProjectInfoContainer>
                        <ProjectTitle><i>Yuck!</i> Clothing</ProjectTitle>
                        <ProjectDetails year={"2018-2024"} projectType={"Clothing Brand"}
                            links={[
                                {name: "Instagram", shortUrl: "www.instagram.com/yuckprojects/", url: "https://www.instagram.com/yuckprojects/"},
                            ]}></ProjectDetails>
                        <ProjectText>Yuck! is a clothing brand I started in my senior year of high school. Across its 6 years I have released 4 lines and a number of other miscellaneous products which have made a combined $1200, including $400 raised for Black Lives Matter in 2020. It was, and has remained, an avenue for experimentation and a platform to share my work with friends and peers.</ProjectText>
                        <ProjectText>An essential part of the project has always been getting to combine and grow my skills across a number of mediums required for making, branding, and marketing it, including: graphic design, photography, video production, animation, and screen-printing.</ProjectText>
                    </ProjectInfoContainer>

                    <ProjectSubheading>Incredible Offerings! — 2024 Line</ProjectSubheading>
                    <ProjectMediaContainer>
                        <ProjectImg src={"yuck-io-0.jpeg"} />
                        <ProjectImg src={"yuck-io-1.jpeg"} />
                        <ProjectImg src={"yuck-io-2.jpeg"} />
                        <ProjectImg src={"yuck-io-3.jpeg"} />
                    </ProjectMediaContainer>
                    <ProjectMediaContainer>
                        <ProjectVideo src={"yuck-io-video-0.webm"} caption={"Clip from announcement video."} />
                        <ProjectVideo src={"yuck-io-video-1.webm"} caption={"Clip from announcement video."}/>
                    </ProjectMediaContainer>

                    <ProjectSubheading>Yuck Computer Bird Thing — 2022 Line</ProjectSubheading>
                    <ProjectMediaContainer>
                        <ProjectImg src={"yuck-cbt-0.jpeg"} />
                        <ProjectImg src={"yuck-cbt-1.jpeg"} />
                        <ProjectImg src={"yuck-cbt-2.jpeg"} />
                        <ProjectImg src={"yuck-cbt-3.jpeg"} />
                    </ProjectMediaContainer>

                    <ProjectSubheading>Miscellaneous</ProjectSubheading>
                    <ProjectMediaContainer>
                        <ProjectImg src={"yuck-misc-2.jpeg"} />
                        <ProjectImg src={"yuck-misc-4.jpeg"} />
                        <ProjectImg src={"yuck-misc-6.jpeg"} />
                        <ProjectImg src={"yuck-misc-7.jpeg"} />
                        <ProjectImg src={"yuck-misc-8.jpeg"} />
                        <ProjectImg src={"yuck-misc-3.jpeg"} />
                        <ProjectImg src={"yuck-misc-5.jpeg"} />

                    </ProjectMediaContainer>
                </ProjectCard>

                <ProjectCard setMedia={mediaState.set} setActiveContent={activeContentGetSet.set} selectedProject={selectedProject} setSelectedProject={setSelectedProject} index={1} title={"Carolina On My Mind Video"} tags={["AI", "Motion Graphics", "Experimental","Collaborative"]}>
                    <ProjectInfoContainer>
                        <ProjectTitle>Carolina On My Mind Video</ProjectTitle>
                        <ProjectDetails year={2023} projectType={"AI Experimental Motion Graphics"}
                        links={[
                            {name: "Full Video", shortUrl: "youtube.com", url: "https://www.youtube.com/watch?v=uXJOkE6mdBU"}]}
                        ></ProjectDetails>
                        <ProjectText>As part of a magazine design course I took in my final semester at UNC, I was tasked with leading the creation of digital media pieces that could be used as promotional material for each of the two magazines that our class wrote and designed over the semester. The exact medium was left to my discretion, and with the emergence of accessible generative AI, I saw this project as an opportunity for experimentation.</ProjectText>
                        <ProjectText>One of the core challenges was using AI tools, which were largely in their infancy, to create a polished final product. Additionally, my classmates had widely varying levels of experience with motion graphics and little to no experience working with generative AI like Stable Diffusion.</ProjectText>
                        <ProjectText>My solution aimed to counteract the randomness inherent in tools like Stable Diffusion, giving my classmates a higher degree of artistic control while also creating coherent animations. We utilized Stable Diffusion's image-to-image mode, which generates an image that resembles a provided reference image. We leveraged this functionality by creating images consisting solely of rudimentary shapes and colors to suggest the images we wanted to generate. When given a description of the image's content and a painterly style, Stable Diffusion would fill in the details not represented in the authored animations. For example, a white circle on a green and brown gradient background would become a painting of a flower from North Carolina's state tree, the dogwood.</ProjectText>
                        <ProjectText>My classmates only needed the most basic knowledge of After Effects to animate these simple base images. By feeding each frame from an animation into Stable Diffusion, we were able to create sequences of AI-generated images which, while still differing substantially from frame to frame, retained the same basic compositions, shapes, and colors. This created the effect of a single, continuous object appearing to travel across the frame while its surroundings rapidly shifted.</ProjectText>
                        <ProjectText>The result was a video made up of 12 different short animations representing each person's story in the magazine.</ProjectText>
                    </ProjectInfoContainer>

                    <ProjectSubheading>Process</ProjectSubheading>
                    <ProjectImg caption={"Simple base image fed into stable diffusion."} src={"comm-1.png"} />
                    <ProjectVideo caption={"Animation Example"} src={"comm-0.webm"} />

                    <ProjectSubheading>Final Product</ProjectSubheading>
                    <ProjectVideo src={"comm-folk.webm"} />
                    <ProjectVideo src={"comm-geog.webm"} />
                    <ProjectVideo src={"comm-names.webm"} />

                    <ProjectTools str={"Stable Diffusion, After Effects"} />

                </ProjectCard>

                <ProjectCard setMedia={mediaState.set} setActiveContent={activeContentGetSet.set} selectedProject={selectedProject} setSelectedProject={setSelectedProject} index={3} title={"Anatomy of a 3D Scene"} 
                tags={["Web","3D"]}>
                    <ProjectInfoContainer>
                        <ProjectTitle>Anatomy of a 3D Scene</ProjectTitle>
                        <ProjectDetails year={2022} projectType={"Web App"}></ProjectDetails>

                        <ProjectText>Anatomy of a 3D Scene is an educational web app which walks users through some of the core concepts of realtime 3D graphics. The project consists of a number of slides containing concise information about core concepts which is superimposed on a 3D scene which changes with each slide. Many of the slides have interactive elements which allow users to directly interact with and edit that concept as it appears in the 3D scene.</ProjectText>
                        <ProjectText>Anatomy of a 3D Scene was created for an assignment in an interactive media course I took at UNC. The direction of the project came from my interest in finding practical uses of complex, creative programming on the web. This project uses the interactive possibilites of programming to create tools that directly aid in the educational purpose of the site and allow users a more hands-on and intuitive connection to the concepts.</ProjectText>

                    </ProjectInfoContainer>
                    <ProjectVideo src={"anatomy3D-scroll-720p40q.webm"} />
                    <ProjectVideo src={"anatomy3D-material-720p40q.webm"} />
                    <ProjectVideo src={"anatomy3D-normal-720p40q.webm"} />
                    <ProjectVideo src={"anatomy3D-lighting-720p40q.webm"} />
                    <ProjectTools str={"React.js, Three.js"} />
                </ProjectCard>

                <ProjectCard setMedia={mediaState.set} setActiveContent={activeContentGetSet.set} selectedProject={selectedProject} setSelectedProject={setSelectedProject} index={4} title={"Tiny Town"} 
                tags={["Web","Full Stack","3D","Collaborative"]}>
                    <ProjectInfoContainer>
                        <ProjectTitle>Tiny Town</ProjectTitle>
                        <ProjectDetails year={2021} projectType={"Full-Stack Web App"}
                            links={[
                                {name: "Github", url:"https://github.com/Gpphelps/tiny-town"}
                            ]}
                        ></ProjectDetails>
                        <ProjectText>Tiny Town is a web application that presents users with a large city-scape made up of different "neighborhoods" built by other users. Users can select an unoccupied area connecting to another user's neighborhood and build their own out of basic building blocks such as roads, parks and different building types. Users can create an account and return to their neighborhood.</ProjectText>
                        <ProjectText>Tiny Town was a full-stack web application I developed with 2 others as the final project for a 24-week web development bootcamp. I was responsible for creating the front-end, including the core 3D environment and user interface and connecting that to a backend developed by my teammate.</ProjectText>
                        <ProjectText>Tiny Town received high acclaim from bootcamp instructors for its creativity and technical implementation.</ProjectText>
                    </ProjectInfoContainer>
                    <ProjectImg src={"tiny-town-1.jpg"} />
                    <ProjectImg src={"tiny-town-3.jpg"} />
                    <ProjectMediaContainer>
                        <ProjectImg src={"tiny-town-2.jpg"} />
                        <ProjectImg src={"tiny-town-4.jpg"} />
                    </ProjectMediaContainer>

                    <ProjectTools str={"React.js, Three.js, GraphQL, MongoDB, Express.js"} />
                </ProjectCard>

                <ProjectCard setMedia={mediaState.set} setActiveContent={activeContentGetSet.set} selectedProject={selectedProject} setSelectedProject={setSelectedProject} index={5} title={"Field of Dreams"} 
                tags={["Web","Full Stack", "Collaborative"]}>
                    <ProjectInfoContainer>
                        <ProjectTitle>Field of Dreams</ProjectTitle>
                        <ProjectDetails year={2021} projectType={"Full-Stack Web App"}
                                links={[
                                    {name: "Github", url:"https://github.com/Gpphelps/field-of-dreams"}
                                ]}
                            ></ProjectDetails>
                        <ProjectText>Field of Dreams is a web application that allows users create a huge range of graphic flowers by adjusting a number of parameters. They can then place these flowers on a field that displays flowers created by other users. These flowers can be saved to a user's account to be edited or placed again in the future.</ProjectText>
                        <ProjectText>I developed Field of Dreams as a full-stack web application with 3 others for a group project in a web development bootcamp. I was largely responsible for the front-end, including the flowers themselves and the user interface but also was involved with developing the Express.js back-end which used SQL to store user account data.</ProjectText>
                   </ProjectInfoContainer>
                    <ProjectImg src={"field-of-dreams-4.jpg"}></ProjectImg>
                    <ProjectMediaContainer>
                        <ProjectImg src={"field-of-dreams-5.jpg"}></ProjectImg>
                        <ProjectImg src={"field-of-dreams-1.jpg"}></ProjectImg>
                    </ProjectMediaContainer>
                    <ProjectTools str={"Express.js, MySQL, Handlebars"} />
                </ProjectCard>

                <ProjectCard setMedia={mediaState.set} setActiveContent={activeContentGetSet.set} selectedProject={selectedProject} setSelectedProject={setSelectedProject} index={6} title={"Disproportionate Climate Change Vulnerability"} 
                tags={["Web","Data Visualization"]}>
                    <ProjectInfoContainer>
                        <ProjectTitle>The Unfair Reality of Climate Change Data Visualization</ProjectTitle>
                        <ProjectDetails year={2022} projectType={"Website"}
                                // links={[
                                //     {name: "Github", url:"https://github.com/Gpphelps/field-of-dreams"}
                                // ]}
                            ></ProjectDetails>
                            <ProjectText>In the style of a Vox article, this project seeks to highlight the reality that many of the countries that have contributed least to climate change are also the ones most vulnerable to its consequences. The website compares the CO2 emissions of 218 countries—taken as their relative responsibility for climate change—with various metrics that reflect how vulnerable they will be to its devastating effects. Some of these metrics include GDP, % of the population living below 5m above sea level, and the % of the population regularly exposed to extreme weather.</ProjectText>
                            <ProjectText>This relationship is presented in the form of a scatterchart and a world map. The full dataset is tabulated at the bottom.</ProjectText>
                            <ProjectText>The project was developed for an assignment in an interactive media course I took at UNC. We were tasked with using D3.js to create a data Visualization of some kind in the style of an existing news organization.</ProjectText>
                    </ProjectInfoContainer>
                    <ProjectMediaContainer>
                        <ProjectImg src="datavis-0.jpeg" />
                        <ProjectImg src="datavis-1.jpeg" />
                    </ProjectMediaContainer>

                    <ProjectMediaContainer>
                        <ProjectImg src="datavis-2.jpeg" />
                        <ProjectImg src="datavis-3.jpeg" />
                    </ProjectMediaContainer>
                    <ProjectTools str={"React.js, D3.js"} />
                </ProjectCard>
            </div>
        </div>
    );
}

export default Projects;