const job = {
  key: "job",
  noun: "Queue",
  display: {
    label: "Create Job Queue",
    description: "Creates a job queue item.",
  },
  operation: {
    perform: async (z, bundle) => {
      const response = await z.request({
        url: "https://test.coldcopy.app/api/v1/jobs",
        method: "POST",
        body: {
          email: bundle.inputData.email,
          name: bundle.inputData.name,
          title: bundle.inputData.title,
          type: bundle.inputData.type,
          url: bundle.inputData.url,
        },
        headers: {
          "x-api-key": bundle.authData.apiKey,
        },
      });
      return response.data;
    },
    inputFields: [
      { key: "email", label: "Email", required: true, type: "string" },
      { key: "name", label: "Name", required: true, type: "string" },
      { key: "title", label: "Title", required: true, type: "string" },
      { key: "type", label: "Type", required: true, type: "string" },
      { key: "url", label: "URL", required: true, type: "string" },
    ],
  },
};
