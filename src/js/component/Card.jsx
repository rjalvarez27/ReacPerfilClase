import React from "react";

const Card = ({carPicture,name,apellido,roll,status}) => {
   return (
    <div>
      <div className="card w-50 m-auto my-5">
         {
           carPicture === true && (
          <img
          src="https://picsum.photos/seed/picsum/200/200"
          className="card-img-top h-50"
        />

         )}
       
        <div className="card-body">
          <h5 className="card-title">{name} {apellido}</h5>
          <h5 className="card-text">{roll}</h5>
          <div className="p-2 bg-success">
          <div className="text-center">{status}</div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
