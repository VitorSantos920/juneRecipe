import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Prices = styled('div', {
  justifyContent: 'space-between',
  marginTop: '2rem',

  h2: { fontSize: '2rem' },

  p: {
    color: '$textPrimaryLighter',
    fontSize: '1.5rem',
  },

  span: { fontSize: '.8rem' },
});
