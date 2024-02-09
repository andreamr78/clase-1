import Button from 'react-bootstrap/Button';

function Counter({datos}) {
    console.log(datos);
  return (
    <div>
        <Button variant="primary">CLICK</Button>
       {/* {datos.map((dato)=> {
            return(
                <>
                    <h1>{dato}</h1>
                </>
            )
       })} */}
    </div>
  )
}

export default Counter