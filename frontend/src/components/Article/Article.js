import React from 'react';
import {
  ArticleHeading,
  ArticleTitle,
  MainContainer,
  ContentBottom,
  DateStamp,
  ReadStamp,
  LabelStamp,
  Banner,
  Text,
  TextContainer,
  TextHeading,
} from '../../styled-components';
import BannerImage from '../../images/Banner.png';

const Article = () => {
  return (
    <MainContainer>
      <ArticleHeading>
        <ArticleTitle>
          Wireframes: What They Are & How They Support UX
        </ArticleTitle>
        <ContentBottom primary>
          <DateStamp>August 27, 2021</DateStamp>
          <ReadStamp>10 min red</ReadStamp>
          <LabelStamp>UX</LabelStamp>
        </ContentBottom>
      </ArticleHeading>
      <Banner src={BannerImage} alt='Banner text' />
      <TextContainer>
        <Text>
          The logical place to start any design process is with a rough
          wireframe to begin laying the foundation of visual design, user
          interface and user experience.
        </Text>
        <Text>
          This basic documentation is simple enough to start from scratch but
          complex enough to act as a solid foundation going forward. The
          wireframe creates the structure—the backbone—of your entire project
          layout, making it easier to later build individual parts.
        </Text>
        <TextHeading>When Should You Wireframe?</TextHeading>
        <Text>
          This basic documentation is simple enough to start from scratch but
          complex enough to act as a solid foundation going forward. The
          wireframe creates the structure—the backbone—of your entire project
          layout, making it easier to later build individual parts.
        </Text>
        <Text>
          This basic documentation is simple enough to start from scratch but
          complex enough to act as a solid foundation going forward. The
          wireframe creates the structure—the backbone—of your entire project
          layout, making it easier to later build individual parts.
        </Text>
        <Banner src={BannerImage} alt='banner 2' secondary></Banner>
        <TextHeading>When Should You Wireframe?</TextHeading>
        <Text>
          This basic documentation is simple enough to start from scratch but
          complex enough to act as a solid foundation going forward. The
          wireframe creates the structure—the backbone—of your entire project
          layout, making it easier to later build individual parts.
        </Text>
      </TextContainer>
    </MainContainer>
  );
};

export default Article;
