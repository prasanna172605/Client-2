import React, { useState } from 'react';
import { Eye, MapPin, Scale, X, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/contentData';

export default function ProjectsSection({ onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Commercial', 'Residential', 'Infrastructure'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="projects" className="projects-section overflow-hidden">
      <div className="container">
        {/* Section Header - Reveal Zoom */}
        <div className="center-header reveal-zoom">
          <div className="section-kicker">
            <span className="animated-line"></span>
            <span>OUR PORTFOLIO</span>
          </div>
          <h2 className="section-title">
            Our Projects<span className="dot glow-dot">.</span>
          </h2>
          <p className="section-subtitle">
            Explore our proven track record of successful rebar detailing, estimating, and 3D BIM coordination projects across North America and international markets.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="projects-filter-bar reveal-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with Staggered Zoom Reveal */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className={`project-card reveal-zoom delay-${(idx % 3) + 1} card-tilt`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image-box">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-img img-hover-zoom"
                  loading="lazy"
                />
                {/* Shine Sweep Overlay */}
                <div className="shine-overlay"></div>

                <div className="project-overlay">
                  <div className="overlay-content">
                    <span className="overlay-btn btn-shimmer">
                      <Eye size={18} />
                      <span>View Details</span>
                    </span>
                  </div>
                </div>
                <div className="project-category-badge">
                  {project.category}
                </div>
              </div>

              <div className="project-info">
                <div className="project-meta-row">
                  <span className="project-location">
                    <MapPin size={13} className="meta-icon" />
                    {project.location}
                  </span>
                  <span className="project-tonnage">
                    <Scale size={13} className="meta-icon" />
                    {project.tonnage}
                  </span>
                </div>

                <h3 className="project-title hover-color-yellow">
                  {project.title}
                </h3>
                <p className="project-scope-brief">
                  {project.scope}
                </p>

                <div className="project-card-footer">
                  <span className="read-more-text">
                    Read More <ArrowRight size={14} className="btn-arrow" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal with Smooth Zoom Entrance */}
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div className="modal-dialog modal-zoom-in" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
              >
                <X size={22} />
              </button>

              <div className="modal-body-grid">
                <div className="modal-img-col">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="modal-img"
                  />
                  <div className="modal-badge-row">
                    <span className="modal-tag">{selectedProject.category}</span>
                    <span className="modal-tag yellow">{selectedProject.tonnage}</span>
                  </div>
                </div>

                <div className="modal-info-col">
                  <span className="modal-kicker">PROJECT SPECIFICATIONS</span>
                  <h3 className="modal-title">{selectedProject.title}</h3>
                  <div className="modal-meta-list">
                    <div className="meta-item">
                      <strong>Location:</strong> {selectedProject.location}
                    </div>
                    <div className="meta-item">
                      <strong>Software Used:</strong> {selectedProject.software}
                    </div>
                    <div className="meta-item">
                      <strong>Scope of Detailing:</strong> {selectedProject.scope}
                    </div>
                  </div>

                  <p className="modal-desc">{selectedProject.desc}</p>

                  <div className="modal-actions">
                    <button 
                      onClick={() => {
                        setSelectedProject(null);
                        onOpenQuote();
                      }}
                      className="btn-yellow btn-shimmer"
                    >
                      <span>DISCUSS SIMILAR PROJECT</span>
                      <ArrowRight size={16} className="btn-arrow" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
