// utils/helpers.ts
import activity from "../json/repo_activity.json";

export const htmlTo = (link) => {
  window.location.href = link;
};

export const fetchDataForItem = async (item) => {
  if (item.files && Array.isArray(item.files)) {
    const files = await Promise.all(
      item.files.map(async (file) => {
        if (file.filename.endsWith(".md")) {
          const response = await fetch(file.raw_url);
          const data = await response.text();
          return { ...file, content: data };
        }
        return null;
      })
    );
    return { ...item, files: files.filter(Boolean) };
  } else {
    // If 'item.files' is undefined or not an array, return the item as is
    return item;
  }
};

export const formatDate = (dateString) => {
  try {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  } catch (error) {
    console.error("Error parsing date:", error);
    return "Invalid Date";
  }
};

export const getDataFromGH = async (setItems) => {
  try {
    const newItems = await Promise.all(activity.map(fetchDataForItem));
    setItems((prevItems) => [...prevItems, ...newItems]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};