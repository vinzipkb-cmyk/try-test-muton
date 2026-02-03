import { Box, Typography } from '@mui/material';
import { SplitScreen } from '../../components/layout/SplitScreen';

/**
 * ArchivePreview 컴포넌트
 *
 * 랜딩 페이지의 아카이브 프리뷰 섹션.
 * 좌측 이미지 + 우측 콘텐츠의 분할 레이아웃.
 *
 * 동작 방식:
 * 1. 화면이 좌우로 분할됨 (이미지 / 콘텐츠)
 * 2. 우측에 섹션 타이틀, 프로젝트 정보, 설명 표시
 * 3. 모바일에서는 세로 스택 레이아웃으로 전환
 *
 * Props:
 * @param {string} image - 좌측 이미지 URL [Required]
 * @param {string} title - 섹션 타이틀 [Optional, 기본값: 'ARCHIVE']
 * @param {object} projectInfo - 프로젝트 정보 객체 [Optional]
 * @param {string} description - 프로젝트 설명 [Optional]
 * @param {string} ratio - 분할 비율 [Optional, 기본값: '50:50']
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ArchivePreview
 *   image="/images/archive/project.jpg"
 *   title="ARCHIVE"
 *   projectInfo={{
 *     works: 'NAVER 1784 3#',
 *     location: 'Bundang-gu, Gyeonggi-do, Korea',
 *     area: '770m²',
 *     completionDate: 'April 2023',
 *     photographer: 'Mingu Kang',
 *   }}
 * />
 */
export function ArchivePreview({
  image,
  title = 'ARCHIVE',
  projectInfo = {},
  description,
  ratio = '50:50',
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
    <Box sx={{ minHeight: { xs: 'auto', md: '100vh' }, ...sx }}>
      <SplitScreen
        ratio={ratio}
        stackAt="md"
        left={
          <Box
            sx={{
              width: '100%',
              height: { xs: '50vh', md: '100vh' },
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        }
        right={
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: { xs: 'auto', md: '100vh' },
              px: { xs: 3, md: 6, lg: 8 },
              py: { xs: 6, md: 0 },
              backgroundColor: 'background.paper',
            }}
          >
            {/* Title */}
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 400,
                letterSpacing: '0.15em',
                mb: 4,
                fontFamily: '"Outfit", sans-serif',
              }}
            >
              {title}
            </Typography>

            {/* Project Info */}
            <Box sx={{ mb: 4 }}>
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
                  fontStyle: 'italic',
                  color: 'text.secondary',
                  mb: 3,
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
                  maxWidth: '480px',
                }}
              >
                {description}
              </Typography>
            )}
          </Box>
        }
      />
    </Box>
  );
}

export default ArchivePreview;
