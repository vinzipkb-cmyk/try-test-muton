import { Box, Typography, Divider } from '@mui/material';

/**
 * LandingFooter 컴포넌트
 *
 * 랜딩 페이지 푸터 섹션.
 * 브랜드 로고, 연락처 정보, 저작권 표시.
 *
 * 동작 방식:
 * 1. 상단에 로고와 연락처 정보가 좌우로 배치됨
 * 2. 하단에 저작권 문구가 중앙 정렬로 표시됨
 * 3. 모바일에서는 세로 스택 레이아웃으로 전환
 *
 * Props:
 * @param {string} logoText - 로고 텍스트 [Optional, 기본값: 'MUTON']
 * @param {object} contactInfo - 연락처 정보 객체 [Optional]
 * @param {string} copyright - 저작권 문구 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <LandingFooter
 *   contactInfo={{
 *     ceo: 'EH SANG LEE',
 *     phone: '02 000 0000',
 *     fax: '02 111 1111',
 *     website: 'www.muton.co.kr',
 *     email: 'muton@naver.com',
 *     address: '044 906-001-000-0000 123-2 1F',
 *   }}
 * />
 */
export function LandingFooter({
  logoText = 'MUTON',
  contactInfo = {},
  copyright = '2003 GAME.lab.brand M U T O N NI All rights reserved.',
  sx,
}) {
  const {
    ceo,
    phone,
    fax,
    website,
    email,
    address,
  } = contactInfo;

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        px: { xs: 3, md: 6 },
        py: { xs: 4, md: 6 },
        ...sx,
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'flex-start' },
          gap: { xs: 4, md: 8 },
          mb: 4,
        }}
      >
        {/* Logo */}
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 500,
            letterSpacing: '0.2em',
            fontFamily: '"Outfit", sans-serif',
          }}
        >
          {logoText}
        </Typography>

        {/* Contact Info */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0.5,
          }}
        >
          {ceo && (
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              CEO : {ceo}
            </Typography>
          )}
          {phone && (
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              T : {phone}
            </Typography>
          )}
          {fax && (
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              F : {fax}
            </Typography>
          )}
          {website && (
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              W : {website}
            </Typography>
          )}
          {email && (
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              E : {email}
            </Typography>
          )}
          {address && (
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              A : {address}
            </Typography>
          )}
        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={{ mb: 3 }} />

      {/* Copyright */}
      <Typography
        variant="caption"
        sx={{
          color: 'text.disabled',
          display: 'block',
          textAlign: 'center',
        }}
      >
        {copyright}
      </Typography>
    </Box>
  );
}

export default LandingFooter;
