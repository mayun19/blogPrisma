import { ButtonAction } from "@/utils/type";
import axios from "axios";
import { PencilLine, Trash2 } from "lucide-react";
import Link from "next/link";
import router from "next/router";
import React, { FC } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const ButtonAction: FC<ButtonAction> = ({ postId }) => {
  async function DeletePost() {
    if (window.confirm("Do you want to delete this Post?")) {
      await axios.delete(`/api/posts/delete?id=${postId}`);
      toast.success("Post deleted successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      router.push("/");
    }
  }
  return (
    <div className="flex gap-3">
      <Link href={`/blog/edit/${postId}`} className="btn btn-danger">
        <PencilLine /> Edit
      </Link>
      <button onClick={DeletePost} className="btn btn-error">
        <Trash2 strokeWidth={1.5} /> Delete Post
      </button>
      <ToastContainer />
    </div>
  );
};

export default ButtonAction;