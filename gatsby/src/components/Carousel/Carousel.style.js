import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
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
  width: 16px;
  height: 16px;
  cursor: pointer;
  border-radius: 50%;
  border: solid 2px var(--color-dark);
  background: ${({ active }) => (active ? 'var(--color-dark)' : 'var(--color-true-white)')};
  box-shadow: inset 0 0 0 ${({ active }) => (active ? '2px' : '0')} var(--color-true-white);
`
