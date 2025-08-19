import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Nav = styled.nav`
  margin-bottom: 16px;
`;

export const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
  color: ${colors.white};
  opacity: 0.7;
`;

export const Crumb = styled.li`
  display: inline-flex;
  align-items: center;

  a {
    color: ${colors.white};
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.gold};
    }
  }

  span.sep {
    margin: 0 8px;
    color: ${colors.white};
    opacity: 0.5;
  }
`;
