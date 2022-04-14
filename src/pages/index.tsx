import React from 'react';

import { Landing } from '@/containers/Landing/Landing';
import { Layout } from '@/layout/Layout';
import { Meta } from '@/layout/Meta';

export default function LandingPage() {
  return (
    <Layout
      meta={
        <Meta
          title="Cutshort Mock-Up"
          description="Cutshort mock up by Abdul Mateen"
        />
      }
    >
      <Landing />
    </Layout>
  );
}
