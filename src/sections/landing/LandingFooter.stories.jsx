import { LandingFooter } from './LandingFooter';

export default {
  title: 'Section/Landing/LandingFooter',
  component: LandingFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    logoText: {
      control: 'text',
      description: '로고 텍스트',
    },
    contactInfo: {
      control: 'object',
      description: '연락처 정보 객체',
    },
    copyright: {
      control: 'text',
      description: '저작권 문구',
    },
  },
};

const defaultContactInfo = {
  ceo: 'EH SANG LEE',
  phone: '02 000 0000',
  fax: '02 111 1111',
  website: 'www.muton.co.kr',
  email: 'muton@naver.com',
  address: '044 906-001-000-0000 123-2 1F',
};

export const Default = {
  args: {
    logoText: 'MUTON',
    contactInfo: defaultContactInfo,
    copyright: '2003 GAME.lab.brand M U T O N NI All rights reserved.',
  },
};
