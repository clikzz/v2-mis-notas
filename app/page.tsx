import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Main Page</h1>
      <Link href="/signin">Sign In Page</Link>
      <Link href="/signup">Sign Up Page</Link>
    </div>
  );
}
