/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { DeliveryPerson, Item, Outlet } from "../../types/interfaces";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
interface TableProps<T> {
  data: T[];
  title: string;
  onUpadate: (data: T) => void;
  onDelete: (id: string) => void;
}
type T = Outlet | Item | DeliveryPerson;
function PHDataTable(props: TableProps<T>) {
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
  useEffect(() => {}, [props]);
  return (
    <div className="mt-4 overflow-x-auto">
      <div className="container">
        <div className="flex justify-between mb-2">
          <div className="text-3xl font-bold self-center">{props.title}</div>
          <input
            type="text"
            className="ph-input-text w-[30%] mt-2"
            placeholder="Search through table"
            onChange={renderList}
            value={search}
          />
        </div>
        <table className="table table-hover">
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
                      className="btn btn-primary"
                      onClick={() => {
                        props.onUpadate(item);
                      }}
                    >
                      <EditIcon />
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        props.onDelete(item?.id);
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PHDataTable;
