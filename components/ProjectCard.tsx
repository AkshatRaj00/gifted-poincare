// src/components/ProjectCard.tsx
import React from "react";
// import Link from 'next/link'; // Link ab use nahi ho raha, isliye isko hata diya

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubLink,
}) => {
  return (
    <div className="bg-purple-800 p-6 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 flex flex-col justify-between">
      <div>
        <h4 className="text-2xl font-bold mb-3">{title}</h4>
        <p className="opacity-90 text-sm">{description}</p>
      </div>
      <div className="mt-4 text-center">
        {/* Yahan Link component ki jagah <a> tag use kiya hai jaisa code mein tha */}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 inline-block text-sm"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
