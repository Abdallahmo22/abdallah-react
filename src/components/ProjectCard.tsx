import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectType } from '../types/project';
import { buttonStyles } from '../styles/buttonStyles';

interface ProjectCardProps {
  project: ProjectType;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm transition-all duration-300 hover:bg-indigo-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a href={project.github} className={buttonStyles.card}>
            <Github className="h-5 w-5" />
            <span>Code</span>
          </a>
          <a href={project.live} className={buttonStyles.card}>
            <ExternalLink className="h-5 w-5" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}