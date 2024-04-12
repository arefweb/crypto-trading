import useSignupForm from "../hooks/useSignupForm";

function SignUpContainer() {
  const { handleSubmit, onSubmit, register } = useSignupForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label htmlFor="username">
            <div>
              Name:
            </div>
            <input type="text" id="username" {...register("username")} />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            <div>
              Email:
            </div>
            <input type="text" id="email" {...register("email")} />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <div>
              Password:
            </div>
            <input type="text" id="password" {...register("password")} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default SignUpContainer;
