import React from 'react';
import NewsletterSubscription from '../components/common/NewsletterSubscription';
import Slider from '../components/common/Slider';

const PageLayout = ({ children }) => {
  return (
    <>
      {children}
      <NewsletterSubscription />
      <Slider />
    </>
  );
};

export default PageLayout;
