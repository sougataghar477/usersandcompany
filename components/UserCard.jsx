import Link from "next/link";

function UserCard({ user }) {
  return (
    <Link className="bg-blue-950 animate hover:-translate-y-1 hover:bg-blue-900 transition duration-300 shadow-lg p-4 mb-2 w-full md:w-80 h-80 rounded-2xl grid place-items-center text-center transition hover:shadow-md" href={`/users/${user.id}`}>
      <div >
        <h1 className="text-xl text-white">{user.name}</h1>
        <p className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300">Show User Details</p>
      </div>
    </Link>
  );
}

export default UserCard;
