import React from 'react';
import TagLabel from './TagLabel';

function ContactAboutContent({}) {
    return (
        <div className='w-full pt-5 pb-5'>
            <div>
                <h1 className='text-stone-100 text-3xl'>About</h1>
                <hr className='mb-2 border-stone-700'></hr>
                <p className='text-stone-300 text-[1.0rem] mt-3 font-light font-body w-full tracking-wide'>My passion for creation has always been driven by my desire to transform imagined projects into reality. I have acquired all of my skills to bring projects to life, and the process of learning these skills has, in turn, inspired new endeavors, creating a continuous cycle. Over the past 10 years, I have gained experience in a variety of mediums, including video production, graphic design, 3D modeling and rendering, full-stack web development, and screen printing. Although I enjoy leveraging and combining all these skills, my primary focus these days is coding for the web.</p>
                <p className='text-stone-300 text-[1.0rem] mt-3 font-light font-body w-full tracking-wide'>In December 2023, I graduated from UNC Chapel Hill, where I studied at the Hussman School of Media and Journalism with a concentration in print and digital design. To further delve into development, I completed a Full-Stack Web Development bootcamp through UNC in the Spring of 2021. There, I learned to develop with a wide range of technologies, from backend server and database code to fully-featured front-end web applications. I am always experimenting and trying to build compelling and interesting projects for the web.</p>
            </div>
            <div className='mt-10'>
                {/* <h1 className='text-stone-100 text-3xl'>Contact</h1>  */}
                {/* <hr className='mb-2 border-stone-700'></hr> */}
                <div className='flex *:mr-5 flex-wrap'>
                    {/* <p className='text-stone-300 tracking-wide text-[0.9rem] font-light font-body cursor-pointer'><a  href="mailto:zackshersh@gmail.com" className='underline text-blue-500'>zackshersh@gmail.com</a></p>
                    <a target="_blank" className='text-yellow-300 tracking-wide text-[0.9rem] font-light font-body underline' href='https://www.linkedin.com/in/zachary-hersh-3a551b1a4/'>LinkedIn</a>
                    <br></br>
                    <a target="_blank" className='text-red-400 tracking-wide text-[0.9rem] font-light font-body underline' href='https://github.com/zackshersh'>GitHub</a> */}
                    <TagLabel name={"zackshersh@gmail.com"} customColor={"rgb(220 38 38)"} solid large link={"mailto:zackshersh@gmail.com"}/>
                    <TagLabel name={"LinkedIn"} customColor={"rgb(37 99 235)"} solid large link={"https://www.linkedin.com/in/zachary-hersh-3a551b1a4/"}/>
                    <TagLabel name={"Github"} customColor={"rgb(22 163 74)"} solid large link={"https://github.com/zackshersh"}/>
                </div>
            </div>
        </div>
    );
}

export default ContactAboutContent;