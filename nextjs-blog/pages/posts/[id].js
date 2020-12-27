import { getAllPostIds, getPostData } from '../../lib/posts'
import Link from 'next/link'
import Layout from '../../components/layout'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Head from 'next/head'

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br/>
          <small className={utilStyles.lightText}>
            <Date dateString={date}></Date>
          </small>
        </li>
      </Layout>
    )
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
       postData
    }
   }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}