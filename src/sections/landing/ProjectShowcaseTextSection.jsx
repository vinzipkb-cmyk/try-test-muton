import { Box, Typography } from '@mui/material';

/**
 * ProjectShowcaseTextSection 컴포넌트
 *
 * 프로젝트 쇼케이스의 텍스트 영역.
 * 타이틀, 연도, 프로젝트 정보, 설명을 표시한다.
 * 독립적으로 사용하거나 ProjectShowcase 내부에서 사용 가능.
 *
 * 동작 방식:
 * 1. 상단에 프로젝트 타이틀과 연도 표시
 * 2. 중간에 works, 위치, 면적, 완료일, 사진작가 정보 표시
 * 3. 하단에 부제목과 설명 표시
 *
 * Props:
 * @param {string} title - 프로젝트 타이틀 [Required]
 * @param {string} year - 프로젝트 연도 [Optional]
 * @param {string} works - works 라벨 텍스트 [Optional]
 * @param {string} location - 위치 [Optional]
 * @param {string} area - 면적 [Optional]
 * @param {string} completionDate - 완료일 [Optional]
 * @param {string} photographer - 사진작가 [Optional]
 * @param {string} subtitle - 부제목 [Optional]
 * @param {string} description - 설명 [Optional]
 * @param {string} align - 텍스트 정렬 ('left' | 'center' | 'right') [Optional, 기본값: 'left']
 * @param {string} variant - 스타일 변형 ('default' | 'compact') [Optional, 기본값: 'default']
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProjectShowcaseTextSection
 *   title="DEEPBULE_CO."
 *   year="2025"
 *   works="NAVER 1784 3bf"
 *   location="Bundang-gu, Gyeonggi-do, Korea"
 *   description="Project description..."
 * />
 */
export function ProjectShowcaseTextSection({
  title,
  year,
  works,
  location,
  area,
  completionDate,
  photographer,
  subtitle,
  description,
  align = 'left',
  variant = 'default',
  sx,
}) {
  const isCompact = variant === 'compact';

  const alignMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  const textAlignMap = {
    left: 'left',
    center: 'center',
    right: 'right',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: alignMap[align],
        height: { xs: 'auto', md: isCompact ? 'auto' : '100vh' },
        px: { xs: 3, md: 6, lg: 8 },
        py: { xs: 6, md: isCompact ? 4 : 0 },
        backgroundColor: 'background.paper',
        textAlign: textAlignMap[align],
        ...sx,
      }}
    >
      {/* Title & Year */}
      <Box sx={{ mb: isCompact ? 3 : 4 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 400,
            letterSpacing: '0.1em',
            fontFamily: '"Outfit", sans-serif',
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>
        {year && (
          <Typography
            variant="h4"
            component="span"
            sx={{
              fontWeight: 300,
              letterSpacing: '0.1em',
              fontFamily: '"Outfit", sans-serif',
              display: 'block',
            }}
          >
            {year}
          </Typography>
        )}
      </Box>

      {/* Project Info */}
      <Box sx={{ mb: isCompact ? 3 : 4 }}>
        {works && (
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                letterSpacing: '0.05em',
                display: 'block',
                mb: 0.5,
              }}
            >
              works
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 500 }}
            >
              {works}
            </Typography>
          </Box>
        )}

        {location && (
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', mb: 0.5 }}
          >
            Location {location}
          </Typography>
        )}

        {area && (
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', mb: 0.5 }}
          >
            Area {area}
          </Typography>
        )}

        {completionDate && (
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', mb: 0.5 }}
          >
            Completion Date {completionDate}
          </Typography>
        )}

        {photographer && (
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', mb: 0.5 }}
          >
            Photograph {photographer}
          </Typography>
        )}
      </Box>

      {/* Subtitle */}
      {subtitle && (
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: 'text.primary',
            mb: 2,
          }}
        >
          {subtitle}
        </Typography>
      )}

      {/* Description */}
      {description && (
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.8,
            maxWidth: align === 'center' ? '600px' : '480px',
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}

export default ProjectShowcaseTextSection;
