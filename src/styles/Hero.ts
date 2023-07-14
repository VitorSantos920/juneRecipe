import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Hero = styled('section', {
  backgroundColor: '$bgPrimary',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5rem',

  ':is(&, .hero__content) :is(h1, h2)': {
    color: '$textPrimary',
    fontFamily: '$primary',
  },
});
