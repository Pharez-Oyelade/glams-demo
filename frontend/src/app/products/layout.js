import Navbar from "../components/Navbar";

export default function ProductLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="pt-12 md:pt-20 px-5 md:px-10">{children}</div>
    </div>
  );
}
