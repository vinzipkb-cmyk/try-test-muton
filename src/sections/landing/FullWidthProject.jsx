import { Box, Typography } from '@mui/material';
import { FullPageContainer } from '../../components/layout/FullPageContainer';

/**
 * FullWidthProject 컴포넌트
 *
 * 전체 폭 프로젝트 섹션.
 * 전체 화면 배경 이미지 위에 프로젝트 정보가 오버레이됨.
 *
 * 동작 방식:
 * 1. 전체 화면 배경 이미지가 표시됨
 * 2. 상단에 프로젝트 타이틀과 연도가 중앙 정렬로 표시됨
 * 3. 좌측 하단에 프로젝트 정보와 설명이 표시됨
 *
 * Props:
 * @param {string} image - 배경 이미지 URL [Required]
 * @param {string} title - 프로젝트 타이틀 [Required]
 * @param {string} year - 프로젝트 연도 [Optional]
 * @param {object} projectInfo - 프로젝트 정보 객체 [Optional]
 * @param {string} description - 프로젝트 설명 [Optional]
 * @param {number} overlay - 오버레이 투명도 [Optional, 기본값: 0.4]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <FullWidthProject
 *   image="/images/project.jpg"
 *   title="DEEPBULE_CO."
 *   year="2025"
 *   projectInfo={{ works: 'NAVER 1784 3#' }}
 * />
 */
export function FullWidthProject({
  image,
  title,
  year,
  projectInfo = {},
  description,
  overlay = 0.4,
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

  return (
    <FullPageContainer
      background={image}
      overlay={overlay}
      align="stretch"
      justify="between"
      sx={{
        position: 'relative',
        ...sx,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2,
        }}
      >
        {/* Title - Top Center */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 6, md: 10 },
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: 'common.white',
              fontWeight: 400,
              letterSpacing: '0.15em',
              fontFamily: '"Outfit", sans-serif',
              textAlign: 'center',
            }}
          >
            {title}
          </Typography>
          {year && (
            <Typography
              variant="h3"
              component="span"
              sx={{
                color: 'common.white',
                fontWeight: 300,
                letterSpacing: '0.15em',
                fontFamily: '"Outfit", sans-serif',
              }}
            >
              {year}
            </Typography>
          )}
        </Box>

        {/* Project Info - Bottom Left */}
        <Box
          sx={{
            mt: 'auto',
            px: { xs: 3, md: 6 },
            pb: { xs: 4, md: 6 },
            maxWidth: { xs: '100%', md: '500px' },
          }}
        >
          {/* Project Info */}
          <Box sx={{ mb: 3 }}>
            {works && (
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    letterSpacing: '0.05em',
                    display: 'block',
                    mb: 0.5,
                  }}
                >
                  works
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'common.white', fontWeight: 500 }}
                >
                  {works}
                </Typography>
              </Box>
            )}

            {location && (
              <Typography
                variant="body2"
                sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 0.5 }}
              >
                Location {location}
              </Typography>
            )}

            {area && (
              <Typography
                variant="body2"
                sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 0.5 }}
              >
                Area {area}
              </Typography>
            )}

            {completionDate && (
              <Typography
                variant="body2"
                sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 0.5 }}
              >
                Completion Date {completionDate}
              </Typography>
            )}

            {photographer && (
              <Typography
                variant="body2"
                sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 0.5 }}
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
                fontStyle: 'italic',
                color: 'rgba(255, 255, 255, 0.8)',
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
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.8,
              }}
            >
              {description}
            </Typography>
          )}
        </Box>
      </Box>
    </FullPageContainer>
  );
}

export default FullWidthProject;
