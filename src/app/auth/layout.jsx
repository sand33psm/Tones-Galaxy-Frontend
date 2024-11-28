import Navbar from "@/components/Navbar/Navbar";

function AuthLayout({ children }) {
  return (
    <section className="w-full h-screen overflow-hidden">
      <Navbar />
      <div className="h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
}

export default AuthLayout;
