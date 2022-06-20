export type Configuration = object;
export type Plugin =
  | ((config: Configuration) => Configuration)
  | ((config: Configuration, ...options: any[]) => Configuration);
export type PluginWithOptions = Plugin | [Plugin, ...any[]];

export const withPlugins: Plugin = (
  obj: Configuration,
  plugins: PluginWithOptions[],
) => {
  const [plugin, ...rest] = plugins;

  let func: Plugin | undefined = undefined;
  let params: any[] = [];
  if (typeof plugin === 'object') {
    [func, ...params] = plugin;
  } else if (typeof plugin === 'function') {
    func = plugin;
  }

  let result = obj;
  if (typeof func === 'undefined') {
    return obj;
  } else {
    result = func(obj, ...params);
  }
  return withPlugins(result, rest);
};

export default withPlugins;
