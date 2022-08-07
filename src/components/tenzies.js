const Tenzies = (props) => {
  const  styles ={
       backgroundColor: props.isheld ? " #59e391" :" #ffff"
    }
    return (  
      <div style={styles} onClick={()=>props.holdDie(props.id)} className="whole">
          <h2  className="dienum"> { props.value }   </h2>
        </div>
    );
}
 
export default Tenzies;