import React from 'react';
import Layout from '@/components/homepage/layout/Layout';

import MainHero from '@/components/homepage/sections/MainHero';
import Showcase from '@/components/homepage/sections/Showcase';
import Expirience from '@/components/homepage/sections/Expirience';
import Instructions from '@/components/homepage/sections/Instructions';
import Reviews from '@/components/homepage/sections/Reviews';
import Banner from '@/components/homepage/sections/Banner';

import LoginFormProvider from '@/context/LoginFormProvider';

export default function HomePage() {
  

  return (
    <LoginFormProvider>
      <Layout >
        <main className='snap-y'>
          <MainHero />
          <Reviews />
          <Expirience />
          <Showcase />
          <Instructions />
          <Banner />
        </main>
      </Layout>
    </LoginFormProvider>
  )
}
