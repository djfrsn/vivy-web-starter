import Head from "next/head";

export default ({ title = "Vivy" }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content="Vivy" />
  </Head>
);
