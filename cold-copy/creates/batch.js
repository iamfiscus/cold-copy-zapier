const batch = {
  key: "batch",
  noun: "Batch",
  display: {
    label: "Create Batch Queue",
    description: "Creates a batch of queue items.",
  },
  operation: {
    perform: async (z, bundle) => {
      const response = await z.request({
        url: "https://api.coldcopy.app/batchQueue",
        method: "POST",
        body: {
          filename: bundle.inputData.filename,
          jobs: bundle.inputData.jobs,
        },
        headers: {
          "x-api-key": bundle.authData.apiKey,
        },
      });
      return response.data;
    },
    inputFields: [
      { key: "filename", label: "Filename", required: true, type: "string" },
      {
        key: "jobs",
        label: "Jobs",
        required: true,
        list: true,
        children: [
          { key: "email", label: "Email", type: "string" },
          { key: "name", label: "Name", type: "string" },
          { key: "title", label: "Title", type: "string" },
          { key: "type", label: "Type", type: "string" },
          { key: "url", label: "URL", type: "string" },
        ],
      },
    ],
  },
};
