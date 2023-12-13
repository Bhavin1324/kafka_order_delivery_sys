/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { DeliveryPerson, Item, Outlet } from "../../types/interfaces";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
interface TableProps<T> {
  data: T[];
  onUpadate: (data: T) => void;
  onDelete: (id: string) => void;
}
type T = Outlet | Item | DeliveryPerson;
function DataTable(props: TableProps<T>) { 
  const [list, setList] = useState(props.data);
  const [search, setSearch] = useState("");

  const renderList = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const newList = list.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(search)
    );
    if (
      newList.length === 0 ||
      e.target.value == null ||
      e.target.value == undefined ||
      (typeof e.target.value === "string" && e.target.value.trim().length === 0)
    ) {
      setList(props.data);
    } else {
      setList(newList);
    }
  };
useEffect(() => {
  setList(props.data)
  console.log(props.data)
}, [props])

  
  return (
    <div>
      <input  className="ph-input-text my-5" type="text" onChange={renderList} value={search} placeholder="Search ..." />
    {props.data.length!==0 &&  <table className="table table-hover">
        <thead>
          <tr>
            {Object.keys(list[0]).map((item) => {
              return <th scope="col">{item}</th>;
            })}
            <td></td>
            <td></td>
          </tr>
        </thead>
       
     <tbody>
           {list.map((item) => {
            return (
              <tr>
                {Object.keys(item).map((x) => {
                  return <td>{item[x]}</td>;
                })}
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      props.onUpadate(item);
                     
                    }}
                  >
                   <EditRoundedIcon/>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      props.onDelete(item?.id);
                  
                    }}
                  >
                  <DeleteRoundedIcon/>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
}
    </div>
  );
}

export default DataTable;