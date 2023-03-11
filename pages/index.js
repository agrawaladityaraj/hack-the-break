import Head from "next/head";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.BACKEND_URL, process.env.API_KEY);

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Project buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
    </>
  );
}
