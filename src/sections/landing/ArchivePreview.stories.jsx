import { ArchivePreview } from './ArchivePreview';

export default {
  title: 'Section/Landing/ArchivePreview',
  component: ArchivePreview,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    image: {
      control: 'text',
      description: '좌측 이미지 URL',
    },
    title: {
      control: 'text',
      description: '섹션 타이틀',
    },
    projectInfo: {
      control: 'object',
      description: '프로젝트 정보 객체',
    },
    description: {
      control: 'text',
      description: '프로젝트 설명',
    },
    ratio: {
      control: 'select',
      options: ['50:50', '60:40', '40:60', '70:30', '30:70'],
      description: '분할 비율',
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
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200',
    title: 'ARCHIVE',
    projectInfo: defaultProjectInfo,
    description: defaultDescription,
    ratio: '50:50',
  },
};

export const WideImage = {
  args: {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
    title: 'ARCHIVE',
    projectInfo: defaultProjectInfo,
    description: defaultDescription,
    ratio: '60:40',
  },
};
