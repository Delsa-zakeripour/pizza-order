import { useDispatch } from "react-redux";
import { increasQuantityItem, decreasesQuantityItem } from "./CartSlice";
import Button from "../../ui/Button";

function UpdteDataQuantity({pizzaId, currentQuantityById}) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button type="round" onClick={() => dispatch(increasQuantityItem(pizzaId))}>
        +
      </Button>
      <span className="text-sm">{currentQuantityById}</span>
      <Button type="round" onClick={() => dispatch(decreasesQuantityItem(pizzaId))}>
        -
      </Button>
    </div>
  );
}

export default UpdteDataQuantity;
