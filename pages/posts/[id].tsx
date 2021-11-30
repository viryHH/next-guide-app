import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }:{postData:any}) {
  return (
    <Layout home={false}>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }:{ params:any }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
