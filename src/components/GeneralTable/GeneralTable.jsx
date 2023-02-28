import { Table } from "react-bootstrap";
import './GeneralTable.css'

const GeneralTable = ({headings, items, setSelected, selected}) => {
  console.log(selected);
  return ( 
    <Table striped bordered hover>
    <thead>
      <tr>
        {headings.map((heading,index)=><th key={index}>{heading}</th>)}        
      </tr>
    </thead>
    <tbody>
      {
        items.length!==0 && items.map((item,index)=>
        <tr key={index} onClick={()=>setSelected(item._id)} className={selected===item._id? 'row-selected' : ''}>
          {
          Object.values(item).map((value,index)=>
            <td key={index}>{value}</td>
          )
          }
        </tr>
          )
      }
      
    </tbody>
  </Table>
   );
}
 
export default GeneralTable;

