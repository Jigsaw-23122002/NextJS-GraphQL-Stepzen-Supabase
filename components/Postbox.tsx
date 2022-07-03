import { LinkIcon, PhotographIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import React from "react";
import Avatar from "./Avatar";

function Postbox() {
  const { data: session } = useSession();
  return (
    <form>
      <div className="flex items-center space-x-3">
        <Avatar />
        <input
          className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
          disabled={!session}
          type="text"
          placeholder={
            session ? "Create a post by entering a title!" : "Sign in to post"
          }
        />
      </div>
      <PhotographIcon className={`h-6 cursor-pointer text-gray-300`}/>
      <LinkIcon className="h-6 text-gray-300"/>
    </form>
  );
}

export default Postbox;
