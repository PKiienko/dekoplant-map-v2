import './List.css';
import locationIds from './../locationIds';

const List = ({ filteredPlants, onItemClickHandler, selectedItem }) => {
  return (
    <div className='list-items'>
      {filteredPlants.length > 0
        ? filteredPlants.map((el) => (
            <div
              className={`item ${selectedItem === el ? 'selected-item' : ''}`}
              key={Math.random()}
              onClick={() => onItemClickHandler(el)}
            >
              <p className='plant-name'>{el.name + '   '}</p>
              <p className='plant-pot'>{el.pot + '   '}</p>
              <p className='plant-locationDetails'>
                {locationIds[el.locationId].description + '   '}
              </p>
              <p className='plant-quantity'>{el.quantity + '   '}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default List;
