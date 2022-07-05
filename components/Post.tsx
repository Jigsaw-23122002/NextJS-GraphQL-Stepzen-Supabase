import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import TimeAgo from 'react-timeago';

type Props = {
  post: Post;
};

function Post({ post }: Props) {
  return (
    <div className="rounded-md flex cursor-pointer border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600">
      <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpIcon className="voteButtons hover:text-red-400" />
        <p className="text-xs font-bold text-black">0</p>
        <ArrowDownIcon className="voteButtons hover:text-blue-400" />
      </div>

      <div>
        <div className="flex items-center space-x-2">
          <Avatar/>
          <p className="text-xs text-gray-400">
            <span className="font-bold text-black hover:text-blue-400 hover:underline">r/{post.subreddit[0]?.topic}</span> Posted by u/{post.username} <TimeAgo date={post.created_at}/>
          </p>
        </div>

        <div className="py-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="mt-2 text-sm font-"></p>
        </div>
      </div>
    </div>
  );
}

export default Post;
