import Head from 'next/head';

export default function MyHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <link
            rel="preload"
            href="/fonts/OperatorMBR.otf"
            as="font"
            crossOrigin=""
          />
      <link
            rel="preload"
            href="/fonts/Karla.ttf"
            as="font"
            crossOrigin=""
          />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  );
}