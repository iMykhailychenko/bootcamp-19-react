export const AccountPage = () => {
  return (
    <form action="#" className="mt-5 mx-auto p-0" onSubmit={() => undefined}>
      <h1 className="h3 mb-3 fw-normal">Welcome!</h1>

      <div className="form-floating my-4">
        <input id="avatar" name="avatar" type="text" className="form-control" />
        <label htmlFor="avatar">Avatar</label>
      </div>

      <div className="form-floating my-4">
        <input id="last_name" name="first_name" type="text" className="form-control" />
        <label htmlFor="last_name">First name</label>
      </div>

      <div className="form-floating my-4">
        <input id="last_name" name="last_name" type="text" className="form-control" />
        <label htmlFor="last_name">Last name</label>
      </div>

      <div className="form-floating my-4">
        <input id="email" name="email" type="email" autoComplete="username" className="form-control" />
        <label htmlFor="email">Email address</label>
      </div>

      <div className="my-4">
        <label htmlFor="bio">Bio</label>
        <textarea rows={5} id="bio" name="bio" className="form-control" />
      </div>

      <button className="mt-2 btn btn-lg btn-primary" type="submit">
        Update account
      </button>
    </form>
  );
};
