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

      <FeatureSection
        title="Give enterprises the user lifecycle management they need"
        btnLink="https://meetings.hubspot.com/deepakprab/demo?__hstc=213510283.9a563789bb583fca1e9fb20a629c5c94.1651597904536.1664893584285.1664895920328.169&__hssc=213510283.1.1664895920328&__hsfp=498882655"
        btnText="Book an exploratory call"
        image={Icon1}
        direction="right"
      >
        <p>
          Enterprise customers already use directories to manage user access. By
          allowing them to use their active directory in your product you enable
          them to have higher security standards and centrally manage their
          user's access lifecycle. With Directory Sync by BoxyHQ, you can enable
          this with our simple API.
        </p>
      </FeatureSection>

      <CustomersSection />

      <DeveloperCommunitySection />
    </Layout>
  );
};

export default DSync;
