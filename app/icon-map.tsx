import type { ReactNode } from "react";
import {
  FaAngular,
  FaDocker,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";
import { SiCypress, SiRedhatopenshift, SiReactivex } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const ICON_MAP: Record<string, ReactNode> = {
  Angular: <FaAngular />,
  Cypress: <SiCypress />,
  Docker: <FaDocker />,
  Git: <FaGit />,
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  NextJS: <TbBrandNextjs />,
  OpenShift: <SiRedhatopenshift />,
  React: <FaReact />,
  RxJS: <SiReactivex />,
};
