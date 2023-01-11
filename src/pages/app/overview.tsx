import Layout from '@/components/page/app/Layout';
import { useRouter } from 'next/router';

import clsx from 'clsx';

import {
  GeneralInfo,
  ChartGroup,
  ListOfBanks,
} from '@/components/page/app/Overview';
import { useAppPageContext } from '@/context/AppPageContext';

export default function OverviewPage() {
  const { openSidebar } = useAppPageContext();
  const router = useRouter();
  const location = router.asPath.slice(5);
  return (
    <Layout>
      <section
        className={clsx(
          'md:px-3 pt-8',
          'flex h-full flex-col gap-4',
          openSidebar ? 'w-full md:w-[88.2%]' : 'w-full md:w-[95.8%]',
          'overflow-y-scroll'
        )}
      >
        {/* <h4 className='px-2 py-1 text-2xl font-bold capitalize'>{location}</h4> */}
        <div className={clsx('my-1 flex flex-col gap-2 md:flex-row')}>
          <GeneralInfo className='w-full md:w-1/3' />
          <ChartGroup className='h-full w-full md:w-2/3' />
        </div>
        <ListOfBanks />
      </section>
    </Layout>
  );
}
