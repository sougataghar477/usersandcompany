import Link from "next/link";

function CompanyCard({ company }) {
  return (
    <Link className="shadow-lg p-4 mb-2 w-full md:w-80 h-80 rounded-2xl grid place-items-center text-center transition hover:shadow-md" href={`/company/${company.id}`}>
      <div >
        <h1 className="text-xl">{company.companyName}</h1>
        <p className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300">Show Company Details</p>
      </div>
    </Link>
  );
}

export default CompanyCard;
