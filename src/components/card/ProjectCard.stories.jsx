import { ProjectCard } from './ProjectCard';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// 이미지 import
import projectImage1 from '../../assets/content-img/Rectangle 5.png';
import projectImage2 from '../../assets/content-img/Rectangle 6.png';
import projectImage3 from '../../assets/content-img/Rectangle 14.png';

export default {
  title: 'Custom Component/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    image: {
      control: 'text',
      description: '프로젝트 이미지 URL',
    },
    imageAlt: {
      control: 'text',
      description: '이미지 대체 텍스트',
    },
    title: {
      control: 'text',
      description: '프로젝트 제목 (대문자, 스페이싱 적용)',
    },
    year: {
      control: 'text',
      description: '프로젝트 연도',
    },
    category: {
      control: 'text',
      description: '카테고리 라벨',
    },
    subtitle: {
      control: 'text',
      description: '프로젝트 부제목',
    },
    metadata: {
      control: 'object',
      description: '메타데이터 배열 [{label, value}]',
    },
    descriptionTitle: {
      control: 'text',
      description: '설명 제목',
    },
    description: {
      control: 'text',
      description: '프로젝트 설명',
    },
    imagePosition: {
      control: 'select',
      options: ['left', 'right'],
      description: '이미지 위치',
    },
    ratio: {
      control: 'select',
      options: ['50:50', '60:40', '40:60'],
      description: '이미지/텍스트 비율',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 핸들러',
    },
  },
};

const sampleMetadata = [
  { label: 'Location', value: 'Bundang-gu, Gyeonggi-do, Korea' },
  { label: 'Area', value: '770sf' },
  { label: 'Completion Date', value: 'Agust 2022' },
  { label: 'Photograph', value: 'Mingu Kang' },
];

const sampleDescription = `The original Naver headquarters, Green Factory, was a groundbreaking space that integrated green elements into the office, embodying Naver's values and vision. As time has passed, the question arose: what should the green concept look like in Naver's new headquarters? This project began with that question, and we defined the green of Naver's new headquarters as HYPER GREEN, symbolizing a shift from 'Embracing Green' to 'Simplifying Green'. This new approach reflects a refined and evolved vision of integrating green elements into the workspace.`;

/**
 * 기본 ProjectCard
 */
export const Default = {
  args: {
    image: projectImage1,
    imageAlt: 'DEEPBULE_CO. 프로젝트',
    title: 'DEEPBULE_CO.',
    year: '2025',
    category: 'works',
    subtitle: 'NAVER 1784 3bf',
    metadata: sampleMetadata,
    descriptionTitle: 'From Embracing Green to Simplifying Green (HYPER GREEN)',
    description: sampleDescription,
    imagePosition: 'left',
    ratio: '50:50',
  },
};

/**
 * 이미지 오른쪽 배치
 */
export const ImageRight = {
  args: {
    ...Default.args,
    title: 'LAB',
    image: projectImage2,
    imagePosition: 'right',
  },
};

/**
 * 여러 카드 목록 (교차 레이아웃)
 */
export const CardList = {
  render: () => (
    <Stack spacing={0}>
      <ProjectCard
        image={projectImage1}
        imageAlt="ARCHIVE 프로젝트"
        title="ARCHIVE"
        year="2025"
        category="works"
        subtitle="NAVER 1784 3bf"
        metadata={sampleMetadata}
        descriptionTitle="From Embracing Green to Simplifying Green (HYPER GREEN)"
        description={sampleDescription}
        imagePosition="left"
      />
      <ProjectCard
        image={projectImage2}
        imageAlt="DEEPBULE_CO. 프로젝트"
        title="DEEPBULE_CO."
        year="2025"
        category="works"
        subtitle="NAVER 1784 3bf"
        metadata={sampleMetadata}
        descriptionTitle="From Embracing Green to Simplifying Green (HYPER GREEN)"
        description={sampleDescription}
        imagePosition="right"
      />
      <ProjectCard
        image={projectImage3}
        imageAlt="LAB 프로젝트"
        title="LAB"
        year="2025"
        category="works"
        subtitle="NAVER 1784 3bf"
        metadata={sampleMetadata}
        descriptionTitle="From Embracing Green to Simplifying Green (HYPER GREEN)"
        description={sampleDescription}
        imagePosition="left"
      />
    </Stack>
  ),
};

/**
 * 비율 변형 (60:40)
 */
export const WideImage = {
  args: {
    ...Default.args,
    ratio: '60:40',
  },
};

/**
 * 최소 정보 카드
 */
export const Minimal = {
  args: {
    image: projectImage1,
    title: 'MINIMAL',
    year: '2025',
    imagePosition: 'left',
  },
};
