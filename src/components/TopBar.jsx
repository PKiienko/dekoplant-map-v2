import './TopBar.css';

const TopBar = ({
  clearSelected,
  selectedItem,
  inputText,
  inputTextHandler,
  oneVarietySum,
}) => {
  return (
    <div className='topbar-container'>
      <input
        className='topbar-search'
        type='search'
        placeholder='Введіть назву тут'
        value={inputText}
        onChange={inputTextHandler}
      ></input>
      <button
        className='topbar-btn'
        onClick={clearSelected}
      >
        Скинути вибір
      </button>
      <div className='top-bar-info'>
        {selectedItem.name ? (
          <p>Вибрана рослина: {selectedItem.name}.</p>
        ) : null}
        {selectedItem.name ? (
          <p>Загальна кількість на залишку: {oneVarietySum}</p>
        ) : null}
      </div>
    </div>
  );
};

export default TopBar;
