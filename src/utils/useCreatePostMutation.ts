// useCreateBlogPostMutation.ts
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FormInputPost } from "@/utils/type";

const useCreateBlogPostMutation = () => {
  const createBlogPostMutation = useMutation(
    async (newPost: FormInputPost) => {
      const response = await axios.post("/api/posts/create", newPost);
      return response.data;
    },
    {
      onError: (error) => {
        console.error("Error creating blog post:", error);
      },
      onSuccess: () => {
        console.log("Blog post created successfully!");
      },
    }
  );

  return createBlogPostMutation;
};

export default useCreateBlogPostMutation;