import { FullWidthProject } from './FullWidthProject';

export default {
  title: 'Section/Landing/FullWidthProject',
  component: FullWidthProject,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    image: {
      control: 'text',
      description: '배경 이미지 URL',
    },
    title: {
      control: 'text',
      description: '프로젝트 타이틀',
    },
    year: {
      control: 'text',
      description: '프로젝트 연도',
    },
    projectInfo: {
      control: 'object',
      description: '프로젝트 정보 객체',
    },
    description: {
      control: 'text',
      description: '프로젝트 설명',
    },
    overlay: {
      control: { type: 'number', min: 0, max: 1, step: 0.1 },
      description: '오버레이 투명도',
    },
  },
};

const defaultProjectInfo = {
  works: 'NAVER 1784 3#',
  location: 'Bundang-gu, Gyeonggi-do, Korea',
  area: '770m²',
  completionDate: 'April 2023',
  photographer: 'Mingu Kang',
  subtitle: 'From Embracing Green to Simplifying Green (HYPER GREEN)',
};

const defaultDescription = `The original Naver headquarters, Green Factory, was a groundbreaking space that integrated green elements into the office, embodying Naver's values and vision. As time has passed, the question arose: what should the green concept look like in Naver's new headquarters?

This project began with that question, and we defined the green of Naver's new headquarters as HYPER GREEN, symbolizing a shift from 'Embracing Green' to 'Simplifying Green.'`;

export const Default = {
  args: {
    image: 'https://images.unsplash.com/photo-1600607687644-c7f34b5063d8?w=1920',
    title: 'DEEPBULE_CO.',
    year: '2025',
    projectInfo: defaultProjectInfo,
    description: defaultDescription,
    overlay: 0.4,
  },
};

export const LightOverlay = {
  args: {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920',
    title: 'DEEPBULE_CO.',
    year: '2025',
    projectInfo: defaultProjectInfo,
    description: defaultDescription,
    overlay: 0.2,
  },
};
