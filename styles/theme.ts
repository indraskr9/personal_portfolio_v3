import {ColorMode} from '@chakra-ui/react'

export const theme = {
  config: {
    initialColorMode: 'light' as ColorMode,
    useSystemColorMode: false,
  },
  styles: {
    global: {
      'html, body': {
        scrollBehavior: 'smooth',
        background: '#1F1F2B',
        color: '#CED2DD',
      },
    },
  },
  fonts: {
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 800,
  },
}
