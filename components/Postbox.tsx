import { useSession } from 'next-auth/react'
import React from 'react'
import Avatar from './Avatar';

function Postbox() {
    const {data:session}=useSession();
  return (
    <form>
      <Avatar/>
        <div className='flex items-center space-x-3'>
            <input className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none" disabled={!session} type="text" placeholder={session?'Create a post by entering a title!': 'Sign in to post'}/>
        </div>
    </form>
  )
}

export default Postbox