export const OptionalRender = ({shouldRender, children}) => {
  return shouldRender ? children : null;
}