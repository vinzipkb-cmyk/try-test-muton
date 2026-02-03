import { Box, Typography, Link } from '@mui/material';

/**
 * LandingHero 컴포넌트
 *
 * 랜딩 페이지 히어로 섹션.
 * 배경 이미지가 컨테이너 전체를 채우며, 로고와 네비게이션이 오버레이된다.
 *
 * 동작 방식:
 * 1. 배경 이미지가 컨테이너 전체를 채움 (object-fit: cover)
 * 2. height prop으로 컨테이너 높이 조정 가능
 * 3. 상단에 로고(좌)와 네비게이션(우)이 오버레이됨
 * 4. 배경에 어두운 오버레이가 적용되어 텍스트 가독성 확보
 *
 * Props:
 * @param {string} backgroundImage - 배경 이미지 URL [Optional]
 * @param {string} logoText - 로고 텍스트 [Optional, 기본값: 'MUTON']
 * @param {Array} navItems - 네비게이션 아이템 배열 [Optional]
 * @param {function} onNavClick - 네비게이션 클릭 핸들러 [Optional]
 * @param {string} height - 컨테이너 높이 [Optional, 기본값: '100svh']
 * @param {number} overlay - 오버레이 투명도 [Optional, 기본값: 0.3]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <LandingHero
 *   backgroundImage="/images/hero.jpg"
 *   height="80vh"
 * />
 */
export function LandingHero({
  backgroundImage,
  logoText = 'MUTON',
  navItems = [
    { label: 'ABOUT', href: '/about' },
    { label: 'ARCHIVE', href: '/archive' },
    { label: 'LAB', href: '/lab' },
    { label: 'CONTACT', href: '/contact' },
  ],
  onNavClick,
  height = '100svh',
  overlay = 0.3,
  sx,
}) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: height,
        overflow: 'hidden',
        ...sx,
      }}
    >
      {/* 배경 이미지 */}
      {backgroundImage && (
        <Box
          component="img"
          src={backgroundImage}
          alt="Hero background"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      )}

      {/* 오버레이 */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: `rgba(0, 0, 0, ${overlay})`,
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <Box
        component="header"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 3, md: 5 },
          py: { xs: 2, md: 3 },
          zIndex: 10,
        }}
      >
        {/* Logo */}
        <Typography
          variant="h5"
          component="div"
          sx={{
            color: 'common.white',
            fontWeight: 500,
            letterSpacing: '0.2em',
            fontFamily: '"Outfit", sans-serif',
          }}
        >
          {logoText}
        </Typography>

        {/* Navigation */}
        <Box
          component="nav"
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 4,
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (onNavClick) {
                  e.preventDefault();
                  onNavClick(item);
                }
              }}
              underline="none"
              sx={{
                color: 'common.white',
                fontSize: '0.875rem',
                fontWeight: 400,
                letterSpacing: '0.1em',
                transition: 'opacity 0.2s ease',
                '&:hover': {
                  opacity: 0.7,
                },
              }}
            >
              {item.label}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default LandingHero;
