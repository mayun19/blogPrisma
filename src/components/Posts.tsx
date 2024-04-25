import { db } from "@/utils/prisma";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import type { Post } from "@prisma/client";
import { GetServerSideProps } from "next";
import { ResponseData } from "@/utils/type";

const Posts = ({postList}: {postList: Post[]}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 mt-10">
      {/* {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))} */}
    </div>
  );
};

export default Posts;