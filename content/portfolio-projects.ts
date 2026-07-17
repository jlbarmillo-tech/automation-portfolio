import { ghlProjects } from '@/content/projects';
import { n8nProjects } from '@/content/n8n-projects';
import { n8nArchiveProjects } from '@/content/n8n-archive-projects';
import { zapierProjects } from '@/content/zapier-projects';

export const projectFilters = [
  'All',
  'GoHighLevel',
  'n8n',
  'Zapier',
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export const portfolioProjects = [
  ...ghlProjects,
  ...n8nProjects,
  ...n8nArchiveProjects,
  ...zapierProjects,
] as const;

export type PortfolioProject = (typeof portfolioProjects)[number];