import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({coffees,setCoffees,coffee}) => {
const {name,quantity,category,details,phone,photo,supplier,taste,_id} = coffee;
const handleDelete = _id=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:4000/coffee/${_id}`,
            {
                method:'DELETE'
            }
          )
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Coffee has been deleted.",
                    icon: "success"
                  });
                  const remaining = coffe.filter(coff => coff._id !== _id);
                  setCoffees(remaining);
            }
          })
        }
      });
}
    return (
        <div>
            <div className="card card-side p-8 bg-[#b49f85] text-white">
  <figure>
    <img className="h-[240px] p-4"
      src={photo}
      alt="Movie" />
  </figure>
  <div className="flex justify-between w-full items-center">
    <div>
    <h2 className="card-title">Name: {name}</h2>
    <p>{details}</p>
    <p>{supplier}</p>
     <p>Quantity: {quantity}</p>
     <p>Taste: {taste}</p>
    </div>
    <div className="card-actions justify-end">
    <div className="join join-vertical p-4 space-y-4">
  <button className="btn">View</button>
  <Link to={`/updatecoffee/${_id}`}>
    <button className="btn">Edit</button>
</Link>
  <button onClick={()=>handleDelete(_id)} className="btn">Delete</button>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default CoffeeCard;