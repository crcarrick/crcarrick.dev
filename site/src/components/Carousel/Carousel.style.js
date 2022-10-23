import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Button = styled.button`
  background-color: transparent;
  transform: translateY(-50%);
  position: absolute;
  z-index: 2;
  cursor: pointer;
  border: none;
  top: 50%;

  ${({ left, right }) =>
    left
      ? css`
          left: var(--space-md);

          &:after {
            content: '<';
          }
        `
      : right
      ? css`
          right: var(--space-md);

          &:after {
            content: '>';
          }
        `
      : ''}
`

export const Track = styled.div`
  transform: translateX(-50%);
  position: absolute;
  z-index: 2;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  bottom: var(--space-md);
`

export const TrackButton = styled.span`
  cursor: pointer;

  &:after {
    content: '${({ active }) => (active ? '🔴' : '⭕')}';
  }
`
