// components/Blog/PostCard/styles.js
import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Card = styled.article`
  background: ${colors.white};
  border: 1px solid ${colors.shadowSoft};
  border-radius: 16px;
  box-shadow: 0 10px 24px ${colors.shadowSoft};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 16px;
  height: 100%;

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px ${colors.shadowStrong};
  }
`;

export const Thumb = styled.a`
  display: block;
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 16 / 9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 700;
  color: ${colors.blueDark};
  background: ${colors.whiteSoft};
  border: 1px solid ${colors.gold};
  border-radius: 9999px;
  width: max-content;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 800;
  color: ${colors.blueDark};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.gold};
    }
  }
`;

export const Excerpt = styled.p`
  margin: 0;
  color: ${colors.blueDeep};
  opacity: 0.8;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Meta = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: ${colors.blueDeep};
  opacity: 0.6;

  a {
    color: ${colors.blueDark};
    font-weight: 700;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.gold};
    }
  }
`;
