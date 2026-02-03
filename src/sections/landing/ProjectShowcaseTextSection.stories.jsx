import { ProjectShowcaseTextSection } from './ProjectShowcaseTextSection';
import Box from '@mui/material/Box';

export default {
  title: 'Section/Landing/ProjectShowcaseTextSection',
  component: ProjectShowcaseTextSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      description: '프로젝트 타이틀',
    },
    year: {
      control: 'text',
      description: '프로젝트 연도',
    },
    works: {
      control: 'text',
      description: 'works 라벨 텍스트',
    },
    location: {
      control: 'text',
      description: '위치',
    },
    area: {
      control: 'text',
      description: '면적',
    },
    completionDate: {
      control: 'text',
      description: '완료일',
    },
    photographer: {
      control: 'text',
      description: '사진작가',
    },
    subtitle: {
      control: 'text',
      description: '부제목',
    },
    description: {
      control: 'text',
      description: '설명',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: '텍스트 정렬',
    },
    variant: {
      control: 'select',
      options: ['default', 'compact'],
      description: '스타일 변형',
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 480, border: '1px solid', borderColor: 'divider' }}>
        <Story />
      </Box>
    ),
  ],
};

const defaultDescription = `The original Naver headquarters, Green Factory, was a groundbreaking space that integrated green elements into the office, embodying Naver's values and vision. As time has passed, the question arose: what should the green concept look like in Naver's new headquarters? This project began with that question, and we defined the green of Naver's new headquarters as HYPER GREEN, symbolizing a shift from 'Embracing Green' to 'Simplifying Green'.`;

/**
 * 기본 텍스트 섹션
 */
export const Default = {
  args: {
    title: 'ARCHIVE',
    year: '2025',
    works: 'NAVER 1784 3bf',
    location: 'Bundang-gu, Gyeonggi-do, Korea',
    area: '770sf',
    completionDate: 'Agust 2022',
    photographer: 'Mingu Kang',
    subtitle: 'From Embracing Green to Simplifying Green (HYPER GREEN)',
    description: defaultDescription,
    align: 'left',
    variant: 'default',
  },
};

/**
 * 컴팩트 변형
 */
export const Compact = {
  args: {
    ...Default.args,
    variant: 'compact',
  },
};

/**
 * 중앙 정렬
 */
export const CenterAligned = {
  args: {
    ...Default.args,
    align: 'center',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 600, border: '1px solid', borderColor: 'divider' }}>
        <Story />
      </Box>
    ),
  ],
};

/**
 * 최소 정보
 */
export const Minimal = {
  args: {
    title: 'LAB',
    year: '2025',
    works: 'NAVER 1784 3bf',
    align: 'left',
    variant: 'default',
  },
};

/**
 * 설명만
 */
export const WithDescriptionOnly = {
  args: {
    title: 'DEEPBULE_CO.',
    year: '2025',
    description: defaultDescription,
    align: 'left',
    variant: 'default',
  },
};
