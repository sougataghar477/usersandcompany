import UserCard from "@/components/UserCard";
async function Companies(){
    let users = null;
    let error = null;
  
    try {
      const usersResponse = await fetch(`https://673736a9aafa2ef222330e54.mockapi.io/users`);
        
 
      if (!usersResponse.ok) {
        throw new Error(`Company Id not found.`);
      }
  
      
      users = await usersResponse.json();
      console.log(users)
    } catch (err) {
  
      error = err.message || "An unexpected error occurred.";
    }
    return <div className="max-w-screen-lg mx-auto px-4 py-4 md:py-8">
        <h1 className="text-4xl mb-8">Users</h1>
        <div className="flex flex-wrap gap-4 justify-center">
            {users && users.map((user,index) => <UserCard key={index} user={user}/>)}
        </div>
    </div>
}
export default Companies;