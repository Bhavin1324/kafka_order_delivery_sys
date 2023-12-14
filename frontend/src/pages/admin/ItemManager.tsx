import { useState } from "react";
import { Item } from "../../types/interfaces";
import ItemForm from "../../components/ItemForm";
import { openModal, closeModal } from "../../features/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import PHModal from "../../components/custom/Modals/PHModal";
import PHDataTable from "../../components/custom/DataTables/PHDataTable";
import { nanoid } from "nanoid";

const ItemManager = () => {
  ā
  const dispatch = useDispatch()
  const [isAdd, setisAdd] = useState(false)
  const [isUpdate, setisUpdate] = useState(false)
  const { isOpen } = useSelector((store: RootState) => {
    return store.modal
  })
  const initialItems = [
    {
      img: "abcd",
      id: "asdadad",
      name: "tometopizza",
      category_id: "sadas",
      description: "jghadjfgasjfgjssdfsf",
      tax_slab_id: "abcd",
      price: 110,
      is_veg: true
    },
    {
      img: "abcd",
      id: "asdadaasdd",
      name: "Cheese pizza",
      category_id: "sadas",
      description: "jghadjfgadasdsjfgjssdfsf",
      tax_slab_id: "abcd",
      price: 150,
      is_veg: true
    }

  ]
  const [items, setItems] = useState<Item[]>(initialItems);
  const [itemupdate, setitemupdate] = useState<Item>({})
  // useEffect(() => {
  //   // Fetch items from an API or local storage
  //   fetch('https://your-api-endpoint/items')
  //     .then((response) => response.json())
  //     .then((data) => setitems(data));
  // }, []);

  const handleAddItem = (item: Item) => {
    console.log(item)
    item.id = nanoid();
    let tmp: Item = {
      img: item.img,
      id: item.id,
      name: item.name,
      category_id: item.category_id,
      description: item.description,
      tax_slab_id: item.tax_slab_id,
      price: item.price,
      is_veg: item.is_veg
    }
    setItems([...items, tmp]);
    dispatch(closeModal())
    setisAdd(false)
  };

  const handleEdititem = (item: Item) => {


    setitemupdate(item)
    setisUpdate(true)
    dispatch(openModal())


  };


  const handleUpdate = (item: Item) => {
    let tmp: Item = {
      img: item.img,
      id: item.id,
      name: item.name,
      category_id: item.category_id,
      description: item.description,
      tax_slab_id: item.tax_slab_id,
      price: item.price,
      is_veg: item.is_veg
    }
    setItems(
      items.map((item) => (item.id === tmp.id ? tmp : item))
    )
    dispatch(closeModal())
    setisUpdate(false)
  }
  const handleDeleteitem = (id: string) => {
    console.log(id)
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container px-4 py-10">
      <div className="flex justify-between flex-wrap">
        <button
          className="btn-theme"
          onClick={() => { setisAdd(true); dispatch(openModal()) }}
        >
          Add New item
        </button>
      </div>

      {isAdd && <PHModal
        isOpen={isOpen}
        onClose={() => { setisAdd(false); dispatch(closeModal()) }}
        headingText="Add item"
        component={<ItemForm
          update={null}
          onEvent={handleAddItem}
          action="Add item" />}
      />}

      <PHDataTable
        title="Pizza Store Items"
        data={items}
        onDelete={handleDeleteitem}
        onUpadate={handleEdititem}
      />





      {isUpdate && <PHModal
        isOpen={isOpen}
        onClose={() => { setisUpdate(false); dispatch(closeModal()) }}
        headingText="Update item"
        component={<ItemForm
          onEvent={handleUpdate}
          update={itemupdate}
          action="Update item" />}
      />}

    </div>
  )
}

export default ItemManager