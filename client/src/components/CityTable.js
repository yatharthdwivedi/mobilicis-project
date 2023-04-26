import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";


const CityTable = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const {data} = await axios.get(`${process.env.REACT_APP_API}/api/user/users/cities`); // Replace with your backend API endpoint for fetching city data
        setCities(data.users);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCities();
  }, []);

  let i=1;

  return (
    <div>
      <Navbar/>
      <h1 className="text-center mb-3">City Table</h1>
      <h3 className="text-center m-3">Top 10 cities which have the highest number of users and their average income</h3>
      <table className="text-center table">
        <thead>
          <tr>
            <th>City</th>
            <th>Count   </th>
            <th>Average Income</th>
          </tr>
        </thead>
        <tbody>
          {cities?.map(city => (
            <tr key={city._id}>
              <td>{i++}</td>
              <td>{city.count}</td>
              <td>{city.avg_income.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CityTable;

