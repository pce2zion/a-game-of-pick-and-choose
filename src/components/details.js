//  import Real from "../images/real.jpg"
const Details = (props) => {
    console.log(props);
    let position;
    if (props.open === 0) {
        position = 'SOLD OUT'
     } else if (props.country === 'Online') {
          position = 'ONLINE'
      }  
    
    return ( 
        <div className="details">
            <img src={props.image}  className="real" alt="real" />
           {position && <p className="sold">{position}</p>}
           

            <span>{props.rating} ({props.reviewCount}) {props.country}</span>
            <p>{props.title} </p>
            <p><b>from ${props.price}</b>/person</p>
        </div>
     );
}
 
export default Details;