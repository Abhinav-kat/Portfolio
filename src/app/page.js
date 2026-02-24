"use client"; // Required for the click interactions

import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, GraduationCap, Briefcase, Award, ShieldCheck, Terminal, Globe, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('home');

  const projects = [
    {
      title: "AI Resume Analyzer",
      org: "Full Stack Development",
      date: "August 2025",
      desc: "Full-stack web app using Gemini AI to generate personalized resumes and interview feedback. Integrated Clerk for auth and Prisma with PostgreSQL.",
      tags: ["Next.js", "Gemini AI", "Tailwind CSS", "PostgreSQL"],
      link: "https://github.com/Abhinav-kat"
    },
    {
      title: "Emergency Dept. Comms Researcher",
      org: "UQ Thesis Project",
      date: "Feb 2025 – Nov 2025",
      desc: "Designed dashboard interface improvements for clinical handovers using ISBAR. Collaborated with PA Hospital and RBWH stakeholders.",
      tags: ["HCI", "UX Design", "Figma", "Prototyping"],
      link: "#"
    },
    {
        title: "Full Stack Scheduling App",
        org: "Project Lead",
        date: "October 2025",
        desc: "Built a real-time meeting booking platform with Google Calendar API. Managed role-based access and user availability logic.",
        tags: ["Node.js", "PostgreSQL", "Google API", "Express"],
        link: "https://github.com/Abhinav-kat"
      }
  ];

  const skillGroups = [
    { category: "Languages", skills: ["TypeScript", "JavaScript", "Python", "SQL", "C++", "Java"] },
    { category: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "MUI"] },
    { category: "Backend", skills: ["Node.js", "Express", "REST APIs", "Clerk", "MongoDB"] },
    { category: "Cloud & Concepts", skills: ["AWS", "GCP", "Agile", "SDLC", "CI/CD"] }
  ];

  // Helper for Nav Link styling
  const navLinkClass = (tabName) => `
    transition-all duration-300 relative pb-1
    ${activeTab === tabName 
      ? 'text-blue-500 after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500' 
      : 'text-slate-400 hover:text-white'
    }
  `;

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl px-6 py-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* ENHANCED NAME LOGO */}
          <a href="#" onClick={() => setActiveTab('home')} className="flex flex-col">
            <span className="font-black tracking-[ -0.05em] text-white uppercase text-2xl md:text-3xl leading-none">
              ABHINAV KATARIA
            </span>
            <span className="text-[10px] font-bold text-blue-500 tracking-[0.4em] mt-1 hidden md:block">SOFTWARE ENGINEER</span>
          </a>

          {/* DYNAMIC NAV LINKS */}
          <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
            <a 
                href="#work" 
                onClick={() => setActiveTab('work')} 
                className={navLinkClass('work')}
            >
                Work
            </a>
            <a 
                href="#about" 
                onClick={() => setActiveTab('about')} 
                className={navLinkClass('about')}
            >
                About
            </a>
                <a 
                href="/Abhinav_Kataria_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
            >
                Resume
            </a>
            <a 
                href="mailto:abhinav.kataria1000@gmail.com" 
                className="text-slate-400 hover:text-blue-400 transition-colors"
            >
                Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-56 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for 2026 Graduate Roles (485 Visa)
          </div>
          
          <h1 className="text-6xl md:text-[130px] font-black text-white tracking-tighter leading-[0.85] mb-10">
            SOFTWARE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400 italic">ENGINEER.</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-10 items-end">
            <p className="text-xl text-slate-400 leading-relaxed font-light border-l-2 border-blue-500 pl-6">
              Master of Computer Science (Management) graduate from <span className="text-white font-medium">UQ</span>. 
              Translating complex real-world problems into high-performance technical solutions.
            </p>
            <div className="flex gap-4 md:justify-end">
                <a href="https://linkedin.com/in/abhinavkataria" className="p-4 border border-white/10 rounded-full hover:bg-white/5 transition"><Linkedin size={20}/></a>
                <a href="https://github.com/Abhinav-kat" className="p-4 border border-white/10 rounded-full hover:bg-white/5 transition"><Github size={20}/></a>
                <a href="mailto:abhinav.kataria1000@gmail.com" className="p-4 border border-white/10 rounded-full hover:bg-white/5 transition"><Mail size={20}/></a>
            </div>
          </div>
        </div>
      </section>

     {/* Industry Experience: Goldman Sachs (Forage) */}
      <section className="py-24 border-y border-white/5 bg-gradient-to-r from-slate-900/50 to-transparent px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-[2px] w-12 bg-slate-500"></div>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 italic">Industry Training</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Goldman Sachs <br/><span className="text-blue-500">Virtual Experience</span></h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                    Completed a professional simulation via Forage, focusing on the technical standards used in high-stakes financial engineering. This program involved replicating real-world tasks assigned to GS cybersecurity analysts.
                </p>
                <div className="flex gap-6">
                    <div className="text-center border border-white/5 p-4 rounded-xl">
                        <p className="text-white font-bold text-xl uppercase tracking-tighter">Cracking</p>
                        <p className="text-[10px] text-slate-500 uppercase font-black">Password DBs</p>
                    </div>
                    <div className="text-center border border-white/5 p-4 rounded-xl">
                        <p className="text-white font-bold text-xl uppercase tracking-tighter">Security</p>
                        <p className="text-[10px] text-slate-500 uppercase font-black">Best Practices</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-white/5 p-1 rounded-2xl border border-white/10 w-full">
                <div className="bg-[#050505] rounded-xl p-8 flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                        <ShieldCheck className="text-slate-400" size={32} />
                        <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">FORAGE INTERNSHIP SERIES</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mt-4 uppercase tracking-tighter italic">Simulated Penetration Testing</h3>
                    <p className="text-xs text-slate-500 font-mono italic">"Applied cryptographic fundamentals to identify infrastructure vulnerabilities within a banking environment."</p>
                    <div className="mt-4 flex gap-2">
                        <span className="px-2 py-1 bg-slate-800 text-[9px] text-slate-400 font-bold rounded">CRYPTOGRAPHY</span>
                        <span className="px-2 py-1 bg-slate-800 text-[9px] text-slate-400 font-bold rounded">DATABASE SECURITY</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
              <h2 className="text-xs uppercase tracking-[0.4em] text-slate-500 font-black mb-4 italic">01 / Development</h2>
              <h3 className="text-5xl font-bold text-white tracking-tighter uppercase">Selected Work</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:-translate-y-2">
                <div className="mb-6 flex justify-between items-start">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                        {i % 2 === 0 ? <Code2 size={24}/> : <Briefcase size={24}/>}
                    </div>
                    <ChevronRight size={20} className="text-slate-700 group-hover:text-blue-500 transition-colors" />
                </div>
                <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">{project.org}</p>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:underline">{project.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-tighter text-slate-600 border border-white/5 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Bento */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.4em] text-slate-400 font-black mb-20">Full Stack Capabilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {skillGroups.map((group) => (
              <div key={group.category} className="border-t-2 border-black pt-6">
                <h3 className="text-xl font-black mb-6 uppercase tracking-tighter">{group.category}</h3>
                <ul className="space-y-3">
                  {group.skills.map(skill => (
                    <li key={skill} className="text-sm font-bold text-slate-600 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rotate-45" /> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="about" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-blue-500 font-black mb-12 italic">Academic Background</h2>
            <div className="space-y-16">
              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[5px] top-2 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">Master of Computer Science (Management)</h4>
                <p className="text-slate-400 text-lg mb-4 italic">University of Queensland | GPA 5.58/7</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] font-black uppercase tracking-widest rounded border border-yellow-500/20">
                    <Award size={14}/> Dean's Commendation
                </div>
              </div>
              <div className="relative pl-8 border-l border-white/10 opacity-60">
                <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">Bachelor of Engineering (CS)</h4>
                <p className="text-slate-400">Thapar Institute of Eng. & Tech. | GPA 7.64/10</p>
              </div>
            </div>
          </div>
          <div className="bg-white/[0.02] p-10 rounded-3xl border border-white/5">
            <h2 className="text-xs uppercase tracking-[0.3em] text-slate-500 font-black mb-8 italic">Key Details</h2>
            <div className="space-y-6">
                {[
                    {label: "Location", val: "Cranbourne, VIC, AU"},
                    {label: "Visa Status", val: "485 (Temporary Graduate)"},
                    {label: "Languages", val: "English, Hindi"},
                    {label: "Availability", val: "Immediate Start"}
                ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                        <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{item.label}</span>
                        <span className="text-white font-bold tracking-tight">{item.val}</span>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 px-6">
        <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs font-black uppercase tracking-[0.5em] text-slate-600 mb-8 italic">Connect with Abhinav</p>
            <div className="flex justify-center gap-12 mb-16">
                <a href="mailto:abhinav.kataria1000@gmail.com" className="text-white hover:text-blue-500 transition transform hover:scale-110"><Mail size={32}/></a>
                <a href="https://linkedin.com/in/abhinavkataria" className="text-white hover:text-blue-500 transition transform hover:scale-110"><Linkedin size={32}/></a>
                <a href="https://github.com/Abhinav-kat" className="text-white hover:text-blue-500 transition transform hover:scale-110"><Github size={32}/></a>
            </div>
            <p className="text-[10px] font-mono text-slate-700 uppercase tracking-widest">Designed and Built by Abhinav Kataria &copy; 2026</p>
        </div>
      </footer>
    </div>
  );
}