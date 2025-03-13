// pages/index.tsx
"use client"
import Head from 'next/head';
import { useState } from 'react';
import type { NextPage } from 'next';

import FloatingShareButton from "@/components/FloatingShareButton";

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState<string>('experience');

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Janmejaya Das | Software Engineer</title>
        <meta name="description" content="Personal portfolio of Janmejaya Das, Software Engineer with 12 years of experience in backend technologies, cloud migrations, and system optimizations." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Refined Compact Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white border-b border-blue-400">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Profile image moved to left side for better layout */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-800 rounded-full overflow-hidden border-2 border-blue-300 shadow-md flex-shrink-0">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 text-white text-xl md:text-2xl font-bold">
                  JD
                </div>
              </div>
              
              <div>
                <div className="flex items-baseline gap-2">
                  <h1 className="text-2xl md:text-3xl font-bold">Janmejaya Das</h1>
                  <span className="hidden md:inline-block w-1 h-1 bg-blue-300 rounded-full"></span>
                  <h2 className="hidden md:block text-sm md:text-base font-light text-blue-200">Software Engineer</h2>
                </div>
                <h2 className="md:hidden text-sm font-light text-blue-200 mb-1">Software Engineer</h2>
                <p className="text-blue-100 text-xs md:text-sm max-w-xl leading-snug">
                  12+ years of experience in backend technologies, system architecture, cloud migrations, and optimizing systems for scalability and efficiency
                </p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-3">
              <a 
                href="mailto:janmejaya.das1@gmail.com" 
                className="bg-blue-800 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium border border-blue-600 transition-colors"
              >
                Email
              </a>
{/*               <a 
                href="https://github.com/janmejaya-das" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-800 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium border border-blue-600 transition-colors"
              >
                GitHub
              </a> */}
              <a 
                href="https://linkedin.com/in/janmejaya-das" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-800 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium border border-blue-600 transition-colors"
              >
                LinkedIn
              </a>
              {/* Floating Share Button only for this page */}
            </div>
            
            {/* Mobile social links */}
            <div className="flex md:hidden gap-2">
              <a 
                href="mailto:janmejaya.das1@gmail.com" 
                className="w-8 h-8 flex items-center justify-center bg-blue-800 hover:bg-blue-700 text-white rounded border border-blue-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
{/*               <a 
                href="https://github.com/janmejaya-das" 
                className="w-8 h-8 flex items-center justify-center bg-blue-800 hover:bg-blue-700 text-white rounded border border-blue-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a> */}
              <a 
                href="https://linkedin.com/in/janmejaya-das" 
                className="w-8 h-8 flex items-center justify-center bg-blue-800 hover:bg-blue-700 text-white rounded border border-blue-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
          


      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b">
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'experience' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'skills' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'education' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'achievements' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('achievements')}
          >
            Achievements
          </button>
        </div>

        {/* Experience Section */}
        <div className={activeTab === 'experience' ? 'block' : 'hidden'}>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Professional Experience</h2>
          
          <div className="space-y-8">
            {/* Microsoft */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Microsoft Intune Service Modernization Team</h3>
                  <p className="text-gray-600 mb-4">Software Engineer</p>
                </div>
                <span className="text-gray-500 text-sm">Dec 2022 - Present</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>• Engineered service modernization for 50+ microservices in Intune, transforming Stateful services into a robust Stateless architecture.</li>
                <li>• Refactored 20+ components across multiple microservices, freeing up over 300 TB of memory.</li>
                <li>• Implemented runtime configuration deployment for improved flexibility and faster updates.</li>
                <li>• Enabled onboarding of all microservices and the monolith to the new Switzerland region.</li>
                <li>• Mentored a team of 7, led onboarding sessions, facilitated knowledge-sharing workshops, and developed PoCs.</li>
              </ul>
            </div>

            {/* Amazon */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Amazon Seller Registration & KYC Team</h3>
                  <p className="text-gray-600 mb-4">Software Development Engineer</p>
                </div>
                <span className="text-gray-500 text-sm">Aug 2021 - Nov 2022</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>• Designed and implemented the Dormancy Reactivation and Lifetime Verification flow for sellers across multiple products.</li>
                <li>• Architected and executed the decoupling of a monolithic registration web service into modular components.</li>
                <li>• Automated the deployment stack setup for 11 existing services, enabling seamless one-click rollouts to new AWS regions.</li>
              </ul>
            </div>

            {/* Razorpay */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Razorpay Payment Apps Team</h3>
                  <p className="text-gray-600 mb-4">Software Engineer</p>
                </div>
                <span className="text-gray-500 text-sm">Dec 2019 - Aug 2021</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>• Developed merchant-facing payment features using Java and GoLang, reducing response times by a factor of seven.</li>
                <li>• Spearheaded CI/CD implementation with Spinnaker, Docker, and Kubernetes.</li>
                <li>• Mentored a team of 3, streamlining the development of subscription and charge-at-will microservices.</li>
              </ul>
            </div>

            {/* Earlier Experience - Collapsed */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <details>
                <summary className="text-xl font-bold text-gray-800 cursor-pointer">Earlier Experience (2013-2019)</summary>
                <div className="mt-4 space-y-6">
                  {/* Ivy Comptech */}
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-gray-800">Ivy Comptech User Flow Game Portal Team</h3>
                      <span className="text-gray-500 text-sm">Mar 2019 - Dec 2019</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li>• Optimized KYC workflows and offline user updates, ensuring compliance and system stability.</li>
                    </ul>
                  </div>

                  {/* Oracle */}
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-gray-800">Oracle Work-Life Team and Oracle GRC Team</h3>
                      <span className="text-gray-500 text-sm">Nov 2015 - Mar 2019</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li>• Designed and developed a microservices-based application for on-premise and cloud environments.</li>
                      <li>• Implemented I18n and L10n for enhanced user experience and built a batch job framework.</li>
                      <li>• Led development from scratch, mentoring SDEs and QA teams as a principal team member.</li>
                    </ul>
                  </div>

                  {/* Infosys */}
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-gray-800">Infosys Multiple Teams</h3>
                      <span className="text-gray-500 text-sm">Apr 2013 - Aug 2015</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li>• Automated testing and developed ETL tools, cutting costs and enhancing data integrity.</li>
                      <li>• Built in-house tools to streamline testing, facilitate bug detection, and ensure data validation.</li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className={activeTab === 'skills' ? 'block' : 'hidden'}>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Technical Proficiencies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Languages */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-blue-600 mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'React', '.NET', 'SQL', 'KQL', 'Python', 'Shell Scripts', 'PHP'].map((skill) => (
                  <span key={skill} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks/Tools */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-green-600 mb-4">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Service Fabric', 'Spring Boot', 'Jenkins', 'Docker', 'Kubernetes', 'Redis', 'Kafka', 'Grafana'].map((skill) => (
                  <span key={skill} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud Expertise */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-purple-600 mb-4">Cloud Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {['Azure', 'AWS'].map((skill) => (
                  <span key={skill} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Concepts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-red-600 mb-4">Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {['System Design', 'Microservices', 'DevOps', 'Data Structures', 'Performance Optimization', 'Issue Resolution'].map((skill) => (
                  <span key={skill} className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Methodologies */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-amber-600 mb-4">Methodologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Agile', 'Test-Driven Development'].map((skill) => (
                  <span key={skill} className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className={activeTab === 'education' ? 'block' : 'hidden'}>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Education</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">M.Tech in Software Systems</h3>
                  <p className="text-gray-600">BITS Pilani - Work Integrated</p>
                </div>
                <span className="text-gray-500">2024 - Present</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Bachelor of Technology in IT</h3>
                  <p className="text-gray-600">Biju Patnaik University of Technology, Rourkela</p>
                </div>
                <span className="text-gray-500">2008 - 2012</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className={activeTab === 'achievements' ? 'block' : 'hidden'}>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Recognitions & Achievements</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Microsoft Recognition</h3>
              <p className="text-gray-700">
                Delivered critical components and resolved complex issues, earning recognition from senior Microsoft colleagues.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Cross-Team Collaboration</h3>
              <p className="text-gray-700">
                Recognized across multiple teams and services for leading large-scale migrations and driving service modernization with impactful technical expertise.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Documentation Excellence</h3>
              <p className="text-gray-700">
                Received accolades for creating onboarding documents that enabled faster, smoother integration with fewer mistakes, and for assisting team members and others in resolving unknown issues.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Janmejaya Das</h2>
              <p className="text-gray-400">Software Engineer</p>
            </div>
            <div className="flex flex-col">
              <a href="mailto:janmejaya.das1@gmail.com" className="text-gray-300 hover:text-white mb-1">janmejaya.das1@gmail.com</a>
              <div className="flex justify-center md:justify-end space-x-2 mt-2">
                <a href="tel:+918074794024" className="text-gray-300 hover:text-white">+91 8074 794 024</a>
                <span className="text-gray-500">|</span>
                <a href="tel:+917207436461" className="text-gray-300 hover:text-white">+91 7207 436 461</a>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Janmejaya Das. All rights reserved.
          </div>
        </div>
      </footer>
      <FloatingShareButton />
    </div>
  );
};

export default Home;
