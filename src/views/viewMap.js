export function createViewMap(initialViews = {}) {
  const views = new Map(Object.entries(initialViews));

  function add(name, viewFunction) {
    if (!name) throw new Error('View name is required');
    if (typeof viewFunction !== 'function') throw new Error('View function is required');
    views.set(name, viewFunction);
    return api;
  }

  function has(name) {
    return views.has(name);
  }

  function show(name, fallbackName, context) {
    const viewFunction = views.get(name) || views.get(fallbackName);
    if (!viewFunction) throw new Error('View not found');
    return viewFunction(context);
  }

  function names() {
    return Array.from(views.keys());
  }

  const api = { add, has, show, names };
  return api;
}
