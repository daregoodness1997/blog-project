import styled, { createGlobalStyle, css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;0,500;0,700;0,800;1,400&family=Syncopate:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100&family=Montserrat:wght@300;400;500;600;700&display=swap');

:root {
  /* CSS HEX */
  --prussian-blue: #003049ff;
  --maximum-red: #d62828ff;
  --orange: #f77f00ff;
  --maximum-yellow-red: #fcbf49ff;
  --lemon-meringue: #eae2b7ff;
  --white: #fff;
  --blue: #006cff;
  --black: #000;
  --gray: #E5E5E5
}
* {
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;

}
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background: var(--white);
  color: var(--black);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
a{
    color: var(---black);
    text-underline-offset: 2px;
}
`;

export const Container = styled.div`
  width: 60.0756%;
  margin: 0 auto;

  @media (max-width: 960px) {
    width: 80%;
  }
`;
export const Blank = styled.div``;
export const Nav = styled.div`
  width: 100%;
  height: 170px;
  background: var(--white);
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBoxLeft = styled.div`
  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.2px;
`;
export const NavBoxRight = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  letter-spacing: 0.2px;
`;

export const NavBarLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.2px;

  &.button {
    text-decoration: none;
    padding: 12px 40px;
    border-radius: 4px;
    transition: 400ms all ease-in-out;
    &:hover {
      background: transparent;
      border: 1px solid var(--blue);
      color: var(--blue);
      cursor: pointer;
    }
    ${props =>
      props.primary &&
      css`
        background: var(--blue);
        color: var(--white);
      `}
  }
`;

export const MainContainer = styled.div`
  margin-top: 120px;
  width: 100%;
`;
export const BlogCard = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 120px;
  display: flex;
  justify-content: space-between;
`;

export const BlogContent = styled.div`
  width: 456px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BlogAuthor = styled.h5`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 24px;
`;
export const BlogTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: 0.2px;
`;

export const BlogImage = styled.img`
  width: 300;
  border-radius: 4px;
  object-fit: cover;
`;
export const ContentBottom = styled.div`
  width: 280px;
  margin-top: 24px;
  ${props =>
    props.primary &&
    css`
      margin-top: 32px;
    `}
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const DateStamp = styled.p`
  font-size: 14px;
`;
export const ReadStamp = styled.p`
  font-size: 14px;
  font-weight: 700;
`;
export const LabelStamp = styled.label`
  background: #f2f2f2;
  padding: 10px;
  border-radius: 4px;
`;

export const ArticleHeading = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-bottom: 52px;
`;

export const ArticleTitle = styled.h1`
  font-size: 64px;
  letter-spacing: 0.2px;
  font-weight: 600;
`;

export const Banner = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 4px;
  margin-top: 100px;
  margin-bottom: 100px;
  ${props =>
    props.secondary &&
    css`
      height: 360px;
    `}
`;

export const TextContainer = styled.div`
  width: 760px;
  margin: 100px auto 0;
`;

export const Text = styled.p`
  width: 100%;
  line-height: 36px;
  margin-bottom: 36px;
`;

export const TextHeading = styled.h2`
  margin-bottom: 36px;
  font-weight: 600;
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 170px;
  margin-top: 64px;
  border-top: 1px solid var(--gray);
`;
