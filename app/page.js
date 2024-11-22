import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-items-center h-screen">
      <div><h1 className="text-4xl mb-4">Users and Company Managaement</h1>
      <Link className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300" href={'/company'}>Show Companies</Link></div>

    </div>
  );
}
