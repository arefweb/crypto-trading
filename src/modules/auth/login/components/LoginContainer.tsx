import useLoginForm from "../hooks/useLoginForm";

function LoginContainer() {
  const { handleSubmit, register, onSubmit } = useLoginForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">
          <div>Email:</div>
          <input type="text" id="email" {...register("email")} />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <div>
            Password:
          </div>
          <input type="text" {...register("password")} id="password" />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginContainer;
