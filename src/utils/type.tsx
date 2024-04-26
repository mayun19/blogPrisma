import { ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";
import { Tag } from "@prisma/client";

export type ChildProps = {
  pageTitle?: String;
  children: ReactNode;
};

export type ResponseData = {
  tags?: { id: string; name: string }[];
  posts?: Post[];
  post?: Post[];
  message?: string;
};

export type PostData = {
  post: Post;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  tag?: Tag;
};

export type PostProps = {
  posts?: Post[];
};

export type FormInputPost = {
  title: string;
  content: string;
  tag?: Tag | null;
};

export type FormPost = {
  submit: SubmitHandler<FormInputPost>;
  isEditing?: boolean;
  tags?: string;
};

export type BlogDetail = {
  id: any;
  params?: {
    id: string | null
  }
  title: string
  content: string
  tag: {
    name: string
  }
}
export type BlogProps = {
  post: BlogDetail | null;
};

export type ButtonAction = {
  postId: string;
};