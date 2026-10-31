 import "./card.css";
 
 function Card(props){
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
<div className="card text-center">
  <div className="card-header">
        <h3>{props.name}</h3>

  </div>
  <div className="card-body">
        <img src={props.img} alt={props.alt} />
        <p>{props.email}</p>
        <p>{props.tel}</p>
  </div>
</div> 
                </div>
            </div>
        </div>
   
)
}

export default Card;