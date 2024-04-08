import {Link} from "react-router-dom";

function VendingMachine () {

  return (
    <div>
      <Link to="/chips">Chips</Link>
      <br />
      <Link to="/soda">Soda</Link>
      <br />
      <Link to="/sardines">Sardines</Link>
    </div>
  )
}

export default VendingMachine;