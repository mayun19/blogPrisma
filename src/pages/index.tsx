import { GetServerSideProps } from "next";
import Layout from "@/components/Layout";
import { db } from "@/utils/prisma";
import PostCard from "@/components/PostCard";

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updateAt: Date;
  tagId: string;
}

type Props = {
  posts: Post[];
};


const Home = ({ posts }: Props) => {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-between lg:py-12 py-5 pt-5">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold">Blog</h1>
        <h2>Browse Article</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 mt-10">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const allPosts = await db.post.findMany();
  const posts: any[] = allPosts.map((post) => ({
    ...post,
    createdAt: post.createdAt.toISOString(),
    updateAt: post.updateAt.toISOString(),
  }));

  return {
    props: {
      posts: posts,
    },
  };
};

export default Home;
