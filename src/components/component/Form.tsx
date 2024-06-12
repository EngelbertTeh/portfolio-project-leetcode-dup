function Form({ children }: { children: React.ReactNode }) {
  return (
    <form className="form" action="api/users/" method="post">
      {children}
    </form>
  );
}

export default Form;
