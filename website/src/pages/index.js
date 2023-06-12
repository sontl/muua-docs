import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Layout from '@theme/Layout';

const title = 'Muua';
const description = 'Cửa hàng tối giản đẹp cho hầu hết mọi thứ';

const IndexPage = () => {
  useEffect(() => {
    redirectToDocs();
  }, []);

  const redirectToDocs = () => {
    if (typeof window !== 'undefined') {
      window.location.replace('/docs');
    }
  };

  return <Layout title={title} description={description}></Layout>;
};

export default IndexPage;
