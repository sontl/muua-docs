import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import CustomersSection from '../components/CustomersSection';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';

const title = 'Directory Sync';
const description =
  'One simple integration to automate user and group provisioning. Supports SCIM 2.0 protocol for most major providers';

const ProductIcon = require('../../static/img/products/dsync/logo.svg').default;

const Icon1 =
  require('../../static/img/products/dsync/meet_the_team.svg').default;

const Icon2 =
  require('../../static/img/products/dsync/data_points.svg').default;

const DSync = () => {
  return (
    <Layout title={title} description={description}>
      <HeroSection
        title={title}
        description={description}
        image="/img/feat-dsync.svg"
        icon={ProductIcon}
        buttons={[
          {
            title: 'Get started',
            href: 'https://github.com/boxyhq/jackson#directory-sync',
            className: 'button--primary',
          },
          {
            title: 'View docs',
            href: '/docs/directory-sync/overview',
            className: 'button--primary button--outline',
          },
        ]}
      />

      <CustomersSection />

      <DeveloperCommunitySection />
    </Layout>
  );
};

export default DSync;
