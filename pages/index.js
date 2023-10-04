import Layout from '@/components/common/Layout';
import { useState } from 'react';

const HomePage = ({ data }) => {
  const [activePage, setActivePage] = useState(0); // Initial active page index
  return (
    <Layout data={data} activePage={activePage}
      setActivePage={setActivePage}>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = require('@/data.json');

  return {
    props: {
      data,
    },
    revalidate: 3600, // Revalidate every 1 hour (adjust as needed)
  };
}

export default HomePage;

