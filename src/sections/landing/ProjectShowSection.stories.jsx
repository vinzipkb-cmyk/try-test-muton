import { ProjectShowSection } from './ProjectShowSection';

// 이미지 import
import projectImage1 from '../../assets/content-img/Rectangle 5.png';
import projectImage2 from '../../assets/content-img/Rectangle 6.png';
import projectImage3 from '../../assets/content-img/Rectangle 14.png';
import projectImage4 from '../../assets/content-img/Backgraund-8.png';

export default {
  title: 'Section/Landing/ProjectShowSection',
  component: ProjectShowSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    projects: {
      control: 'object',
      description: '프로젝트 데이터 배열',
    },
    lastFullWidth: {
      control: 'boolean',
      description: '마지막 프로젝트를 전체 폭으로 표시',
    },
    ratio: {
      control: 'select',
      options: ['50:50', '60:40', '40:60'],
      description: '분할 비율',
    },
    gap: {
      control: 'number',
      description: '프로젝트 간 간격',
    },
  },
};

const sampleProjectInfo = {
  works: 'NAVER 1784 3bf',
  location: 'Bundang-gu, Gyeonggi-do, Korea',
  area: '770sf',
  completionDate: 'Agust 2022',
  photographer: 'Mingu Kang',
  subtitle: 'From Embracing Green to Simplifying Green (HYPER GREEN)',
};

const sampleDescription = `The original Naver headquarters, Green Factory, was a groundbreaking space that integrated green elements into the office, embodying Naver's values and vision. As time has passed, the question arose: what should the green concept look like in Naver's new headquarters? This project began with that question, and we defined the green of Naver's new headquarters as HYPER GREEN, symbolizing a shift from 'Embracing Green' to 'Simplifying Green'. This new approach reflects a refined and evolved vision of integrating green elements into the workspace.`;

const sampleProjects = [
  {
    id: 'archive',
    image: projectImage1,
    title: 'ARCHIVE',
    year: '2025',
    projectInfo: sampleProjectInfo,
    description: sampleDescription,
  },
  {
    id: 'deepbule-co',
    image: projectImage2,
    title: 'DEEPBULE_CO.',
    year: '2025',
    projectInfo: sampleProjectInfo,
    description: sampleDescription,
  },
  {
    id: 'lab',
    image: projectImage3,
    title: 'LAB',
    year: '2025',
    projectInfo: sampleProjectInfo,
    description: sampleDescription,
  },
  {
    id: 'deepbule-co-2',
    image: projectImage4,
    title: 'DEEPBULE_CO.',
    year: '2025',
    projectInfo: sampleProjectInfo,
    description: sampleDescription,
  },
];

/**
 * 기본 ProjectShowSection (교차 레이아웃)
 */
export const Default = {
  args: {
    projects: sampleProjects.slice(0, 3),
    lastFullWidth: false,
    ratio: '50:50',
    gap: 0,
  },
};

/**
 * 마지막 프로젝트 전체 폭
 */
export const WithFullWidthLast = {
  args: {
    projects: sampleProjects,
    lastFullWidth: true,
    ratio: '50:50',
    gap: 0,
  },
};

/**
 * 2개 프로젝트
 */
export const TwoProjects = {
  args: {
    projects: sampleProjects.slice(0, 2),
    lastFullWidth: false,
    ratio: '50:50',
    gap: 0,
  },
};

/**
 * 간격 있는 레이아웃
 */
export const WithGap = {
  args: {
    projects: sampleProjects.slice(0, 3),
    lastFullWidth: false,
    ratio: '50:50',
    gap: 4,
  },
};

/**
 * 60:40 비율
 */
export const WideImage = {
  args: {
    projects: sampleProjects.slice(0, 3),
    lastFullWidth: false,
    ratio: '60:40',
    gap: 0,
  },
};
