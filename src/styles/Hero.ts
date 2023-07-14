import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Hero = styled('section', {
  alignItems: 'center',
  backgroundColor: '$bgPrimary',
  flexWrap: 'wrap',
  gap: '5rem',
  justifyContent: 'center',
  minHeight: '50vh',
  padding: '2rem 0',

  ':is(&, .hero__content) :is(h1, h2)': {
    color: '$textPrimary',
    fontFamily: '$primary',
  },
});
