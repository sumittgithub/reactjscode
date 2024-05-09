import React, { useState, useEffect } from 'react';

function FetchDataAndBindToTextbox() {
  const [userData, setUserData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users/2');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const result = await response.json();
        setUserData(result.data); // Assuming the API response contains a 'data' object with user details
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    // This function can be used to handle changes in the textbox, but we won't be using it in this example
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>User Data:</h1>
      <input
        type="text"
        value={userData.id} // Assuming 'id' is the property containing the user ID
        onChange={handleChange}
        placeholder="User ID"
      />
    </div>
  );
}

export default FetchDataAndBindToTextbox;
