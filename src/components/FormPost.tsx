"use client";
import { FormInputPost, FormPost } from "@/utils/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { FC } from "react";
import { useForm } from "react-hook-form";

const FormPost: FC<FormPost> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

  // //fetch list tags
  // const { data: dataTags, isLoading: isLoadingTags } = useQuery({
  //   queryKey: ["tags"],
  //   queryFn: async () => {
  //     const response = await axios.get("/api/tags");
  //     return response.data;
  //   },
  // });

  // console.log(dataTags);

  return (
    <form
      className="flex flex-col items-center justify-center gap-5 mt-10"
      onSubmit={handleSubmit(submit)}>
      <input
        type="text"
        {...register("title", { required: true })}
        placeholder="Blog Post Title..."
        className="input w-full max-w-lg"
      />
      <textarea
        className="textarea textarea-bordered w-full max-w-lg"
        {...register("content", { required: true })}
        placeholder="Post content..."></textarea>
      <select
        className="select select-bordered w-full max-w-lg"
        {...register("tag", { required: true })}
        defaultValue="">
        <option disabled value="">
          Select tags
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update Blog Post" : "Create Post"}
      </button>
    </form>
  );
};

export default FormPost;
