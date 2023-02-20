import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: hsl(0, 0%, 13%);
    font-size: 1.5rem;
  }

  a {
    padding: .5rem 1rem;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    text-decoration: none;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.main};
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: hsl(0, 100%, 100%);
    }
  }
`;
