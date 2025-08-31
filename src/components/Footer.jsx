function Footer({ brand = "Keeper" }) {
  const year = new Date().getFullYear();
  return (
    <footer className="app-footer">
      <p>© {year} {brand}</p>
    </footer>
  );
}

export default Footer; 
