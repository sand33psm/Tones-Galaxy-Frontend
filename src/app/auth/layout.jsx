import Navbar from "@/components/Navbar/Navbar"

function AuthLayout({ children }) {
  return (
    <section className="w-full">
    <Navbar/>
      <div className="h-screen flex items-center justify-center">
        {children}
      </div>
    </section>
  )
}

export default AuthLayout