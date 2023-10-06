import { Link } from "react-router-dom";


const NewsCard = ({aNews}) => {
    const {details,image_url,title,_id} = aNews;
    return (
        <div className="card mb-16  bg-base-100 shadow-md">
            <h2 className="card-title">{title} </h2>
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="p-2">
          
         
          {
            details.length > 200 ? <p>{details.slice(0,190)} <Link to={`/news/${_id}`} className="text-blue-500 font-bold">Read More...</Link> </p>
            :
            <p>{details} </p>
          }
        
        </div>
      </div>
    );
};

export default NewsCard;