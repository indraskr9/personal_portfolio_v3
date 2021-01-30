import {ColorMode} from '@chakra-ui/react'

export const theme = {
  config: {
    initialColorMode: 'light' as ColorMode,
    useSystemColorMode: false,
  },
  colors: {
    primary: '#6083FF',
    primaryDark: '#344C9E',
  },
  styles: {
    global: {
      'html, body': {
        scrollBehavior: 'smooth',
        background: '#1F1F2B',
        color: '#CED2DD',
        fontFamily: 'Inter',
      },
    },
  },
  fonts: {
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading:
      'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    mono: 'Fira Mono',
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 800,
  },
  layerStyles: {
    flexCenter: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}
