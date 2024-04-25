import { PostData } from '@/utils/type';
import Link from 'next/link';

const PostCard = ({post}: PostData) => {
  return (
    <div className="card w-full bg-base-100 shadow-md image-full transition-all duration-300 hover:-translate-y-2 flex flex-col cursor-pointer">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body px-4">
        <h1 className="card-title">{post?.title}</h1>
        <p className="line-clamp-5">{post?.content}</p>
        <div className="card-actions justify-end">
          <Link href="/blog/slug" className="hover:underline">
            Read more ...
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCard
