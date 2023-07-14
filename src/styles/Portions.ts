import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Portions = styled('div', {
  alignItems: 'center',
  gap: '.5rem',
  marginTop: '1rem',

  small: {
    color: '$textPrimaryLighter',
    fontFamily: '$primary',
    fontSize: '1.3rem',
  },

  button: {
    backgroundColor: 'transparent',
    border: 'none',
    height: 25,
  },

  span: {
    color: '$textPrimaryLighter',
    fontSize: '1.3rem',
  },

  svg: {
    cursor: 'pointer',

    '&:hover': { fill: '$primary' },
  },
});
