const Jokes = (props) => {
    return ( 
       <div className="joke">
          { props.setup && <h3>setup;{props.setup}</h3>}
          {/* <h3 style= {{display: props.setup ? "block" :"none"}}>{props.setup}</h3> */}
           <p>punchline; {props.punchline}</p>
           <hr />
       </div> 
     );
}
 
export default Jokes;