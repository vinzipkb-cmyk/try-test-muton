import { ProjectShowcase } from './ProjectShowcase';
import { ProjectShowcaseTextSection } from './ProjectShowcaseTextSection';

// 이미지 import
import projectImage1 from '../../assets/content-img/Rectangle 5.png';
import projectImage2 from '../../assets/content-img/Rectangle 6.png';
import projectImage3 from '../../assets/content-img/Rectangle 14.png';

export default {
  title: 'Section/Landing/ProjectShowcase',
  component: ProjectShowcase,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    image: {
      control: 'text',
      description: '프로젝트 이미지 URL',
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
    imagePosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: '이미지 위치',
    },
    ratio: {
      control: 'select',
      options: ['50:50', '60:40', '40:60', '70:30', '30:70'],
      description: '분할 비율',
    },
  },
};

const defaultProjectInfo = {
  works: 'NAVER 1784 3bf',
  location: 'Bundang-gu, Gyeonggi-do, Korea',
  area: '770sf',
  completionDate: 'Agust 2022',
  photographer: 'Mingu Kang',
  subtitle: 'From Embracing Green to Simplifying Green (HYPER GREEN)',
};

const defaultDescription = `The original Naver headquarters, Green Factory, was a groundbreaking space that integrated green elements into the office, embodying Naver's values and vision. As time has passed, the question arose: what should the green concept look like in Naver's new headquarters? This project began with that question, and we defined the green of Naver's new headquarters as HYPER GREEN, symbolizing a shift from 'Embracing Green' to 'Simplifying Green'. This new approach reflects a refined and evolved vision of integrating green elements into the workspace.`;

/**
 * 기본 - 이미지 오른쪽
 */
export const Default = {
  args: {
    image: projectImage1,
    title: 'ARCHIVE',
    year: '2025',
    projectInfo: defaultProjectInfo,
    description: defaultDescription,
    imagePosition: 'right',
    ratio: '50:50',
  },
};

/**
 * 이미지 왼쪽 배치
 */
export const ImageLeft = {
  args: {
    image: projectImage2,
    title: 'DEEPBULE_CO.',
    year: '2025',
    projectInfo: defaultProjectInfo,
    description: defaultDescription,
    imagePosition: 'left',
    ratio: '50:50',
  },
};

/**
 * LAB 섹션
 */
export const Lab = {
  args: {
    image: projectImage3,
    title: 'LAB',
    year: '2025',
    projectInfo: defaultProjectInfo,
    description: defaultDescription,
    imagePosition: 'right',
    ratio: '50:50',
  },
};

/**
 * 커스텀 텍스트 영역 (textSlot 사용)
 */
export const WithCustomTextSlot = {
  args: {
    image: projectImage1,
    imagePosition: 'left',
    ratio: '50:50',
  },
  render: (args) => (
    <ProjectShowcase
      {...args}
      textSlot={
        <ProjectShowcaseTextSection
          title="CUSTOM_TITLE"
          year="2024"
          works="Custom Project Name"
          location="Seoul, Korea"
          area="500sf"
          completionDate="December 2024"
          photographer="Custom Photographer"
          subtitle="Custom Subtitle for the project"
          description="This is a custom description using the textSlot prop. You can fully customize the text section content and styling by passing a custom ProjectShowcaseTextSection component."
        />
      }
    />
  ),
};

/**
 * 60:40 비율
 */
export const WideImage = {
  args: {
    image: projectImage2,
    title: 'DEEPBULE_CO.',
    year: '2025',
    projectInfo: defaultProjectInfo,
    description: defaultDescription,
    imagePosition: 'left',
    ratio: '60:40',
  },
};
