import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>Products</title>
            <link href='https://fonts.googleapis.com/css?family=Muli' rel='stylesheet'></link>
        </Head>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;
