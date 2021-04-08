export const UserRegisterForm = () => {
  return (
    <>
      <h1>Register</h1>
      <form>
        <label>
          Username
          <input name="name" />
        </label>
        <label>
          Password
          <input name="password" />
        </label>
        <label>
          Confirm Password
          <input name="confirm-password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
