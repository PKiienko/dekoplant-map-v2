import './List.css';
import { useEffect } from 'react';

const List = ({ filteredPlants, onItemClickHandler, selectedItem }) => {
  useEffect(() => {
    console.log(filteredPlants);
  }, [filteredPlants]);

  return (
    <div className='list-items'>
      {filteredPlants.length > 0
        ? filteredPlants.map((el) => (
            <div
              className={`item ${selectedItem === el ? 'selected-item' : ''}`}
              key={el.id}
              onClick={() => onItemClickHandler(el)}
            >
              <span>{el.name + '   '}</span>
              <span>{el.pot + '   '}</span>
              <span>{el.quantity + '   '}</span>
              <span>{el.locationId + '   '}</span>
            </div>
          ))
        : null}
    </div>
  );
};

export default List;
