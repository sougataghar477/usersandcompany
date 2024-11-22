export default async function User({ params }) {
    let user = null;
    let error = null;
  
    try {
      const { id } =await params;
      let userFetchById = await fetch(`https://673736a9aafa2ef222330e54.mockapi.io/users/${id}`);
  
   
      if (!userFetchById.ok) {
        throw new Error("User Not Found");
      }
  
      user = await userFetchById.json();
    } catch (err) {
      error = err.message || "An unexpected error occurred.";
    }
  
    return (
      <div className="max-w-screen-lg mx-auto px-4 py-4 md:py-8">
        <h1 className="mb-4 text-2xl">User Details</h1>
  
        {/* Conditional Rendering */}
        {error && (
          <div className="text-red-500">
            <p>Error: {error}</p>
          </div>
        )}
  
        {user && (
          <div className="boxShadow p-4 rounded-md">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.mobileNumber}</p>
            <p><strong>ID:</strong> {user.id}</p>
          </div>
        )}
      </div>
    );
  }
  