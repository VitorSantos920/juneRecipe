import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Content = styled('div', {
  '.hero__title': {
    fontSize: '4rem',
  },

  '& > p': {
    color: '$textPrimary',
    fontSize: '1.8rem',
    fontFamily: '$secondary',
    fontWeight: 'bold',
  },
});
