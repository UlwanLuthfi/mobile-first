import Header from "@/components/landing-page/header";
import Main from "@/components/landing-page/main";
import Navbar from "@/components/landing-page/sidebar";

export default function Home() {
  return (
    <div className="m-4 space-y-8">
      <Header />
      <Main />
    </div>
  );
}
