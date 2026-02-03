import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * ProjectCard 컴포넌트
 *
 * MUTON 브랜드 아카이브용 프로젝트 카드.
 * 이미지와 상세 정보를 좌우 분할 레이아웃으로 표시한다.
 *
 * 동작 방식:
 * 1. imagePosition에 따라 이미지와 텍스트 영역 좌우 배치 결정
 * 2. 이미지 영역에 프로젝트 대표 이미지 표시
 * 3. 텍스트 영역에 제목, 연도, 메타데이터, 설명 표시
 * 4. 호버 시 이미지에 미세한 스케일 효과 적용
 *
 * Props:
 * @param {string} image - 프로젝트 이미지 URL [Required]
 * @param {string} imageAlt - 이미지 대체 텍스트 [Optional, 기본값: '']
 * @param {string} title - 프로젝트 제목 (대문자, 스페이싱 적용) [Required]
 * @param {string|number} year - 프로젝트 연도 [Required]
 * @param {string} category - 카테고리 라벨 (예: 'works') [Optional, 기본값: 'works']
 * @param {string} subtitle - 프로젝트 부제목 [Optional]
 * @param {Array} metadata - 메타데이터 배열 [{label, value}] [Optional]
 * @param {string} descriptionTitle - 설명 제목 [Optional]
 * @param {string} description - 프로젝트 설명 [Optional]
 * @param {string} imagePosition - 이미지 위치 ('left' | 'right') [Optional, 기본값: 'left']
 * @param {string} ratio - 이미지/텍스트 비율 ('50:50' | '60:40' | '40:60') [Optional, 기본값: '50:50']
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProjectCard
 *   image="/images/project.jpg"
 *   title="DEEPBULE_CO."
 *   year={2025}
 *   subtitle="NAVER 1784 3bf"
 *   metadata={[
 *     { label: 'Location', value: 'Bundang-gu, Gyeonggi-do, Korea' },
 *     { label: 'Area', value: '770sf' },
 *   ]}
 *   description="Project description..."
 *   imagePosition="left"
 * />
 */
const ProjectCard = forwardRef(function ProjectCard({
  image,
  imageAlt = '',
  title,
  year,
  category = 'works',
  subtitle,
  metadata = [],
  descriptionTitle,
  description,
  imagePosition = 'left',
  ratio = '50:50',
  onClick,
  sx,
  ...props
}, ref) {
  /**
   * 비율 계산
   */
  const getRatios = () => {
    const presets = {
      '50:50': [50, 50],
      '60:40': [60, 40],
      '40:60': [40, 60],
    };
    return presets[ratio] || [50, 50];
  };

  const [imageRatio, contentRatio] = getRatios();

  /**
   * 이미지 영역 렌더링
   */
  const renderImage = () => (
    <Box
      sx={{
        flex: { xs: '0 0 100%', md: `0 0 ${imageRatio}%` },
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: 300, sm: 400, md: 500 },
        '&:hover img': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={imageAlt}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          transition: 'transform 0.3s ease-out',
        }}
      />
    </Box>
  );

  /**
   * 콘텐츠 영역 렌더링
   */
  const renderContent = () => (
    <Box
      sx={{
        flex: { xs: '0 0 100%', md: `0 0 ${contentRatio}%` },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        p: { xs: 3, sm: 4, md: 6 },
        backgroundColor: 'background.paper',
      }}
    >
      {/* 제목 + 연도 */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 400,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
            mb: 0.5,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 300,
            letterSpacing: '0.2em',
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
          }}
        >
          {year}
        </Typography>
      </Box>

      {/* 카테고리 + 부제목 */}
      {(category || subtitle) && (
        <Box sx={{ mb: 3 }}>
          {category && (
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                textTransform: 'lowercase',
                color: 'text.secondary',
                mb: 0.5,
              }}
            >
              {category}
            </Typography>
          )}
          {subtitle && (
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                color: 'text.primary',
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      )}

      {/* 메타데이터 */}
      {metadata.length > 0 && (
        <Box sx={{ mb: 4 }}>
          {metadata.map((item, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontSize: '0.75rem',
                lineHeight: 1.8,
              }}
            >
              {item.label} {item.value}
            </Typography>
          ))}
        </Box>
      )}

      {/* 설명 */}
      {(descriptionTitle || description) && (
        <Box>
          {descriptionTitle && (
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                mb: 2,
                color: 'text.primary',
              }}
            >
              {descriptionTitle}
            </Typography>
          )}
          {description && (
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
                fontSize: '0.8rem',
              }}
            >
              {description}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );

  return (
    <Box
      ref={ref}
      onClick={onClick}
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: imagePosition === 'right' ? 'row-reverse' : 'row',
        },
        width: '100%',
        cursor: onClick ? 'pointer' : 'default',
        borderRadius: 0,
        overflow: 'hidden',
        ...sx,
      }}
      {...props}
    >
      {renderImage()}
      {renderContent()}
    </Box>
  );
});

export { ProjectCard };
