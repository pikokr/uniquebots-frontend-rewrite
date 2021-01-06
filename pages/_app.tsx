import React from 'react';
import Layout from '../components/Layout';
import '../styles/global.css'

const MyApp = ({Component, pageProps}: any) => {
    return  <Layout>
        <Component {...pageProps}/>
    </Layout>
};

export default MyApp;