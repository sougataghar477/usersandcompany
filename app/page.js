import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-items-center h-screen px-2 py-4 md:py-8">
      <div className="boxShadow p-4 lg:p-16 rounded-lg">
        <h1 className="text-4xl mb-4  ">Users and Company Management</h1>
        <Link
          className="text-blue-500 mr-4 hover:text-blue-700 hover:underline transition duration-300"
          href={'/company'}>
          Show Companies
        </Link>
        <Link
          className="text-blue-500 mr-4 hover:text-blue-700 hover:underline transition duration-300"
          href={'/users'}>
          Show Users
        </Link>
        </div>

    </div>
  );
}
