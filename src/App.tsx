import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { TimelineWorkflow } from './components/TimelineWorkflow';
import { Services } from './components/Services';
import { Achievements } from './components/Achievements';
import { ContactExport } from './components/ContactExport';
import { Footer } from './components/Footer';
import { Project } from './types';
import { playClick } from './utils/audioFx';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleOpenExportModal = () => {
    playClick();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    playClick();
    const workSection = document.getElementById('projects');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    playClick();
    setPreselectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestSimilar = (projectTitle: string) => {
    playClick();
    setPreselectedService(`Edit similar to: ${projectTitle}`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-nle-darkest text-slate-100 relative selection:bg-nle-cyan selection:text-black">
      {/* Ambient aurora mesh spanning the full scroll length */}
      <div id="site-aurora" />

      {/* Global Film Grain Texture Overlay */}
      <div className="fixed inset-0 film-grain pointer-events-none z-40 opacity-40" />

      {/* Top Application Header / Navbar */}
      <Navbar onOpenExportModal={handleOpenExportModal} />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section (Split-Screen NLE Interface) */}
        <Hero 
          onExploreWork={handleExploreWork} 
          onOpenExportModal={handleOpenExportModal} 
        />

        {/* 2. Inspector Panel + About Balaji */}
        <About onHireMe={handleOpenExportModal} />

        {/* 3. NLE Toolbar & Software Proficiency */}
        <Skills />

        {/* 4. Projects & Media Pool (All 20 Instagram Reels) */}
        <Projects onSelectProject={setSelectedProject} />

        {/* 5. Interactive Full-Width NLE Timeline & Workflow */}
        <TimelineWorkflow />

        {/* 6. Editorial Services & Production Packages */}
        <Services onSelectService={handleSelectService} />

        {/* 7. Achievements & SMVEC Culturals Award Banner */}
        <Achievements onContactClick={handleOpenExportModal} />

        {/* 8. NLE Render / Export Dialogue Contact Hub */}
        <ContactExport preselectedService={preselectedService} />
      </main>

      {/* Application Footer & Status Dock */}
      <Footer />

      {/* Lightbox / Source Monitor Modal for Instagram Reels */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onRequestSimilar={handleRequestSimilar}
        />
      )}
    </div>
  );
};

export default App;
