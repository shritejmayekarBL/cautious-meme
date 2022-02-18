import Link from "next/link";
function About() {
  return (
    <div>
      <div>About</div>
      <div>
        <Link href="/">
          <a>Back to HomePage</a>
        </Link>
      </div>
    </div>
  );
}

export default About;
