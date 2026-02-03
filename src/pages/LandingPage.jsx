import { Box } from '@mui/material';
import {
  LandingHero,
  ProjectShowSection,
  LandingFooter,
} from '../sections/landing';

// 이미지 import
import projectImage1 from '../assets/content-img/Rectangle 5.png';
import projectImage2 from '../assets/content-img/Rectangle 6.png';
import projectImage3 from '../assets/content-img/Rectangle 14.png';
import projectImage4 from '../assets/content-img/Backgraund-8.png';
import heroImage from '../assets/content-img/Backgraund.png';

/**
 * LandingPage 컴포넌트
 *
 * MUTON 브랜드 웹사이트의 랜딩 페이지.
 * 히어로 섹션부터 푸터까지 전체 페이지를 구성한다.
 *
 * 동작 방식:
 * 1. 전체 화면 히어로 섹션으로 브랜드 첫인상 전달
 * 2. ProjectShowSection으로 프로젝트 쇼케이스 표시 (교차 레이아웃)
 * 3. 마지막 프로젝트는 전체 폭으로 표시
 * 4. 푸터에서 연락처 정보 제공
 * 5. 섹션 간 80vh 간격 적용
 *
 * Props:
 * @param {object} heroProps - 히어로 섹션 props [Optional]
 * @param {Array} projects - 프로젝트 데이터 배열 [Optional]
 * @param {object} footerProps - 푸터 섹션 props [Optional]
 *
 * Example usage:
 * <LandingPage />
 */
export function LandingPage({
  heroProps = {},
  projects = [],
  footerProps = {},
}) {
  // 기본 프로젝트 정보
  const defaultProjectInfo = {
    works: 'NAVER 1784 3bf',
    location: 'Bundang-gu, Gyeonggi-do, Korea',
    area: '770sf',
    completionDate: 'Agust 2022',
    photographer: 'Mingu Kang',
    subtitle: 'From Embracing Green to Simplifying Green (HYPER GREEN)',
  };

  const defaultDescription = `The original Naver headquarters, Green Factory, was a groundbreaking space that integrated green elements into the office, embodying Naver's values and vision. As time has passed, the question arose: what should the green concept look like in Naver's new headquarters? This project began with that question, and we defined the green of Naver's new headquarters as HYPER GREEN, symbolizing a shift from 'Embracing Green' to 'Simplifying Green'. This new approach reflects a refined and evolved vision of integrating green elements into the workspace.`;

  // 기본 프로젝트 데이터
  const defaultProjects = [
    {
      id: 'archive',
      image: projectImage1,
      title: 'ARCHIVE',
      year: '2025',
      projectInfo: defaultProjectInfo,
      description: defaultDescription,
    },
    {
      id: 'deepbule-co-1',
      image: projectImage2,
      title: 'DEEPBULE_CO.',
      year: '2025',
      projectInfo: defaultProjectInfo,
      description: defaultDescription,
    },
    {
      id: 'lab',
      image: projectImage3,
      title: 'LAB',
      year: '2025',
      projectInfo: defaultProjectInfo,
      description: defaultDescription,
    },
    {
      id: 'deepbule-co-2',
      image: projectImage4,
      title: 'DEEPBULE_CO.',
      year: '2025',
      projectInfo: defaultProjectInfo,
      description: defaultDescription,
    },
  ];

  const projectsData = projects.length > 0 ? projects : defaultProjects;

  return (
    <Box>
      {/* Hero Section */}
      <LandingHero
        backgroundImage={heroImage}
        {...heroProps}
      />

      {/* Spacer */}
      <Box sx={{ height: '20vh' }} />

      {/* Project Showcase Section */}
      <ProjectShowSection
        projects={projectsData}
        lastFullWidth
        ratio="50:50"
      />

      {/* 80vh Spacer */}
      <Box sx={{ height: '80vh' }} />

      {/* Footer */}
      <LandingFooter
        contactInfo={{
          ceo: 'EH SANG LEE',
          phone: '02 000 0000',
          fax: '02 111 1111',
          website: 'www.muton.co.kr',
          email: 'muton@naver.com',
          address: '044 906-001-000-0000 123-2 1F',
        }}
        {...footerProps}
      />
    </Box>
  );
}

export default LandingPage;
