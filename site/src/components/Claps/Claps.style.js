import styled from 'styled-components'

import SVG from '~/assets/svg/icons/clap.svg'

export const ClapIcon = styled(SVG)`
  width: 1.5rem;
  height: 1.5rem;

  g {
    fill: ${({ clicked }) => (clicked ? 'var(--color-primary)' : 'var(--color-dark)')};
  }
`

export const ClapButton = styled.button`
  border: none;
  cursor: pointer;
  color: var(--color-text);
  padding: var(--space-lg);
  font-family: var(--font-family-code);
  font-size: var(--font-size-xs);
  font-weight: 700;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:active,
  &:focus,
  &:hover {
    ${ClapIcon} {
      g {
        fill: var(--color-primary);
      }
    }
  }
`
