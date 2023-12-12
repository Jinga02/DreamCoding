const Header = ({ filter, filters, onFilterChange }) => {
  return (
    <header>
      <ul>
        {filters.map((f, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(f)}>{f}</button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
