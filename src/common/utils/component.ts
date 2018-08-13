export const getComponentName = <T>(Component: React.ComponentType<T>) =>
  Component.displayName || Component.name || 'Unknown';
