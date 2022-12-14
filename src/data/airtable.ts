import Airtable from "airtable";
import type { Fields } from "../../types/airtable";

const { configure, base } = Airtable;

configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: import.meta.env.AIRTABLE_API_KEY,
});

const allBakeries = async () =>
  base(import.meta.env.AIRTABLE_BASE_ID)
    .table("Piekarnie")
    .select({
      view: "Grid view",
      sort: [{ field: "name", direction: "asc" }],
    })
    .all()
    .then((data) => data.map((records) => records.fields as Fields));

export { base, allBakeries };
