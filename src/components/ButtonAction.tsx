import { PencilLine, Trash2 } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

const ButtonAction = () => {
  return (
    <div className="flex gap-3">
      <Link href={"/edit/title"} className="btn btn-danger">
        <PencilLine /> Edit
      </Link>
      <button className="btn btn-error">
        <Trash2 strokeWidth={1.5} /> Delete
      </button>
    </div>
  );
}

export default ButtonAction