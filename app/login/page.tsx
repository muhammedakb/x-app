import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AuthButtonClient from '../auth-button-client';
import GithubButton from './github-button';

export default async function Login() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect('/');
  }

  return (
    <div className='flex-1 flex flex-col justify-center items-center'>
      <h2 className='text-xl font-bold tracking-wider'>Login with Github</h2>
      <GithubButton />
    </div>
  );
}
