import Link from "next/link";
export default async function CompanyDetail({ params }) {
    let company = null;
    let error = null;
    let users = null;
    try {

        const { id } = await params;
        const fetchCompanyById = await fetch(`https://673736a9aafa2ef222330e54.mockapi.io/company/${id}`);

        const usersFetch = await fetch("https://673736a9aafa2ef222330e54.mockapi.io/users");

        if (!fetchCompanyById.ok || !usersFetch.ok) {
            throw new Error(`Company Id not found.`);
        }
        company = await fetchCompanyById.json();

        let allusers = await usersFetch.json();
        
        users = allusers.filter(i => i.companyId=== company.id)
    } catch (err) {
        error = err.message || "An unexpected error occurred.";
    }
    return (
        <div className="max-w-screen-lg mx-auto px-4 py-4 md:py-8">
            <h1 className="text-4xl mb-4">Company Detail</h1>
            {error ? <h1>{error}</h1> : <div className="boxShadow bg-blue-950 text-white p-4 rounded-md">
                <p><b>Name:</b> {company.companyName}</p>
                <p><b>Email:</b> {company.email}</p>
                <p><b>Mobile Number:</b> {company.mobileNumber}</p>
                <p><b>Address:</b> {company.address}</p>
                <p><b>Id:</b> {company.id}</p>
                {users && (
                    <div>
                        <b>Users:</b>
                        {users.map((user) => (
                            <span key={user.id} className="ml-2">
                                <Link
                                    className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300"
                                    href={`/users/${user.id}`}
                                >
                                    {user.name}
                                </Link>
                            </span>
                        ))}
                    </div>
                )}

            </div>}
        </div>
    );
}

