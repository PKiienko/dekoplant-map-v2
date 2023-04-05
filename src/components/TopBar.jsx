import './TopBar.css';
import locationIds from './../locationIds';

const TopBar = ({
  clearSelected,
  selectedItem,
  inputText,
  inputTextHandler,
  oneVarietySum,
  selectedLocationId,
  selectedLocationSum,
}) => {
  console.log(selectedLocationId);
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
        {selectedLocationId.length > 0 ? (
          <>
            <p>Вибрані сектори: </p>
            {selectedLocationId.map((el) => {
              return <p key={Math.random()}>{locationIds[el].description}</p>;
            })}
            <p>.</p>
            <p>
              Загальна кількість рослин на вибраних секторах:{' '}
              {selectedLocationSum}
            </p>
          </>
        ) : null}

        {selectedItem.name ? (
          <>
            <p>Вибрана рослина: {selectedItem.name}.</p>
            <p>Загальна кількість на залишку: {oneVarietySum}</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default TopBar;
