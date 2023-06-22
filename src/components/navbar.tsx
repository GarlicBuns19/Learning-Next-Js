import Link from "next/link";

export default function Navbar() {
    const navStyle = {
        slate: "pr-2 transition ease-in-out duration-300 hover:bg-slate-700"
    };

    return (
        <nav>
            <Link href={"/dashboard"} className={navStyle.slate}>|Main Page</Link>
            <Link href={"/dashboard/settings"} className={navStyle.slate}>|Settings</Link>
        </nav>
    )
}