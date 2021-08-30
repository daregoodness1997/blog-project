import React from 'react';
import {
  BlogAuthor,
  BlogCard,
  MainContainer,
  BlogContent,
  ContentBottom,
  DateStamp,
  BlogImage,
  LabelStamp,
  ReadStamp,
  BlogTitle,
} from '../../styled-components';
import ImageOne from '../../images/image-1.png';
import ImageTwo from '../../images/image-2.png';

const BlogBox = () => {
  return (
    <MainContainer>
      <BlogCard>
        <BlogContent>
          <BlogAuthor>Dare Goodness</BlogAuthor>
          <BlogTitle>Wireframes: What They Are & How They Support UX</BlogTitle>
          <ContentBottom>
            <DateStamp>August 27, 2021</DateStamp>
            <ReadStamp>10 min red</ReadStamp>
            <LabelStamp>UX</LabelStamp>
          </ContentBottom>
        </BlogContent>
        <BlogImage src={ImageOne} alt='A blog post' />
      </BlogCard>
      <BlogCard>
        <BlogContent>
          <BlogAuthor>Dare Goodness</BlogAuthor>
          <BlogTitle>Wireframes: What They Are & How They Support UX</BlogTitle>
          <ContentBottom>
            <DateStamp>August 27, 2021</DateStamp>
            <ReadStamp>10 min red</ReadStamp>
            <LabelStamp>UX</LabelStamp>
          </ContentBottom>
        </BlogContent>
        <BlogImage src={ImageTwo} alt='A blog post' />
      </BlogCard>
      <BlogCard>
        <BlogContent>
          <BlogAuthor>Dare Goodness</BlogAuthor>
          <BlogTitle>Wireframes: What They Are & How They Support UX</BlogTitle>
          <ContentBottom>
            <DateStamp>August 27, 2021</DateStamp>
            <ReadStamp>10 min red</ReadStamp>
            <LabelStamp>UX</LabelStamp>
          </ContentBottom>
        </BlogContent>
        <BlogImage src={ImageOne} alt='A blog post' />
      </BlogCard>
    </MainContainer>
  );
};

export default BlogBox;
