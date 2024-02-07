export const SearchBar = ({searchName,handleSearchChange}) => {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Search By User Name</label>
        <br />
        <input
          type="text"
          value={searchName}
          onChange={handleSearchChange}
          autoFocus
        />
      </form>
    );
  };