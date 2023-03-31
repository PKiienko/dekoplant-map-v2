import './Map.css';
import List from './List';

const Map = ({
  onLocationClickHandler,
  selectedLocationId,
  selectedItem,
  filteredPlants,
  onItemClickHandler,
}) => {
  return (
    <>
      <div className='shaded-field'>
        <div className='shaded-left-part'>
          <div
            className={`sector ${
              selectedLocationId.includes(0) || selectedItem.locationId === 0
                ? 'selected'
                : ''
            }`}
            id='0'
            onClick={() => onLocationClickHandler(0)}
          ></div>
          <div
            className={`sector ${
              selectedLocationId.includes(1) || selectedItem.locationId === 1
                ? 'selected'
                : ''
            } `}
            id='1'
            onClick={() => onLocationClickHandler(1)}
          ></div>
          <div
            className={`sector ${
              selectedLocationId.includes(2) || selectedItem.locationId === 2
                ? 'selected'
                : ''
            }`}
            id='2'
            onClick={() => onLocationClickHandler(2)}
          ></div>
          <div
            className={`sector ${
              selectedLocationId.includes(3) || selectedItem.locationId === 3
                ? 'selected'
                : ''
            }`}
            id='3'
            onClick={() => onLocationClickHandler(3)}
          ></div>
          <div
            className={`sector ${
              selectedLocationId.includes(0) || selectedItem.locationId === 0
                ? 'selected'
                : ''
            }`}
            id='0'
            onClick={() => onLocationClickHandler(0)}
          ></div>
          <div
            className={`sector ${
              selectedLocationId.includes(1) || selectedItem.locationId === 1
                ? 'selected'
                : ''
            } `}
            id='1'
            onClick={() => onLocationClickHandler(1)}
          ></div>
          <div
            className={`sector ${
              selectedLocationId.includes(2) || selectedItem.locationId === 2
                ? 'selected'
                : ''
            }`}
            id='2'
            onClick={() => onLocationClickHandler(2)}
          ></div>
          <div
            className={`sector ${
              selectedLocationId.includes(3) || selectedItem.locationId === 3
                ? 'selected'
                : ''
            }`}
            id='3'
            onClick={() => onLocationClickHandler(3)}
          ></div>
        </div>
        <div className='shaded-right-part'>
          <div
            className={`sector ${
              selectedLocationId.includes(4) || selectedItem.locationId === 4
                ? 'selected'
                : ''
            }`}
            id='4'
            onClick={() => onLocationClickHandler(4)}
          ></div>
          <div
            className={`sector ${
              selectedLocationId.includes(5) || selectedItem.locationId === 5
                ? 'selected'
                : ''
            }`}
            id='5'
            onClick={() => onLocationClickHandler(5)}
          ></div>
          <div
            className={`sector ${
              selectedLocationId.includes(6) || selectedItem.locationId === 6
                ? 'selected'
                : ''
            }`}
            id='6'
            onClick={() => onLocationClickHandler(6)}
          ></div>
          <div
            className={`sector ${
              selectedLocationId.includes(7) || selectedItem.locationId === 7
                ? 'selected'
                : ''
            }`}
            id='7'
            onClick={() => onLocationClickHandler(7)}
          ></div>
          <div
            className={`sector ${
              selectedLocationId.includes(4) || selectedItem.locationId === 4
                ? 'selected'
                : ''
            }`}
            id='4'
            onClick={() => onLocationClickHandler(4)}
          ></div>
          <div
            className={`sector ${
              selectedLocationId.includes(5) || selectedItem.locationId === 5
                ? 'selected'
                : ''
            }`}
            id='5'
            onClick={() => onLocationClickHandler(5)}
          ></div>
          <div
            className={`sector ${
              selectedLocationId.includes(6) || selectedItem.locationId === 6
                ? 'selected'
                : ''
            }`}
            id='6'
            onClick={() => onLocationClickHandler(6)}
          ></div>
          <div
            className={`sector ${
              selectedLocationId.includes(7) || selectedItem.locationId === 7
                ? 'selected'
                : ''
            }`}
            id='7'
            onClick={() => onLocationClickHandler(7)}
          ></div>
        </div>
      </div>

      <div className='greenhouses'>
        <div className='greenhouse1'>
          <div className='left-part'>
            <div
              className={`sector ${
                selectedLocationId.includes(0) || selectedItem.locationId === 0
                  ? 'selected'
                  : ''
              }`}
              id='0'
              onClick={() => onLocationClickHandler(0)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(1) || selectedItem.locationId === 1
                  ? 'selected'
                  : ''
              } `}
              id='1'
              onClick={() => onLocationClickHandler(1)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(2) || selectedItem.locationId === 2
                  ? 'selected'
                  : ''
              }`}
              id='2'
              onClick={() => onLocationClickHandler(2)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(3) || selectedItem.locationId === 3
                  ? 'selected'
                  : ''
              }`}
              id='3'
              onClick={() => onLocationClickHandler(3)}
            ></div>
          </div>
          <div className='right-part'>
            <div
              className={`sector ${
                selectedLocationId.includes(4) || selectedItem.locationId === 4
                  ? 'selected'
                  : ''
              }`}
              id='4'
              onClick={() => onLocationClickHandler(4)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(5) || selectedItem.locationId === 5
                  ? 'selected'
                  : ''
              }`}
              id='5'
              onClick={() => onLocationClickHandler(5)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(6) || selectedItem.locationId === 6
                  ? 'selected'
                  : ''
              }`}
              id='6'
              onClick={() => onLocationClickHandler(6)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(7) || selectedItem.locationId === 7
                  ? 'selected'
                  : ''
              }`}
              id='7'
              onClick={() => onLocationClickHandler(7)}
            ></div>
          </div>
        </div>
        <div className='greenhouse2'>
          <div className='left-part'>
            <div
              className={`sector ${
                selectedLocationId.includes(8) || selectedItem.locationId === 8
                  ? 'selected'
                  : ''
              }`}
              id='8'
              onClick={() => onLocationClickHandler(8)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(9) || selectedItem.locationId === 9
                  ? 'selected'
                  : ''
              }`}
              id='9'
              onClick={() => onLocationClickHandler(9)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(10) ||
                selectedItem.locationId === 10
                  ? 'selected'
                  : ''
              }`}
              id='10'
              onClick={() => onLocationClickHandler(10)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(11) ||
                selectedItem.locationId === 11
                  ? 'selected'
                  : ''
              }`}
              id='11'
              onClick={() => onLocationClickHandler(11)}
            ></div>
          </div>
          <div className='right-part'>
            <div
              className={`sector ${
                selectedLocationId.includes(12) ||
                selectedItem.locationId === 12
                  ? 'selected'
                  : ''
              }`}
              id='12'
              onClick={() => onLocationClickHandler(12)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(13) ||
                selectedItem.locationId === 13
                  ? 'selected'
                  : ''
              }`}
              id='13'
              onClick={() => onLocationClickHandler(13)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(14) ||
                selectedItem.locationId === 14
                  ? 'selected'
                  : ''
              }`}
              id='14'
              onClick={() => onLocationClickHandler(14)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(15) ||
                selectedItem.locationId === 15
                  ? 'selected'
                  : ''
              }`}
              id='15'
              onClick={() => onLocationClickHandler(15)}
            ></div>
          </div>
        </div>
      </div>
      <div className='list-field-1-4'>
        <List
          filteredPlants={filteredPlants}
          onItemClickHandler={onItemClickHandler}
          selectedItem={selectedItem}
        />
        <div className='field-1-4'>
          <div className='field-1'>
            <div className='left-part'>
              <div
                className={`sector ${
                  selectedLocationId.includes(0) ||
                  selectedItem.locationId === 0
                    ? 'selected'
                    : ''
                }`}
                id='0'
                onClick={() => onLocationClickHandler(0)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(1) ||
                  selectedItem.locationId === 1
                    ? 'selected'
                    : ''
                } `}
                id='1'
                onClick={() => onLocationClickHandler(1)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(2) ||
                  selectedItem.locationId === 2
                    ? 'selected'
                    : ''
                }`}
                id='2'
                onClick={() => onLocationClickHandler(2)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(3) ||
                  selectedItem.locationId === 3
                    ? 'selected'
                    : ''
                }`}
                id='3'
                onClick={() => onLocationClickHandler(3)}
              ></div>
            </div>
            <div className='right-part'>
              <div
                className={`sector ${
                  selectedLocationId.includes(4) ||
                  selectedItem.locationId === 4
                    ? 'selected'
                    : ''
                }`}
                id='4'
                onClick={() => onLocationClickHandler(4)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(5) ||
                  selectedItem.locationId === 5
                    ? 'selected'
                    : ''
                }`}
                id='5'
                onClick={() => onLocationClickHandler(5)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(6) ||
                  selectedItem.locationId === 6
                    ? 'selected'
                    : ''
                }`}
                id='6'
                onClick={() => onLocationClickHandler(6)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(7) ||
                  selectedItem.locationId === 7
                    ? 'selected'
                    : ''
                }`}
                id='7'
                onClick={() => onLocationClickHandler(7)}
              ></div>
            </div>
          </div>
          <div className='field-2'>
            <div className='left-part'>
              <div
                className={`sector ${
                  selectedLocationId.includes(0) ||
                  selectedItem.locationId === 0
                    ? 'selected'
                    : ''
                }`}
                id='0'
                onClick={() => onLocationClickHandler(0)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(1) ||
                  selectedItem.locationId === 1
                    ? 'selected'
                    : ''
                } `}
                id='1'
                onClick={() => onLocationClickHandler(1)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(2) ||
                  selectedItem.locationId === 2
                    ? 'selected'
                    : ''
                }`}
                id='2'
                onClick={() => onLocationClickHandler(2)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(3) ||
                  selectedItem.locationId === 3
                    ? 'selected'
                    : ''
                }`}
                id='3'
                onClick={() => onLocationClickHandler(3)}
              ></div>
            </div>
            <div className='right-part'>
              <div
                className={`sector ${
                  selectedLocationId.includes(4) ||
                  selectedItem.locationId === 4
                    ? 'selected'
                    : ''
                }`}
                id='4'
                onClick={() => onLocationClickHandler(4)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(5) ||
                  selectedItem.locationId === 5
                    ? 'selected'
                    : ''
                }`}
                id='5'
                onClick={() => onLocationClickHandler(5)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(6) ||
                  selectedItem.locationId === 6
                    ? 'selected'
                    : ''
                }`}
                id='6'
                onClick={() => onLocationClickHandler(6)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(7) ||
                  selectedItem.locationId === 7
                    ? 'selected'
                    : ''
                }`}
                id='7'
                onClick={() => onLocationClickHandler(7)}
              ></div>
            </div>
          </div>
          <div className='field-3'>
            <div className='left-part'>
              <div
                className={`sector ${
                  selectedLocationId.includes(0) ||
                  selectedItem.locationId === 0
                    ? 'selected'
                    : ''
                }`}
                id='0'
                onClick={() => onLocationClickHandler(0)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(1) ||
                  selectedItem.locationId === 1
                    ? 'selected'
                    : ''
                } `}
                id='1'
                onClick={() => onLocationClickHandler(1)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(2) ||
                  selectedItem.locationId === 2
                    ? 'selected'
                    : ''
                }`}
                id='2'
                onClick={() => onLocationClickHandler(2)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(3) ||
                  selectedItem.locationId === 3
                    ? 'selected'
                    : ''
                }`}
                id='3'
                onClick={() => onLocationClickHandler(3)}
              ></div>
            </div>
            <div className='right-part'>
              <div
                className={`sector ${
                  selectedLocationId.includes(4) ||
                  selectedItem.locationId === 4
                    ? 'selected'
                    : ''
                }`}
                id='4'
                onClick={() => onLocationClickHandler(4)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(5) ||
                  selectedItem.locationId === 5
                    ? 'selected'
                    : ''
                }`}
                id='5'
                onClick={() => onLocationClickHandler(5)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(6) ||
                  selectedItem.locationId === 6
                    ? 'selected'
                    : ''
                }`}
                id='6'
                onClick={() => onLocationClickHandler(6)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(7) ||
                  selectedItem.locationId === 7
                    ? 'selected'
                    : ''
                }`}
                id='7'
                onClick={() => onLocationClickHandler(7)}
              ></div>
            </div>
          </div>
          <div className='field-4'>
            <div className='left-part'>
              <div
                className={`sector ${
                  selectedLocationId.includes(0) ||
                  selectedItem.locationId === 0
                    ? 'selected'
                    : ''
                }`}
                id='0'
                onClick={() => onLocationClickHandler(0)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(1) ||
                  selectedItem.locationId === 1
                    ? 'selected'
                    : ''
                } `}
                id='1'
                onClick={() => onLocationClickHandler(1)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(2) ||
                  selectedItem.locationId === 2
                    ? 'selected'
                    : ''
                }`}
                id='2'
                onClick={() => onLocationClickHandler(2)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(3) ||
                  selectedItem.locationId === 3
                    ? 'selected'
                    : ''
                }`}
                id='3'
                onClick={() => onLocationClickHandler(3)}
              ></div>
            </div>
            <div className='right-part'>
              <div
                className={`sector ${
                  selectedLocationId.includes(4) ||
                  selectedItem.locationId === 4
                    ? 'selected'
                    : ''
                }`}
                id='4'
                onClick={() => onLocationClickHandler(4)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(5) ||
                  selectedItem.locationId === 5
                    ? 'selected'
                    : ''
                }`}
                id='5'
                onClick={() => onLocationClickHandler(5)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(6) ||
                  selectedItem.locationId === 6
                    ? 'selected'
                    : ''
                }`}
                id='6'
                onClick={() => onLocationClickHandler(6)}
              ></div>
              <div
                className={`sector ${
                  selectedLocationId.includes(7) ||
                  selectedItem.locationId === 7
                    ? 'selected'
                    : ''
                }`}
                id='7'
                onClick={() => onLocationClickHandler(7)}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className='field-5-6'>
        <div className='field-5'>
          <div className='left-part'>
            <div
              className={`sector ${
                selectedLocationId.includes(0) || selectedItem.locationId === 0
                  ? 'selected'
                  : ''
              }`}
              id='0'
              onClick={() => onLocationClickHandler(0)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(1) || selectedItem.locationId === 1
                  ? 'selected'
                  : ''
              } `}
              id='1'
              onClick={() => onLocationClickHandler(1)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(2) || selectedItem.locationId === 2
                  ? 'selected'
                  : ''
              }`}
              id='2'
              onClick={() => onLocationClickHandler(2)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(3) || selectedItem.locationId === 3
                  ? 'selected'
                  : ''
              }`}
              id='3'
              onClick={() => onLocationClickHandler(3)}
            ></div>
          </div>
          <div className='right-part'>
            <div
              className={`sector ${
                selectedLocationId.includes(4) || selectedItem.locationId === 4
                  ? 'selected'
                  : ''
              }`}
              id='4'
              onClick={() => onLocationClickHandler(4)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(5) || selectedItem.locationId === 5
                  ? 'selected'
                  : ''
              }`}
              id='5'
              onClick={() => onLocationClickHandler(5)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(6) || selectedItem.locationId === 6
                  ? 'selected'
                  : ''
              }`}
              id='6'
              onClick={() => onLocationClickHandler(6)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(7) || selectedItem.locationId === 7
                  ? 'selected'
                  : ''
              }`}
              id='7'
              onClick={() => onLocationClickHandler(7)}
            ></div>
          </div>
        </div>
        <div className='field-6'>
          <div className='left-part'>
            <div
              className={`sector ${
                selectedLocationId.includes(0) || selectedItem.locationId === 0
                  ? 'selected'
                  : ''
              }`}
              id='0'
              onClick={() => onLocationClickHandler(0)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(1) || selectedItem.locationId === 1
                  ? 'selected'
                  : ''
              } `}
              id='1'
              onClick={() => onLocationClickHandler(1)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(2) || selectedItem.locationId === 2
                  ? 'selected'
                  : ''
              }`}
              id='2'
              onClick={() => onLocationClickHandler(2)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(3) || selectedItem.locationId === 3
                  ? 'selected'
                  : ''
              }`}
              id='3'
              onClick={() => onLocationClickHandler(3)}
            ></div>
          </div>
          <div className='right-part'>
            <div
              className={`sector ${
                selectedLocationId.includes(4) || selectedItem.locationId === 4
                  ? 'selected'
                  : ''
              }`}
              id='4'
              onClick={() => onLocationClickHandler(4)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(5) || selectedItem.locationId === 5
                  ? 'selected'
                  : ''
              }`}
              id='5'
              onClick={() => onLocationClickHandler(5)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(6) || selectedItem.locationId === 6
                  ? 'selected'
                  : ''
              }`}
              id='6'
              onClick={() => onLocationClickHandler(6)}
            ></div>
            <div
              className={`sector ${
                selectedLocationId.includes(7) || selectedItem.locationId === 7
                  ? 'selected'
                  : ''
              }`}
              id='7'
              onClick={() => onLocationClickHandler(7)}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
