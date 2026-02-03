import { TopPage } from './TopPage';

export default {
  title: 'Page/TopPage',
  component: TopPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    heroProps: {
      control: 'object',
      description: '히어로 섹션 props',
    },
    projects: {
      control: 'object',
      description: '프로젝트 데이터 배열',
    },
    lastFullWidth: {
      control: 'boolean',
      description: '마지막 프로젝트 전체 폭 표시 여부',
    },
    sectionSpacing: {
      control: 'text',
      description: '섹션 간 간격',
    },
    showFooter: {
      control: 'boolean',
      description: '푸터 표시 여부',
    },
    footerProps: {
      control: 'object',
      description: '푸터 섹션 props',
    },
  },
};

/**
 * 기본 TopPage
 * - Hero (이미지 fit) + 120px 간격 + ProjectShowSection + Footer
 */
export const Default = {
  args: {
    lastFullWidth: true,
    sectionSpacing: 120,
    showFooter: true,
  },
};

/**
 * 간격 없음
 */
export const NoSpacing = {
  args: {
    lastFullWidth: true,
    sectionSpacing: 0,
    showFooter: true,
  },
};

/**
 * 푸터 없음
 */
export const WithoutFooter = {
  args: {
    lastFullWidth: true,
    sectionSpacing: 120,
    showFooter: false,
  },
};

/**
 * 마지막 프로젝트 일반 크기
 */
export const NoFullWidthLast = {
  args: {
    lastFullWidth: false,
    sectionSpacing: 120,
    showFooter: true,
  },
};

/**
 * 넓은 간격
 */
export const WideSpacing = {
  args: {
    lastFullWidth: true,
    sectionSpacing: 200,
    showFooter: true,
  },
};
