import { createStitches, globalCss } from '@stitches/react';

export const stitches = createStitches({
  theme: {
    colors: {
      bgPrimary: '#FEECE0',
      bgSecondary: '#9B6647',
      textPrimary: '#58190A',
      textPrimaryLighter: '#9B6647',
      textSecondary: '#FEECE0',
    },
    fonts: {
      primary: 'Source Serif Pro, serif',
      secondary: 'Source Sans 3, sans-serif',
    },
  },
});

globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  '@font-face': {
    fontFamily: 'Source Serif Pro',
    src: 'url(src/fonts/SourceSerifPro-Bold.otf)',
  },

  body: {
    backgroundColor: '$bgPrimary',
  },
})();
