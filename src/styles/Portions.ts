import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Portions = styled('div', {
  alignItems: 'center',
  gap: '.5rem',
  marginTop: '1rem',

  small: {
    color: '$textPrimaryLighter',
    fontSize: '1.3rem',
    fontFamily: '$primary',
  },

  button: {
    backgroundColor: 'transparent',
    border: 'none',
    height: 25,
  },

  span: {
    fontSize: '1.3rem',
    color: '$textPrimaryLighter',
  },

  svg: {
    cursor: 'pointer',

    '&:hover': { fill: '$primary' },
  },
});
