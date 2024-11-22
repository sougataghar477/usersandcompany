import CompanyCard from "@/components/CompanyCard";
async function Companies(){
    let companies = null;
    let error = null;
  
    try {
        
      const companiesResponse = await fetch(`https://673736a9aafa2ef222330e54.mockapi.io/company`);
        
 
      if (!companiesResponse.ok) {
        throw new Error(`Company Id not found.`);
      }
  
      
      companies = await companiesResponse.json();
       
    } catch (err) {
  
      error = err.message || "An unexpected error occurred.";
    }
    return <div className="max-w-screen-lg mx-auto px-4 py-4 md:py-8">
        <h1 className="text-4xl mb-8">Companies</h1>
        <div className="flex flex-wrap gap-4 justify-center">
            {companies.map((company,index)=> <CompanyCard key={index} company={company}/>)}
        </div>
    </div>
}
export default Companies;