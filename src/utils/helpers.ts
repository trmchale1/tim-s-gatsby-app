// utils/helpers.ts
import Gists from "../json/gists.json"

export const htmlToGist = (link) => {
    window.location.href = link;
  };
  
  export const fetchDataForItem = async (item) => {
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
    return { ...item, files:files.filter(Boolean) };
  };
  
  export const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  export const getDataFromGists = async (setItems) => {
    try {
      const newItems = await Promise.all(Gists.map(fetchDataForItem));
      setItems((prevItems) => [...prevItems, ...newItems]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };