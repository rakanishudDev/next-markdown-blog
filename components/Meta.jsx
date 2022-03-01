import Head from 'next/head'

const Meta = ({title, desc, keywords}) => {
  return (
    <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={desc} />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
    title: "Dev-Blog",
    desc: "Blog for developers and coding",
    keywords: "web, coding"
}

export default Meta