import { LandingHero } from './LandingHero';

// 이미지 import
import heroImage from '../../assets/content-img/Backgraund.png';

export default {
  title: 'Section/Landing/LandingHero',
  component: LandingHero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    backgroundImage: {
      control: 'text',
      description: '배경 이미지 URL',
    },
    logoText: {
      control: 'text',
      description: '로고 텍스트',
    },
    navItems: {
      control: 'object',
      description: '네비게이션 아이템 배열',
    },
    height: {
      control: 'text',
      description: '컨테이너 높이',
    },
    overlay: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: '오버레이 투명도',
    },
    onNavClick: {
      action: 'navClicked',
      description: '네비게이션 클릭 핸들러',
    },
  },
};

const defaultNavItems = [
  { label: 'ABOUT', href: '/about' },
  { label: 'ARCHIVE', href: '/archive' },
  { label: 'LAB', href: '/lab' },
  { label: 'CONTACT', href: '/contact' },
];

/**
 * 기본 - 전체 화면 (100svh)
 */
export const Default = {
  args: {
    backgroundImage: heroImage,
    logoText: 'MUTON',
    navItems: defaultNavItems,
    height: '100svh',
    overlay: 0.3,
  },
};

/**
 * 80vh 높이
 */
export const Height80vh = {
  args: {
    backgroundImage: heroImage,
    logoText: 'MUTON',
    navItems: defaultNavItems,
    height: '80vh',
    overlay: 0.3,
  },
};

/**
 * 50vh 높이
 */
export const Height50vh = {
  args: {
    backgroundImage: heroImage,
    logoText: 'MUTON',
    navItems: defaultNavItems,
    height: '50vh',
    overlay: 0.3,
  },
};

/**
 * 오버레이 없음
 */
export const NoOverlay = {
  args: {
    backgroundImage: heroImage,
    logoText: 'MUTON',
    navItems: defaultNavItems,
    height: '100svh',
    overlay: 0,
  },
};

/**
 * 진한 오버레이
 */
export const DarkOverlay = {
  args: {
    backgroundImage: heroImage,
    logoText: 'MUTON',
    navItems: defaultNavItems,
    height: '100svh',
    overlay: 0.6,
  },
};
