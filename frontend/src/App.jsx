import { useEffect } from "react";

import FetchItems from "./components/FetchItems";
import TransTable from "./components/TransTable";
import FooterPart from "./components/FooterPart";
import Introduction from "./components/Introduction";

import { useSelector, useDispatch } from "react-redux";
import { getBySearchnMonth } from "./app/api/itemsAPI";
import { setItems } from "./app/features/itemsSlice";

function App() {
  const month = useSelector((state) => state.month.month);
  const search = useSelector((state) => state.search.search);

  const dispatch = useDispatch();

  const intitialData = async () => {
    const data = await getBySearchnMonth(search, month);
    dispatch(setItems({ items: data.transactions }));
  };

  useEffect(() => {
    intitialData();
  }, []);

  return (
    <>
      <Introduction />
      <FetchItems />
      <TransTable />
      <FooterPart />
    </>
  );
}

export default App;
