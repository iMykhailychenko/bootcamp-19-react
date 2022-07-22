export const VouteOptions = ({ options, onFeedback }) => {
  return options.map(item => (
    <button className={item.className} type="button" name={item.name} key={item.id} onClick={onFeedback}>
      {item.title}
    </button>
  ));
};
