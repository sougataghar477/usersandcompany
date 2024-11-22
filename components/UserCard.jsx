import Link from "next/link";

function UserCard({ user }) {
  return (
    <Link className="shadow-lg p-4 mb-2 w-full md:w-80 h-80 rounded-2xl grid place-items-center text-center transition hover:shadow-md" href={`/users/${user.id}`}>
      <div >
        <h1 className="text-xl">{user.name}</h1>
        <p className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300">Show User Details</p>
      </div>
    </Link>
  );
}

export default UserCard;
