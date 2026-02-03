import { Box } from '@mui/material';
import { SplitScreen } from '../../components/layout/SplitScreen';
import { ProjectShowcaseTextSection } from './ProjectShowcaseTextSection';

/**
 * ProjectShowcase 컴포넌트
 *
 * 프로젝트 쇼케이스 섹션.
 * 이미지와 콘텐츠가 좌우 교차 배치되는 레이아웃.
 *
 * 동작 방식:
 * 1. imagePosition에 따라 이미지가 좌/우에 배치됨
 * 2. 콘텐츠 영역에 ProjectShowcaseTextSection 사용
 * 3. 모바일에서는 세로 스택으로 전환
 * 4. textSlot으로 커스텀 텍스트 영역 대체 가능
 *
 * Props:
 * @param {string} image - 프로젝트 이미지 URL [Required]
 * @param {string} title - 프로젝트 타이틀 [Required]
 * @param {string} year - 프로젝트 연도 [Optional]
 * @param {object} projectInfo - 프로젝트 정보 객체 [Optional]
 * @param {string} description - 프로젝트 설명 [Optional]
 * @param {string} imagePosition - 이미지 위치 ('left' | 'right') [Optional, 기본값: 'right']
 * @param {string} ratio - 분할 비율 [Optional, 기본값: '50:50']
 * @param {node} textSlot - 커스텀 텍스트 영역 (기본 텍스트 영역 대체) [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProjectShowcase
 *   image="/images/project.jpg"
 *   title="DEEPBULE_CO."
 *   year="2025"
 *   imagePosition="right"
 * />
 *
 * // 커스텀 텍스트 영역 사용
 * <ProjectShowcase
 *   image="/images/project.jpg"
 *   textSlot={
 *     <ProjectShowcaseTextSection
 *       title="CUSTOM"
 *       year="2025"
 *       works="Custom Works"
 *     />
 *   }
 * />
 */
export function ProjectShowcase({
  image,
  title,
  year,
  projectInfo = {},
  description,
  imagePosition = 'right',
  ratio = '50:50',
  textSlot,
  sx,
}) {
  const {
    works,
    location,
    area,
    completionDate,
    photographer,
    subtitle,
  } = projectInfo;

  /**
   * 이미지 영역
   */
  const imageContent = (
    <Box
      sx={{
        width: '100%',
        height: { xs: '50vh', md: '100vh' },
        position: 'relative',
        overflow: 'hidden',
        '&:hover img': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title || 'Project image'}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s ease-out',
        }}
      />
    </Box>
  );

  /**
   * 텍스트 영역 (textSlot으로 대체 가능)
   */
  const textContent = textSlot || (
    <ProjectShowcaseTextSection
      title={title}
      year={year}
      works={works}
      location={location}
      area={area}
      completionDate={completionDate}
      photographer={photographer}
      subtitle={subtitle}
      description={description}
    />
  );

  return (
    <Box sx={{ minHeight: { xs: 'auto', md: '100vh' }, ...sx }}>
      <SplitScreen
        ratio={ratio}
        stackAt="md"
        stackOrder={imagePosition === 'left' ? 'normal' : 'reverse'}
        left={imagePosition === 'left' ? imageContent : textContent}
        right={imagePosition === 'left' ? textContent : imageContent}
      />
    </Box>
  );
}

export default ProjectShowcase;
