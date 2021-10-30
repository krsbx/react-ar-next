export const isCustomMarker = (parameters) => {
  if (parameters !== undefined && parameters.preset === 'custom') {
    parameters.url = parameters.patternUrl;

    delete parameters.patternUrl;
    return parameters;
  }
};
