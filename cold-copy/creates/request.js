const request = {
  key: "request",
  noun: "Request",
  display: {
    label: "Create Request Queue",
    description: "Creates a request of queue items.",
  },
  operation: {
    perform: async (z, bundle) => {
      const response = await z.request({
        url: "https://test.coldcopy.app/api/v1/requests",
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
