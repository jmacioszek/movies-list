const createActionTypes = (actionTypes, name) => {
  let types = {};
  const actionName = name ? `${name}/` : '';
  const { async, sync } = actionTypes;
  if (async) {
    types = {
      ...async.reduce(
        (prev, next) => ({
          ...prev,
          [`${next}`]: `${actionName}${next}`,
          [`${next}_STARTED`]: `${actionName}${next}_STARTED`,
          [`${next}_SUCCESS`]: `${actionName}${next}_SUCCESS`,
          [`${next}_ERROR`]: `${actionName}${next}_ERROR`,
        }),
        {},
      ),
    };
  }

  if (sync) {
    types = {
      ...types,
      ...sync.reduce((prev, next) => ({ ...prev, [next]: `${actionName}${next}` }), {}),
    };
  }

  return types;
};

export { createActionTypes };
