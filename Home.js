import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section class="link-container">
      <Link href="login">LOGIN</Link>
      <br></br>
      <br></br>
      <Link href="registration">registration</Link>
    </section>
  );
}
