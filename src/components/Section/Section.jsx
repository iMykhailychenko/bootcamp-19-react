export const Section = ({ children, title }) => {
  return (
    <section className="p-5 my-5 bg-light rounded-3">
      {title && <h2 className="text-center mb-5">{title}</h2>}
      {children}
    </section>
  );
};
