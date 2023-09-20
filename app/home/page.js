import Link from 'next/link';

export default function Page() {
    return (
      <>
      <h1> The Home Page</h1>
      <h2>
      <Link href="/conference">About</Link>
      </h2>
      <h2>
      <Link href="/speakers">Speakers</Link>
      </h2>
      <h2>
      <Link href="/blog">Blog</Link>
      </h2>
      <h2>
      <Link href="/settings">Settings</Link>
      </h2>
      </>
    )
  }