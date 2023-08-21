module.exports = ({ env }) => ({
  upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 300000,
        },
      },
    },
  },
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
});
