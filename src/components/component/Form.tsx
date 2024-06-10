function Form({ children }: { children: React.ReactNode }) {
  return (
    <form className="form" action="api/users/">
      {children}
    </form>
  );
}

export default Form;
