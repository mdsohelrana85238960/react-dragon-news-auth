import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() =>{
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))

  }, [])
    return (
        <div>
          <h2 className="text-2xl">All Categories</h2>
          {
            categories.map(category => <Link to={`/category/${category.id}`} key={category.id} className="block font-bold mt-6 text-1xl text-gray-500  "> {category.name} </Link>)
          }

        </div>
    );
};

export default LeftSideNav;