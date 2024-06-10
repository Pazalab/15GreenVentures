import Topbar from "./(common)/Topbar"

export default function AdminLayout({ children}) {
     return (
             <section>
                      <Topbar />
                       { children }
             </section>
     )
}