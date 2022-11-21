import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props: any) => (
  <li>
    <ContentLoader
      speed={2}
      width={250}
      height={150}
      viewBox="0 0 250 150"
      backgroundColor="#e0f2f1"
      foregroundColor="#ffffff"
      {...props}>
      <rect x="215" y="109" rx="0" ry="0" width="3" height="1" />
      <rect x="0" y="9" rx="15" ry="15" width="250" height="140" />
    </ContentLoader>
  </li>
);

export default Skeleton;
