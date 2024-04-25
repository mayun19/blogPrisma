"use client"
import FormPost from "@/components/FormPost";
import Layout from "@/components/Layout";
import { FormInputPost } from "@/utils/type";
import { SubmitHandler } from "react-hook-form";

const CreateBlog = () => {
   const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
    
   };
  return (
    <Layout pageTitle="Create Post">
      <h2 className="text-3xl text-center">Create Post</h2>
      <FormPost submit={handleCreatePost} isEditing={false}/>
    </Layout>
  );
};

export default CreateBlog;
