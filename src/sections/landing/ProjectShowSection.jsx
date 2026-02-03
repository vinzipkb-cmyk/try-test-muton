import { Box, Stack } from '@mui/material';
import { ProjectShowcase } from './ProjectShowcase';
import { FullWidthProject } from './FullWidthProject';

/**
 * ProjectShowSection 컴포넌트
 *
 * 프로젝트 쇼케이스 섹션 전체를 렌더링.
 * 여러 프로젝트를 교차 레이아웃으로 표시하며, 마지막은 전체 폭으로 표시 가능.
 *
 * 동작 방식:
 * 1. projects 배열을 순회하며 ProjectShowcase 컴포넌트 렌더링
 * 2. 홀수 인덱스는 이미지 왼쪽, 짝수 인덱스는 이미지 오른쪽 배치
 * 3. lastFullWidth가 true면 마지막 프로젝트를 FullWidthProject로 렌더링
 * 4. 각 프로젝트는 50:50 비율의 분할 레이아웃 사용
 *
 * Props:
 * @param {Array} projects - 프로젝트 데이터 배열 [Required]
 * @param {boolean} lastFullWidth - 마지막 프로젝트를 전체 폭으로 표시할지 여부 [Optional, 기본값: false]
 * @param {string} ratio - 분할 비율 [Optional, 기본값: '50:50']
 * @param {number} gap - 프로젝트 간 간격 [Optional, 기본값: 0]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Project 객체 구조:
 * {
 *   id: string,
 *   image: string,
 *   title: string,
 *   year: string,
 *   projectInfo: {
 *     works: string,
 *     location: string,
 *     area: string,
 *     completionDate: string,
 *     photographer: string,
 *     subtitle: string,
 *   },
 *   description: string,
 * }
 *
 * Example usage:
 * <ProjectShowSection
 *   projects={[
 *     { id: '1', image: '/img1.jpg', title: 'ARCHIVE', year: '2025', ... },
 *     { id: '2', image: '/img2.jpg', title: 'LAB', year: '2025', ... },
 *   ]}
 *   lastFullWidth
 * />
 */
export function ProjectShowSection({
  projects = [],
  lastFullWidth = false,
  ratio = '50:50',
  gap = 0,
  sx,
}) {
  if (!projects || projects.length === 0) {
    return null;
  }

  /**
   * 교차 레이아웃 패턴 결정
   * 첫 번째: 이미지 왼쪽, 두 번째: 이미지 오른쪽, ...
   */
  const getImagePosition = (index) => {
    return index % 2 === 0 ? 'left' : 'right';
  };

  /**
   * 마지막 프로젝트를 제외한 일반 프로젝트 목록
   */
  const regularProjects = lastFullWidth
    ? projects.slice(0, -1)
    : projects;

  /**
   * 마지막 전체 폭 프로젝트
   */
  const fullWidthProjectData = lastFullWidth
    ? projects[projects.length - 1]
    : null;

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        ...sx,
      }}
    >
      <Stack spacing={gap}>
        {/* 일반 프로젝트 (교차 레이아웃) */}
        {regularProjects.map((project, index) => (
          <ProjectShowcase
            key={project.id || index}
            image={project.image}
            title={project.title}
            year={project.year}
            projectInfo={project.projectInfo}
            description={project.description}
            imagePosition={getImagePosition(index)}
            ratio={ratio}
          />
        ))}

        {/* 마지막 전체 폭 프로젝트 */}
        {fullWidthProjectData && (
          <FullWidthProject
            image={fullWidthProjectData.image}
            title={fullWidthProjectData.title}
            year={fullWidthProjectData.year}
            projectInfo={fullWidthProjectData.projectInfo}
            description={fullWidthProjectData.description}
          />
        )}
      </Stack>
    </Box>
  );
}

export default ProjectShowSection;
