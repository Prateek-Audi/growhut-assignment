import Link from "next/link";

export default function Home () {
return (
    <div className="w-full h-full">
        <Link href={"/dashboard"}><span>Welcome! Redirect To DashBoard</span></Link>
    </div>
);
}