import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Preparation = styled('section', {
  alignItems: 'center',
  backgroundColor: '$bgSecondary',
  color: '#fff',
  flexWrap: 'wrap',
  gap: '3rem',
  justifyContent: 'space-evenly',
  minHeight: '50vh',
  padding: '3rem 0',

  h2: {
    alignItems: 'center',
    display: 'flex',
    fontFamily: '$primary',
    gap: '1rem',
  },

  'ul, ol': {
    fontFamily: 'arial',
    listStylePosition: 'inside',

    li: { marginTop: '.8rem' },
  },
});
