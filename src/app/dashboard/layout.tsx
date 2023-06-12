import Container from "@/components/container";

export default function DashboardLayout({children, // will be a page or nested layout
}: { children: React.ReactNode }) {
    return (
        <Container>
            <h1 className={"font-bold text-2xl"}>App Dashboard</h1>

            <div className={"bg-white py-4 text-slate-600"}>
                {children}
            </div>
        </Container>
    )
}