"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";

import { FloatingDock } from "../ui/floating-dock";
import SmoothScroll from "../smooth-scroll";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

import projects, { Project } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto md:h-[130vh]">
      <SectionHeader id="projects" title="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectModal key={project.title} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectModal = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center">
          <div
            className="relative w-[400px] rounded-lg overflow-hidden"
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              src={project.src}
              alt={project.title}
              width={400}
              height={300}
              className="absolute inset-0 w-full h-full object-cover transition-transform hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent">
              <div className="flex flex-col h-full justify-end p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span className="text-xs bg-white text-black rounded px-2 w-fit mt-1">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        </ModalTrigger>

        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>

          <ModalFooter className="gap-4">
            <button className="px-3 py-1 text-sm border rounded-md">
              Close
            </button>

            <Link href={project.live} target="_blank">
              <button className="px-3 py-1 text-sm bg-black text-white rounded-md">
                Visit
              </button>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-2xl font-bold text-center mb-6">
        {project.title}
      </h4>

      <div className="flex flex-col md:flex-row justify-evenly mb-6">
        {project.skills.frontend?.length > 0 && (
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-neutral-500">Frontend</p>
            <FloatingDock items={project.skills.frontend} />
          </div>
        )}

        {project.skills.backend?.length > 0 && (
          <div className="flex flex-col items-center gap-2 mt-4 md:mt-0">
            <p className="text-sm text-neutral-500">Backend</p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>

      {project.content}
    </>
  );
};

export default ProjectsSection;

