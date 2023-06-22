import Container from "@/components/container";
import Link from "next/link";

export default function DashboardLayout({children, // will be a page or nested layout
}: { children: React.ReactNode }) {
    const navStyle = {
          slate: "pr-2 transition ease-in-out duration-300 hover:bg-slate-700"
    };

    return (
        <Container>
            <h1 className={"font-bold text-2xl"}>App Dashboard</h1>

            <nav>
                <Link href={"/dashboard"} className={navStyle.slate}>|Main Page</Link>
                <Link href={"/dashboard/settings"} className={navStyle.slate}>|Settings</Link>
            </nav>

            <div className={"bg-white py-4 text-slate-600"}>
                {children}
            </div>
        </Container>
    )
}