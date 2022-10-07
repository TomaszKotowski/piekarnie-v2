import * as Airtable from "airtable";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: import.meta.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(import.meta.env.AIRTABLE_BASE_ID);

const allBakeries = async () =>
  base("Piekarnie")
    .select({
      view: "Grid view",
      sort: [{ field: "name", direction: "asc" }],
    })
    .all()
    .then((data) => data.map((records) => records.fields));

export { base, allBakeries, Airtable };
