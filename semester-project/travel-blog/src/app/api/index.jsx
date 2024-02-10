import { createClient } from "contentful";

export async function fetchData(contentType) {
  try {
    const client = createClient({
      space:'g279yo4b9g1m',
      accessToken: 'LgB7oxRZcVICCPstLZDKWNMO1J8zNsv-pY1AJhY5h4I'
    });

    const res = await client.getEntries({ content_type: contentType });

    return res.items;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []
  }
}
