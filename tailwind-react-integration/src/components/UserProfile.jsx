function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="mx-auto rounded-full 
                   w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 
                   object-cover hover:scale-110
                   transition-transform duration-300 ease-in-out"
      />
      <h1
        className="mt-4 font-bold 
                     text-lg sm:text-xl md:text-2xl 
                     text-gray-800
                     hover:text-blue-500"
      >
        John Doe
      </h1>
      <p
        className="mt-2 
                   text-sm sm:text-base md:text-lg 
                   text-gray-600"
      >
        Developer at Example Co.Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
