"use client"
import FormPost from '@/components/FormPost'
import Layout from '@/components/Layout'
import { FormInputPost } from '@/utils/type'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

const BlogEditPage = () => {
    const handleEdit: SubmitHandler<FormInputPost> = (data) => {
      console.log(data);
    };
  return (
   <Layout>
    <h2 className="text-3xl text-center">Blog Edit</h2>
    <FormPost submit={handleEdit} isEditing/>
   </Layout>
  )
}

export default BlogEditPage