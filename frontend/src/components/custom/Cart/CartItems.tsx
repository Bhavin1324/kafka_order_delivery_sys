import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
function CartItems({
  item,
  onRemove,
}: {
  item: { id: string; name: string; category: string; price: number };
  onRemove: (id: string) => void;
}) {
  return (
    <div className="item-list my-2 shadow-md rounded-md py-3 px-4">
      <div className="flex justify-between">
        <div>
          <div className="flex">
            <div className="item-heading text-xl font-bold mb-2">
              {item.name}
            </div>
            <div className="inline-block font-semibold text-sm px-2 py-1 bg-ph-yellow-soft rounded-xl mb-2 ml-3">
              {item.category}
            </div>
          </div>
          <div className="item-heading text-lg self-center font-semibold me-4 text-green-700">
            {item.price} <CurrencyRupeeIcon style={{ fontSize: "14px" }} />
          </div>
          <button
            className="btn btn-danger mt-2 flex"
            onClick={() => {
              onRemove(item.id);
            }}
          >
            <HighlightOffIcon /> <span>Remove</span>
          </button>
        </div>

        <div className="flex-col self-center">
          <div>
            <button className="btn-theme-filled-shadowed px-2">
              <ExpandLessIcon />
            </button>
            <div className="self-center inline-block mx-3">1</div>
            <button className="btn-theme-filled-shadowed px-2">
              <ExpandMoreIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
