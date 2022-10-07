interface ImportMetaEnv {
  readonly AIRTABLE_API_KEY: string;
  readonly AIRTABLE_BASE_ID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
