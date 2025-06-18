import React, { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { ArrowUpCircle } from "lucide-react";
import {
  FaGlobe,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { Sling as Hamburger } from 'hamburger-react'

import ProfileCard from "../../ProfileCard";
import pic from "../../pic.jpg";
import "./Navbar.css";
import "../../index.css";
import html from "../icons/html.png";
import css from "../icons/css.png";
import js from "../icons/js.png";
import react from "../icons/Reactjs.png";
import node from "../icons/nodejs.svg";
import express from "../icons/Express.svg";
import next from "../icons/nextjs.svg";

import tailwind from "../icons/Tailwind CSS.svg";
import bootstrap from "../icons/Bootstrap.svg";
import mongodbAtlas from "../icons/mongodb.svg";
import sql from "../icons/mysql.png";
import postgre from "../icons/postgre.png";
import figma from "../icons/figma.png";
import xd from "../icons/xd.png";
import spline from "../icons/Spline.png";
import postman from "../icons/postman.svg";
import fast from "../icons/FastAPI.svg";
import graphql from "../icons/GraphQL.svg";
import typescript from "../icons/typescript.png";
import socket from "../icons/Socket.io.svg";
import docker from "../icons/Docker.svg";

import python from "../icons/python.png";
import cpp from "../icons/cpp.png";

import clang from "../icons/c.svg";
import rust from "../icons/rust.svg";
import wireshark from "../icons/wireshark.png";
import Metasploit from "../icons/Metasploit.svg";
import burp from "../icons/burpsuite.svg";
import linux from "../icons/Linux.svg";
import resume from "../../../public/Ritam_Koley_resume_.pdf";

import pw from "../icons/pw.jpeg";
import iit from "../icons/iit_k.png";

const Navbar: React.FC = () => {
  type SkillIconProps = {
    src: string;
    alt: string;
    className?: string;
  };

  const SkillIcon = ({ src, alt, className = "" }: SkillIconProps) => (
  <div
    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center transition duration-300 ease-in-out
            hover:bg-white hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.7)] ${className}`}
  >
    <img
      src={src}
      alt={alt}
      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
    />
  </div>
);


  const roles = [
    "A Software Developer",
    "An AI Enthusiast",
    "An UI/UX Designer",
    "A CyberSec Analyst",
  ];

  const typeRef = useRef<HTMLHeadingElement>(null);
  const splineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = typeRef.current;
    if (!el) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const current = roles[roleIndex];
      el.textContent = current.substring(0, charIndex);

      if (!isDeleting) {
        if (charIndex < current.length) {
          charIndex++;
          setTimeout(type, 100);
        } else {
          isDeleting = true;
          setTimeout(type, 2000);
        }
      } else {
        if (charIndex > 0) {
          charIndex--;
          setTimeout(type, 50);
        } else {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(type, 300);
        }
      }
    };

    type();
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="w-full overflow-x-hidden overflow-y-clip relative"
      style={{
        background:
          "linear-gradient(135deg, #000000 0%, #120018 30%, rgb(35, 2, 45) 45%, rgb(30, 1, 35) 50%,rgb(7, 1, 21) 100%, #0d0015 100%)",
      }}
    >
      
       {/* Spline Background Section */}
      <section
  ref={splineRef}
  className="spline_bg relative w-full h-[74vh]  md:h-[65vh] lg:h-[100vh] overflow-hidden inset-0"
>
        
  {/* For small screens */}
  <div className="absolute inset-0 z-10 top-[5rem] block sm:hidden h-[66vh]">
    <Spline scene="https://prod.spline.design/7dBWe4UUqZNoll1r/scene.splinecode" />
  </div>

  {/* For medium screens */}
  <div className=" absolute inset-0 z-10 top-[5rem] hidden sm:block md:hidden">
    <Spline scene="https://prod.spline.design/yEQTcGVmD6jnj-a6/scene.splinecode" />
  </div>
  <div className="hidden md:block mid:hidden top-[5rem] w-full h-full">
    <Spline scene="https://prod.spline.design/2ovxCXNuL9jIHKGT/scene.splinecode" />
  </div>

  {/* For large and up */}
  <div className=" absolute inset-0 z-10 top-[5rem] hidden md:block">
    <Spline scene="https://prod.spline.design/12S761xrKiB6d3ao/scene.splinecode" />
  </div>


        

        <div className="nav relative w-full z-50">
  <div className="w-full flex items-center justify-between px-4 md:px-16 mt-3">
    <div className="flex items-center space-x-3 py-2">
  <div className="profile bg-white rounded-full w-[2.5rem] h-[2.5rem] md:w-[5rem] md:h-[5rem]"></div>
  <h4 className="name whitespace-nowrap text-white text-2xl hidden sm:block px-4 font-medium">
    Ritam Koley
  </h4>
</div>


    {/* Hamburger (≤1300px only) */}
    <div className="hidden max-[1300px]:flex justify-end w-full ">
      <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={28} direction="left" />
    </div>

    {/* Right: Buttons (shown above 1300px only) */}
    <div className="hidden min-[1301px]:flex flex-row-reverse space-x-8 space-x-reverse -mx-5">
      <div className="container" style={{ width: 108, height: 45 }}>
        <a href="#contact" className="text-white bg-black px-4 py-2 rounded inline-block transition duration-300">
          Contact
        </a>
      </div>
      <div className="container" style={{ width: 160, height: 45 }}>
        <a href="#achievements" className="text-white bg-black px-4 py-2 rounded inline-block transition duration-300">
          Achievements
        </a>
      </div>
      <div className="container" style={{ width: 106, height: 45 }}>
        <a href={resume} download>
          <button className="text-white bg-black px-4 py-2 rounded">
            Resume
          </button>
        </a>
      </div>
      <div className="container" style={{ width: 112, height: 45 }}>
        <a href="#projects" className="text-white bg-black px-4 py-2 rounded inline-block transition duration-300">
          Projects
        </a>
      </div>
      <div className="container" style={{ width: 188, height: 45 }}>
        <a href="#work-experience" className="text-white bg-black px-4 py-2 rounded inline-block transition duration-300">
          Work Experience
        </a>
      </div>
      <div className="container" style={{ width: 83, height: 45 }}>
        <a href="#skills" className="text-white bg-black px-4 py-2 rounded inline-block transition duration-300">
          Skills
        </a>
      </div>
    </div>
  </div>

  {/* Mobile Dropdown (≤1300px only) */}
  {menuOpen && (
    <div className="max-[1300px]:flex hidden absolute top-[6.5rem] left-0 w-full bg-black bg-opacity-90 py-4 flex-col items-center gap-4 z-40">
      <a href="#skills" onClick={() => setMenuOpen(false)} className="text-white bg-black px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 hover:bg-opacity-90 active:scale-95">
        Skills
      </a>
      <a href="#work-experience" onClick={() => setMenuOpen(false)} className="text-white bg-black px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 hover:bg-opacity-90 active:scale-95">
        Work Experience
      </a>
      <a href="#projects" onClick={() => setMenuOpen(false)} className="text-white bg-black px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 hover:bg-opacity-90 active:scale-95">
        Projects
      </a>
      <a href={resume} download onClick={() => setMenuOpen(false)} className="text-white bg-black px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 hover:bg-opacity-90 active:scale-95">
        Resume
      </a>
      <a href="#achievements" onClick={() => setMenuOpen(false)} className="text-white bg-black px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 hover:bg-opacity-90 active:scale-95">
        Achievements
      </a>
      <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white bg-black px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 hover:bg-opacity-90 active:scale-95">
        Contact
      </a>
    </div>
  )}
</div>


      </section>
       {/* Hero Section */}
      <section className="info min-h-screen flex flex-col [@media(min-width:1700px)]:flex-row items-center justify-between px-4 sm:px-6 pt-20 relative z-20">
  <div className="typewriter flex-1 text-center [@media(min-width:1700px)]:text-left px-4 sm:px-6 md:px-12 lg:px-20">
    <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl flex justify-center items-center gap-4">
        Hi, Everyone
        <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-purple-500 waving-hand">👋</span>
      </h1>

      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center">I am Ritam Koley</h1>
    </div>

    <div className="mt-4 flex justify-center min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem]">
      <h1
        ref={typeRef}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-white to-indigo-500"
      ></h1>
    </div>
  </div>

  <div
    className="flex-1 flex justify-center items-start mt-4 [@media(min-width:1700px)]:mt-0 px-4 sm:px-6"
    onClick={() => window.open('https://github.com/Ritam-23', '_blank')}
    style={{ cursor: 'pointer' }}
  >
    <ProfileCard
      name="Ritam Koley"
      title="Software Engineer"
      handle="Ritam"
      status="Online"
      onContactClick={() => console.log('Contact clicked')}
      contactText="Github"
      showUserInfo={true}
      enableTilt={true}
      avatarUrl={pic}
    />
  </div>
</section>







      {/* Skills section */}
      
      <section id="skills" className="skills  py-12 mb-4">
  <div className="skills-container text-white mb-24 mx-6 md:ml-12 lg:mx-16 sm:px-12">
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-white via-20% to-indigo-800 mb-16">
      Skills
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
      {/* Web Development */}
      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl font-semibold mb-12">Web Development</h3>
        <div className="grid gap-10 lg:gap-16 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-4">

          {[
            html, css, js, typescript, node,
            react, express, next, socket,
            tailwind, bootstrap, mongodbAtlas, sql, postgre,
            fast, postman, graphql, docker
          ].map((icon, idx) => (
            <SkillIcon
              key={idx}
              src={icon}
              alt="Skill"
              className="bg-white w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12
                lg:w-12 lg:h-12 xl:w-13 xl:h-13"
            />
          ))}
        </div>
      </div>

      {/* Cybersecurity */}
      <div className="space-y-4 md:ml-10 ">
        <h3 className="text-2xl md:text-3xl font-semibold lg:ml-10 mb-12">CyberSec Tools</h3>
        <div className="grid gap-16 lg:gap-14 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-4  lg:ml-6">

          {[burp, wireshark, Metasploit, linux].map((icon, idx) => (
            <SkillIcon
              key={idx}
              src={icon}
              alt="Skill"
              className="bg-white w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12
                  lg:w-12 lg:h-12 xl:w-13 xl:h-13"
            />
          ))}
        </div>
      </div>



      {/* Coding Languages */}
      <div className="space-y-4 ">
        <h3 className="text-2xl md:text-3xl font-semibold mb-12 lg:ml-10">Coding Languages</h3>
        <div className="grid gap-16 sm:gap-10 lg:gap-12 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-4 lg:ml-8 ">

          {[clang, cpp, python, rust].map((icon, idx) => (
            <SkillIcon
              key={idx}
              src={icon}
              alt="Skill"
              className="bg-white w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12
              lg:w-12 lg:h-12 xl:w-13 xl:h-13"
            />
          ))}
        </div>
      </div>
{/* UI/UX Design */}
      <div className="space-y-4 ">
        <h3 className="text-2xl md:text-3xl font-semibold mb-12 lg:ml-20">UI/UX Design</h3>
        <div className="grid gap-12 lg:gap-14 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-4 lg:ml-14">
           {[figma, xd, spline].map((icon, idx) => (
            <SkillIcon
              key={idx}
              src={icon}
              alt="Skill"
              className="bg-white w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-13 xl:h-13"
            />
          ))}
        </div>
      </div>
      
    </div>
  </div>
</section>

      {/* Work Experience Section */}
<section id="work-experience" className="work-experience mb-40 mx-6 -mt-10 md:ml-12 lg:mx-16 sm:px-12">
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-white to-indigo-800 mb-16 pt-12">
    Work Experience
  </h2>

  <div className="grid grid-cols-1 gap-8 w-full md:w-[100%] sm:w-[100%]">
    {/* IIT Kanpur Internship */}
    <div className="relative p-4 md:p-6 bg-white/20 rounded-lg shadow-lg hover:shadow-[0_0_20px_4px_rgba(128,0,255,0.4)] transition-shadow duration-300 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white">
          Summer Research Intern
        </h3>
        <div
          className="h-[3rem] sm:h-[4rem] md:h-[5rem] w-[3rem] sm:w-[4rem] md:w-[5rem] rounded-full bg-cover bg-center bg-white iit_k shrink-0"
          style={{ backgroundImage: `url(${iit})` }}
        ></div>
      </div>
      <p className="text-gray-300 text-sm sm:text-base">IIT Kanpur</p>
      <p className="text-gray-400 text-xs sm:text-sm mb-2">May 2025 - July 2025</p>
      <ul className="list-disc list-inside text-white/80 text-xs sm:text-sm md:text-base space-y-1">
        <li>Worked on Secure Multiparty Computation</li>
        <li>Gained proficiency in Rust Language</li>
        <li>Developed a library in Rust Language for Secure MPC implementation</li>
      </ul>
    </div>

    {/* PW JEE Mentor */}
    <div className="relative p-4 md:p-6 bg-white/30 rounded-lg shadow-lg hover:shadow-[0_0_20px_4px_rgba(128,0,255,0.4)] transition-shadow duration-300 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white">
          JEE Mentor
        </h3>
        <div
          className="h-[3rem] sm:h-[4rem] md:h-[5rem] w-[3rem] sm:w-[4rem] md:w-[5rem] rounded-full bg-contain bg-center bg-white iit_k shrink-0"
          style={{ backgroundImage: `url(${pw})` }}
        ></div>
      </div>
      <p className="text-gray-300 text-sm sm:text-base">PhysicsWallah</p>
      <p className="text-gray-400 text-xs sm:text-sm mb-2">July 2024 - September 2024</p>
      <ul className="list-disc list-inside text-white/80 text-xs sm:text-sm md:text-base space-y-1">
        <li>Mentored over 250 students in PCM for JEE Mains and Advanced</li>
        <li>Designed personalized study plans & strategies</li>
        <li>Built confidence through feedback and motivation</li>
      </ul>
    </div>
  </div>
</section>



      {/* Projects Section */}
        <section id="projects" className="projects mb-36
         mx-6 md:ml-12 lg:mx-16 sm:px-12 ">
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-white to-indigo-800 mb-16 pt-12">
    Projects
  </h2>

  <div className="grid grid-cols-1 gap-8 w-full md:w-[100%] sm:w-[100%]">
    {/* AQI Project */}
    <div className="relative p-4 md:p-6 bg-white/30 rounded-lg shadow-lg hover:shadow-[0_0_20px_4px_rgba(128,0,255,0.4)] transition-shadow duration-300">
      <a
        href="https://github.com/Ritam-23/AQI-LEVEL-PREDICTION"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-5 right-6 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:text-purple-400"
      >
        <FaGithub />
      </a>
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3">
        AQI Analyzer
      </h3>
      <ul className="list-disc list-inside text-white/80 text-xs sm:text-sm md:text-base space-y-1">
        <li>Predicts AQI using machine learning techniques</li>
        <li>Real-time AQI monitoring dashboard</li>
        <li>Helps assess pollution impact and take timely actions</li>
      </ul>
    </div>

    {/* Flipkart Grid Project */}
    <div className="relative p-4 md:p-6 bg-white/30 rounded-lg shadow-lg hover:shadow-[0_0_20px_4px_rgba(128,0,255,0.4)] transition-shadow duration-300">
      <div className="absolute top-6 right-6 flex space-x-6 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        <a
          href="https://flip-gears.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          <FaGlobe />
        </a>
        <a
          href="https://github.com/Ritam-23/FlipGears"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          <FaGithub />
        </a>
      </div>

      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 mt-2">
        Flipkart Grid 6.0 
      </h3>
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 mt-2">
        (FlipGears)
      </h3>
      <ul className="list-disc list-inside text-white/80 text-xs sm:text-sm md:text-base space-y-1">
        <li>Detects product freshness using image processing</li>
        <li>Brand detection from packaging via AI models</li>
        <li>Identifies and rejects expired products in supply chain</li>
      </ul>
    </div>

    {/* Key Logger */}
    <div className="relative p-4 md:p-6 bg-white/30 rounded-lg shadow-lg hover:shadow-[0_0_20px_4px_rgba(128,0,255,0.4)] transition-shadow duration-300">
      <a
        href="https://github.com/Ritam-23/Key-Logger"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-5 right-6 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:text-purple-400"
      >
        <FaGithub />
      </a>
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3">
        Key Logger 
      </h3>
      <ul className="list-disc list-inside text-white/80 text-xs sm:text-xs md:text-base space-y-1">
        <li>Records keyboard input in background</li>
        <li>Stores logs locally in a text file</li>
        <li>Useful for monitoring and educational use</li>
      </ul>
    </div>
  </div>
</section>




       {/* Achievements Section */}
      <section
  id="achievements"
  className="achievements mb-0 pb-0 mx-6 md:px-20 translate-y-0 sm:translate-y-16 lg:-translate-y-4"
>

  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-white to-indigo-800 mb-12 pt-16 text-center md:text-left">
    Achievements
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 text-gray-200 text-base sm:text-lg w-full">
    <div className="bg-white/20 border border-white/10 rounded-xl p-6 backdrop-blur-lg hover:scale-[1.02] hover:shadow-[0_0_20px_4px_rgba(128,0,255,0.4)] transition-shadow duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-2">
        Flipkart Robotics Grid 6.0
      </h3>
      <p>
        Pre-Finalist among national competitors in the software
        development and problem-solving track.
      </p>
    </div>

    <div className="bg-white/20 border border-white/10 rounded-xl p-6 backdrop-blur-lg hover:scale-[1.02] hover:shadow-[0_0_20px_4px_rgba(128,0,255,0.4)] transition-shadow duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-2">
        BuzzEarth Hackathon – IIT Kanpur
      </h3>
      <p>
        Pre-Finalist in the prestigious national hackathon organized at
        IIT Kanpur by BuzzEarth.
      </p>
    </div>

    <div className="bg-white/20 border border-white/10 rounded-xl p-6 backdrop-blur-lg hover:scale-[1.02] transition col-span-1 sm:col-span-2 hover:shadow-[0_0_20px_4px_rgba(128,0,255,0.4)] transition-shadow duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-4">
        Data Structures & Algorithms
      </h3>
      <p className="mb-4">
        Solved over{" "}
        <span className="text-white font-semibold">
          500+ DSA problems
        </span>{" "}
        on:
      </p>
      <div className="flex flex-col space-y-4 mt-4 text-lg sm:text-xl">
        <div className="flex items-center space-x-3">
          <SiLeetcode className="text-yellow-400 text-2xl sm:text-3xl" />
          <a
            href="https://leetcode.com/u/RitamKoley/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LeetCode (@RitamKoley)
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <SiGeeksforgeeks className="text-green-500 text-2xl sm:text-3xl" />
          <a
            href="https://www.geeksforgeeks.org/user/koleyriti9g1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            GeeksforGeeks (@koleyriti9g1)
          </a>
        </div>
      </div>
    </div>

    <div className="bg-white/20 border border-white/10 rounded-xl p-6 backdrop-blur-lg hover:scale-[1.02] hover:shadow-[0_0_20px_4px_rgba(128,0,255,0.4)] transition-shadow duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-2">
        NSEC 2023
      </h3>
      <p>
        Achieved{" "}
        <span className="text-white font-semibold">State Rank 10</span> in
        National Standard Examination in Chemistry (NSEC).
      </p>
    </div>

    <div className="bg-white/20 border border-white/10 rounded-xl p-6 backdrop-blur-lg hover:scale-[1.02] hover:shadow-[0_0_20px_4px_rgba(128,0,255,0.4)] transition-shadow duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-2">
        JEE 2023
      </h3>
      <p>
        Secured rank in the{" "}
        <span className="text-white font-semibold">Top 1%</span> in JEE
        Advanced and{" "}
        <span className="text-white font-semibold">Top 0.5%</span> in JEE
        Main.
      </p>
    </div>
  </div>
</section>



      {/* Contact Section */}

      <section
  id="contact"
  className="contact min-h-[30vh] mt-32 h-[70rem]overflow-x-hidden relative flex flex-col"
>
  <div className="ml-6 sm:ml-10 md:ml-24 lg:ml-24 z-10 relative">
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-white to-indigo-800 mb-10 sm:mb-14">
      Contact
    </h2>

    <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
      Feel free to reach out for collaborations, inquiries, or just a chat!
    </p>

    <div className="space-y-6 text-sm sm:text-base flex flex-col items-start w-full sm:w-4/5 md:w-3/5 lg:w-1/2">
      <div className="group flex items-center space-x-5 hover:scale-105 transform transition duration-300">
        <FaEnvelope className="text-xl sm:text-2xl text-white drop-shadow-md group-hover:text-purple-300 transition duration-300" />
        <a
          href="mailto:koleyritam2005@gmail.com"
          className="text-blue-400 group-hover:text-white underline-offset-4 hover:underline transition duration-300"
        >
          koleyritam2005@gmail.com
        </a>
      </div>

      <div className="group flex items-center space-x-5 hover:scale-105 transform transition duration-300">
        <FaLinkedinIn className="text-xl sm:text-2xl text-white drop-shadow-md group-hover:text-purple-300 transition duration-300" />
        <a
          href="https://www.linkedin.com/in/ritam-koley-65599a210/"
          className="text-blue-400 group-hover:text-white underline-offset-4 hover:underline transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ritam Koley
        </a>
      </div>

      <div className="group flex items-center space-x-5 hover:scale-105 transform transition duration-300">
        <FaGithub className="text-xl sm:text-2xl text-white drop-shadow-md group-hover:text-purple-300 transition duration-300" />
        <a
          href="https://github.com/Ritam-23"
          className="text-blue-400 group-hover:text-white underline-offset-4 hover:underline transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ritam-23
        </a>
      </div>

      <div className="group flex items-center space-x-5 hover:scale-105 transform transition duration-300">
        <FaInstagram className="text-xl sm:text-2xl text-white drop-shadow-md group-hover:text-purple-300 transition duration-300" />
        <a
          href="https://www.instagram.com/ritam_koley_10/"
          className="text-blue-400 group-hover:text-white underline-offset-4 hover:underline transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ritam_koley_10
        </a>
      </div>
    </div>
  </div>

<div className="w-full flex justify-end sm:flex md:hidden -mt-32 translate-x-24">
  <div className="w-[30rem] h-[25rem]">
    <Spline scene="https://prod.spline.design/YhxdZZw0l2UyWFyU/scene.splinecode" />
  </div>
</div>

<div className="w-full flex justify-end hidden md:flex lg:hidden -mt-10 translate-x-20">
  <div className="w-[32rem] h-[25rem]">
    <Spline scene="https://prod.spline.design/zHujjrCrLK3hpIte/scene.splinecode" />
  </div>
</div>


  <div className="w-full justify-end -translate-y-28 hidden lg:flex translate-x-8">
    <div className="w-[45rem] h-[30rem] xl:w-[52rem] xl:h-[32rem]">
      <Spline scene="https://prod.spline.design/G-zE45EfmyvJzI4y/scene.splinecode" />
    </div>
  </div>
</section>

<section className="w-full flex flex-col items-center justify-center gap-2 relative pb-10">
  <div className="w-[80%] h-[2px] bg-yellow-400 opacity-80 rounded-full" />

  <div className="relative -top-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-purple-500 shadow-lg shadow-purple-500/40 overflow-hidden">
    <img
      src={pic}
      alt="Ritam Koley"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="text-center">
    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
      Made by Ritam Koley
    </h3>
    <p className="text-xs sm:text-sm text-gray-400">
      © {new Date().getFullYear()} All rights reserved.
    </p>
  </div>
</section>




{/* Footer */}





       {/* Scroll to Top Button */}
      <button
  onClick={() =>
    splineRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
  className="fixed bottom-6 right-4 md:bottom-8 md:right-6 z-50 bg-gradient-to-r from-pink-500 via-white to-indigo-500 text-black p-2 md:p-3 rounded-full shadow-2xl hover:scale-110 active:scale-110 transition-transform duration-300 ease-in-out"
>
  <ArrowUpCircle className="w-6 h-6 md:w-8 md:h-8" />
</button>

    </div>
  );
};

export default Navbar;
