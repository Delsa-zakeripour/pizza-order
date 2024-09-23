import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { getTotalCartQuantity } from "./CartSlice";
// import { getTotalCartPrice } from "./CartSlice";

function CartOverview() {
  // const totalQuantity = useSelector(getTotalCartQuantity);
  // console.log(getTotalCartPrice);

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        {/* <span>{totalQuantity} pizzas</span> */}
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart</Link>
    </div>
  );
}

export default CartOverview;