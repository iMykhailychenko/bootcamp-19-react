export const CounterStep = () => {
  return (
    <form action="#" className="input-group input-group-lg mb-5 w-50">
      <input type="text" value={0} className="form-control" placeholder="Counter step" />
      <button className="btn btn-outline-primary" type="submit">
        Submit
      </button>
    </form>
  );
};
