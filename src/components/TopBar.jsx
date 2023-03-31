import './TopBar.css';

const TopBar = ({
  clearSelected,
  selectedItem,
  selectedLocationId,
  inputText,
  inputTextHandler,
}) => {
  return (
    <div className='topbar-container'>
      <input
        className='topbar-search'
        type='search'
        value={inputText}
        onChange={inputTextHandler}
      ></input>
      <button
        className='topbar-btn'
        onClick={clearSelected}
      >
        Clear All Selected
      </button>
      {selectedLocationId.length > 0 ? (
        <h4>Selected Location: {selectedLocationId}</h4>
      ) : null}
      {selectedItem.name ? <h4>Selected Plant: {selectedItem.name}</h4> : null}
    </div>
  );
};

export default TopBar;
