import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import itemsData from "../data/items.json"; // Import the JSON data

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    dispatch(fetchStatusActions.markFetchingStarted());

    // Simulate fetch by using imported JSON data
    setTimeout(() => {
      dispatch(fetchStatusActions.markFetchDone());
      dispatch(fetchStatusActions.markFetchingFinished());
      dispatch(itemsActions.addInitialItems(itemsData.items[0]));
    }, 1000); // Simulate network delay with setTimeout

  }, [fetchStatus, dispatch]);

  return null; // No need to render anything from this component
};

export default FetchItems;
