import { ReactNode } from "react";
import type { Post } from "@prisma/client";
import { SubmitHandler } from "react-hook-form";

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
}

export type FormInputPost = {
  title: string;
  content: string;
  tag: string
};

export type FormPost = {
  submit: SubmitHandler<FormInputPost>
  isEditing?: boolean
}