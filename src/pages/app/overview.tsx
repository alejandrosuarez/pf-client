import clsx from 'clsx';

import GeneralInfo from '@/components/page/app/general/GeneralInfo';
import Summary from '@/components/page/app/general/Summary';
import Layout from '@/components/page/app/Layout';

import { demoData } from '@/constant/demoData';

export default function OverviewPage() {
  /* 
    const bankData = session ? data : demoData 
  */

  return (
    <Layout>
      <section
        className={clsx(
          'px-2 md:px-6',
          'flex',
          'flex-col lg:flex-row',
          'h-max w-full gap-6 '
        )}
      >
        <GeneralInfo
          banksData={demoData}
          className='h-[85vh] w-full md:h-[65vh] lg:h-[85vh] lg:w-1/3'
        />
        <Summary
          banksData={demoData}
          className='h-[85vh] w-full md:h-[65vh] lg:h-[85vh] lg:w-2/3'
        />
      </section>
    </Layout>
  );
}
