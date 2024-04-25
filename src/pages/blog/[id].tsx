import ButtonAction from "@/components/ButtonAction"
import Layout from "@/components/Layout"

const BlogDetailPage = () => {
  return (
    <Layout pageTitle="Blog Detail">
        <div className="container">
            <div>
                <h1 className="text-2xl font-bold my-4">Blog Detail</h1>
                <ButtonAction/>
            </div>
            <p className="text-slate-700">Blog detail content</p>
        </div>
    </Layout>
  )
}

export default BlogDetailPage