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
 * TopPage 컴포넌트
 *
 * MUTON 브랜드 웹사이트의 메인 페이지.
 * LandingHero와 ProjectShowSection을 결합한 통합 페이지.
 *
 * 동작 방식:
 * 1. 히어로 섹션 (이미지 원본 비율에 맞춤)
 * 2. sectionSpacing 간격 후 프로젝트 쇼케이스 섹션 표시
 * 3. 프로젝트들이 교차 레이아웃으로 배치됨
 * 4. 마지막 프로젝트는 전체 폭으로 표시
 * 5. 푸터에서 연락처 정보 제공
 *
 * Props:
 * @param {object} heroProps - 히어로 섹션 props [Optional]
 * @param {Array} projects - 프로젝트 데이터 배열 [Optional]
 * @param {boolean} lastFullWidth - 마지막 프로젝트 전체 폭 표시 여부 [Optional, 기본값: true]
 * @param {string|number} sectionSpacing - 섹션 간 간격 (px 또는 CSS 값) [Optional, 기본값: 120]
 * @param {boolean} showFooter - 푸터 표시 여부 [Optional, 기본값: true]
 * @param {object} footerProps - 푸터 섹션 props [Optional]
 *
 * Example usage:
 * <TopPage />
 *
 * // 커스텀 프로젝트 데이터
 * <TopPage
 *   projects={customProjects}
 *   lastFullWidth={false}
 * />
 */
export function TopPage({
  heroProps = {},
  projects = [],
  lastFullWidth = true,
  sectionSpacing = 120,
  showFooter = true,
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

      {/* Section Spacer */}
      <Box sx={{ height: sectionSpacing }} />

      {/* Project Showcase Section */}
      <ProjectShowSection
        projects={projectsData}
        lastFullWidth={lastFullWidth}
        ratio="50:50"
      />

      {/* Footer */}
      {showFooter && (
        <>
          <Box sx={{ height: sectionSpacing }} />
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
        </>
      )}
    </Box>
  );
}

export default TopPage;
