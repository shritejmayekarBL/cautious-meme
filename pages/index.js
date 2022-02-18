import Link from "next/link";
function HomePage() {
  return (
    <div>
      <div>Welcome to NextJs HomePage</div>
      <div>
        <Link href="/">
          <a>HomePage</a>
        </Link>
        <br />
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
