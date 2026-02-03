import { LandingPage } from './LandingPage';

export default {
  title: 'Page/LandingPage',
  component: LandingPage,
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
    footerProps: {
      control: 'object',
      description: '푸터 섹션 props',
    },
  },
};

/**
 * 기본 랜딩 페이지
 * - 히어로 섹션 + 프로젝트 쇼케이스 (80vh 간격) + 푸터
 */
export const Default = {
  args: {},
};
