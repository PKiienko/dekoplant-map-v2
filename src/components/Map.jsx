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
              selectedLocationId.includes(16) || selectedItem.locationId === 16
                ? 'selected'
                : ''
            }`}
            id='16'
            onClick={() => onLocationClickHandler(16)}
          >
            0-1-H
          </div>
          <div
            className={`sector ${
              selectedLocationId.includes(17) || selectedItem.locationId === 17
                ? 'selected'
                : ''
            } `}
            id='17'
            onClick={() => onLocationClickHandler(17)}
          >
            0-1-G
          </div>
          <div
            className={`sector ${
              selectedLocationId.includes(18) || selectedItem.locationId === 18
                ? 'selected'
                : ''
            }`}
            id='18'
            onClick={() => onLocationClickHandler(18)}
          >
            0-1-F
          </div>
          <div
            className={`sector ${
              selectedLocationId.includes(19) || selectedItem.locationId === 19
                ? 'selected'
                : ''
            }`}
            id='19'
            onClick={() => onLocationClickHandler(19)}
          >
            0-1-E
          </div>
          <div
            className={`sector ${
              selectedLocationId.includes(20) || selectedItem.locationId === 20
                ? 'selected'
                : ''
            }`}
            id='20'
            onClick={() => onLocationClickHandler(20)}
          >
            0-1-D
          </div>
          <div
            className={`sector ${
              selectedLocationId.includes(21) || selectedItem.locationId === 21
                ? 'selected'
                : ''
            } `}
            id='21'
            onClick={() => onLocationClickHandler(21)}
          >
            0-1-C
          </div>
          <div
            className={`sector ${
              selectedLocationId.includes(22) || selectedItem.locationId === 22
                ? 'selected'
                : ''
            }`}
            id='22'
            onClick={() => onLocationClickHandler(22)}
          >
            0-1-B
          </div>
          <div
            className={`sector ${
              selectedLocationId.includes(23) || selectedItem.locationId === 23
                ? 'selected'
                : ''
            }`}
            id='23'
            onClick={() => onLocationClickHandler(23)}
          >
            0-1-A
          </div>
        </div>
        <div className='shaded-right-part'>
          <div
            className={`sector ${
              selectedLocationId.includes(24) || selectedItem.locationId === 24
                ? 'selected'
                : ''
            }`}
            id='24'
            onClick={() => onLocationClickHandler(24)}
          >
            0-2-H
          </div>
          <div
            className={`sector ${
              selectedLocationId.includes(25) || selectedItem.locationId === 25
                ? 'selected'
                : ''
            }`}
            id='25'
            onClick={() => onLocationClickHandler(25)}
          >
            0-2-G
          </div>
          <div
            className={`sector ${
              selectedLocationId.includes(26) || selectedItem.locationId === 26
                ? 'selected'
                : ''
            }`}
            id='26'
            onClick={() => onLocationClickHandler(26)}
          >
            0-2-F
          </div>
          <div
            className={`sector ${
              selectedLocationId.includes(27) || selectedItem.locationId === 27
                ? 'selected'
                : ''
            }`}
            id='27'
            onClick={() => onLocationClickHandler(27)}
          >
            0-2-E
          </div>
          <div
            className={`sector ${
              selectedLocationId.includes(28) || selectedItem.locationId === 28
                ? 'selected'
                : ''
            }`}
            id='28'
            onClick={() => onLocationClickHandler(28)}
          >
            0-2-D
          </div>
          <div
            className={`sector ${
              selectedLocationId.includes(29) || selectedItem.locationId === 29
                ? 'selected'
                : ''
            }`}
            id='29'
            onClick={() => onLocationClickHandler(29)}
          >
            0-2-C
          </div>
          <div
            className={`sector ${
              selectedLocationId.includes(30) || selectedItem.locationId === 30
                ? 'selected'
                : ''
            }`}
            id='30'
            onClick={() => onLocationClickHandler(30)}
          >
            0-2-B
          </div>
          <div
            className={`sector ${
              selectedLocationId.includes(31) || selectedItem.locationId === 31
                ? 'selected'
                : ''
            }`}
            id='31'
            onClick={() => onLocationClickHandler(31)}
          >
            0-2-A
          </div>
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
            >
              T-1-D
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(1) || selectedItem.locationId === 1
                  ? 'selected'
                  : ''
              } `}
              id='1'
              onClick={() => onLocationClickHandler(1)}
            >
              T-1-C
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(2) || selectedItem.locationId === 2
                  ? 'selected'
                  : ''
              }`}
              id='2'
              onClick={() => onLocationClickHandler(2)}
            >
              T-1-B
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(3) || selectedItem.locationId === 3
                  ? 'selected'
                  : ''
              }`}
              id='3'
              onClick={() => onLocationClickHandler(3)}
            >
              T-1-A
            </div>
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
            >
              T-2-D
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(5) || selectedItem.locationId === 5
                  ? 'selected'
                  : ''
              }`}
              id='5'
              onClick={() => onLocationClickHandler(5)}
            >
              T-2-C
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(6) || selectedItem.locationId === 6
                  ? 'selected'
                  : ''
              }`}
              id='6'
              onClick={() => onLocationClickHandler(6)}
            >
              T-2-B
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(7) || selectedItem.locationId === 7
                  ? 'selected'
                  : ''
              }`}
              id='7'
              onClick={() => onLocationClickHandler(7)}
            >
              T-1-A
            </div>
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
            >
              T-3-D
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(9) || selectedItem.locationId === 9
                  ? 'selected'
                  : ''
              }`}
              id='9'
              onClick={() => onLocationClickHandler(9)}
            >
              T-3-C
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(10) ||
                selectedItem.locationId === 10
                  ? 'selected'
                  : ''
              }`}
              id='10'
              onClick={() => onLocationClickHandler(10)}
            >
              T-3-B
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(11) ||
                selectedItem.locationId === 11
                  ? 'selected'
                  : ''
              }`}
              id='11'
              onClick={() => onLocationClickHandler(11)}
            >
              T-3-A
            </div>
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
            >
              T-4-D
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(13) ||
                selectedItem.locationId === 13
                  ? 'selected'
                  : ''
              }`}
              id='13'
              onClick={() => onLocationClickHandler(13)}
            >
              T-4-C
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(14) ||
                selectedItem.locationId === 14
                  ? 'selected'
                  : ''
              }`}
              id='14'
              onClick={() => onLocationClickHandler(14)}
            >
              T-4-B
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(15) ||
                selectedItem.locationId === 15
                  ? 'selected'
                  : ''
              }`}
              id='15'
              onClick={() => onLocationClickHandler(15)}
            >
              T-4-A
            </div>
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
                  selectedLocationId.includes(32) ||
                  selectedItem.locationId === 32
                    ? 'selected'
                    : ''
                }`}
                id='32'
                onClick={() => onLocationClickHandler(32)}
              >
                1-1-D
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(33) ||
                  selectedItem.locationId === 33
                    ? 'selected'
                    : ''
                } `}
                id='33'
                onClick={() => onLocationClickHandler(33)}
              >
                1-1-C
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(34) ||
                  selectedItem.locationId === 34
                    ? 'selected'
                    : ''
                }`}
                id='34'
                onClick={() => onLocationClickHandler(34)}
              >
                1-1-B
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(35) ||
                  selectedItem.locationId === 35
                    ? 'selected'
                    : ''
                }`}
                id='35'
                onClick={() => onLocationClickHandler(35)}
              >
                1-1-A
              </div>
            </div>
            <div className='right-part'>
              <div
                className={`sector ${
                  selectedLocationId.includes(36) ||
                  selectedItem.locationId === 36
                    ? 'selected'
                    : ''
                }`}
                id='36'
                onClick={() => onLocationClickHandler(36)}
              >
                1-2-D
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(37) ||
                  selectedItem.locationId === 37
                    ? 'selected'
                    : ''
                }`}
                id='37'
                onClick={() => onLocationClickHandler(37)}
              >
                1-2-C
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(38) ||
                  selectedItem.locationId === 38
                    ? 'selected'
                    : ''
                }`}
                id='38'
                onClick={() => onLocationClickHandler(38)}
              >
                1-2-B
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(39) ||
                  selectedItem.locationId === 39
                    ? 'selected'
                    : ''
                }`}
                id='39'
                onClick={() => onLocationClickHandler(39)}
              >
                1-2-A
              </div>
            </div>
          </div>
          <div className='field-2'>
            <div className='left-part'>
              <div
                className={`sector ${
                  selectedLocationId.includes(40) ||
                  selectedItem.locationId === 40
                    ? 'selected'
                    : ''
                }`}
                id='40'
                onClick={() => onLocationClickHandler(40)}
              >
                2-3-D
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(41) ||
                  selectedItem.locationId === 41
                    ? 'selected'
                    : ''
                } `}
                id='41'
                onClick={() => onLocationClickHandler(41)}
              >
                2-3-C
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(42) ||
                  selectedItem.locationId === 42
                    ? 'selected'
                    : ''
                }`}
                id='42'
                onClick={() => onLocationClickHandler(42)}
              >
                2-3-B
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(43) ||
                  selectedItem.locationId === 43
                    ? 'selected'
                    : ''
                }`}
                id='43'
                onClick={() => onLocationClickHandler(43)}
              >
                2-3-A
              </div>
            </div>
            <div className='right-part'>
              <div
                className={`sector ${
                  selectedLocationId.includes(44) ||
                  selectedItem.locationId === 44
                    ? 'selected'
                    : ''
                }`}
                id='44'
                onClick={() => onLocationClickHandler(44)}
              >
                2-4-D
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(45) ||
                  selectedItem.locationId === 45
                    ? 'selected'
                    : ''
                }`}
                id='45'
                onClick={() => onLocationClickHandler(45)}
              >
                2-4-C
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(46) ||
                  selectedItem.locationId === 46
                    ? 'selected'
                    : ''
                }`}
                id='46'
                onClick={() => onLocationClickHandler(46)}
              >
                2-4-B
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(47) ||
                  selectedItem.locationId === 47
                    ? 'selected'
                    : ''
                }`}
                id='47'
                onClick={() => onLocationClickHandler(47)}
              >
                2-4-A
              </div>
            </div>
          </div>
          <div className='field-3'>
            <div className='left-part'>
              <div
                className={`sector ${
                  selectedLocationId.includes(48) ||
                  selectedItem.locationId === 48
                    ? 'selected'
                    : ''
                }`}
                id='48'
                onClick={() => onLocationClickHandler(48)}
              >
                3-5-D
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(49) ||
                  selectedItem.locationId === 49
                    ? 'selected'
                    : ''
                } `}
                id='491'
                onClick={() => onLocationClickHandler(49)}
              >
                3-5-C
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(50) ||
                  selectedItem.locationId === 50
                    ? 'selected'
                    : ''
                }`}
                id='50'
                onClick={() => onLocationClickHandler(50)}
              >
                3-5-B
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(51) ||
                  selectedItem.locationId === 51
                    ? 'selected'
                    : ''
                }`}
                id='51'
                onClick={() => onLocationClickHandler(51)}
              >
                3-5-A
              </div>
            </div>
            <div className='right-part'>
              <div
                className={`sector ${
                  selectedLocationId.includes(52) ||
                  selectedItem.locationId === 52
                    ? 'selected'
                    : ''
                }`}
                id='52'
                onClick={() => onLocationClickHandler(52)}
              >
                3-6-D
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(53) ||
                  selectedItem.locationId === 53
                    ? 'selected'
                    : ''
                }`}
                id='53'
                onClick={() => onLocationClickHandler(53)}
              >
                3-6-C
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(54) ||
                  selectedItem.locationId === 54
                    ? 'selected'
                    : ''
                }`}
                id='54'
                onClick={() => onLocationClickHandler(54)}
              >
                3-6-B
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(55) ||
                  selectedItem.locationId === 55
                    ? 'selected'
                    : ''
                }`}
                id='55'
                onClick={() => onLocationClickHandler(55)}
              >
                3-6-A
              </div>
            </div>
          </div>
          <div className='field-4'>
            <div className='left-part'>
              <div
                className={`sector ${
                  selectedLocationId.includes(56) ||
                  selectedItem.locationId === 56
                    ? 'selected'
                    : ''
                }`}
                id='56'
                onClick={() => onLocationClickHandler(56)}
              >
                4-7-D
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(57) ||
                  selectedItem.locationId === 57
                    ? 'selected'
                    : ''
                } `}
                id='57'
                onClick={() => onLocationClickHandler(57)}
              >
                4-7-C
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(58) ||
                  selectedItem.locationId === 58
                    ? 'selected'
                    : ''
                }`}
                id='58'
                onClick={() => onLocationClickHandler(58)}
              >
                4-7-B
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(59) ||
                  selectedItem.locationId === 59
                    ? 'selected'
                    : ''
                }`}
                id='59'
                onClick={() => onLocationClickHandler(59)}
              >
                4-7-A
              </div>
            </div>
            <div className='right-part'>
              <div
                className={`sector ${
                  selectedLocationId.includes(60) ||
                  selectedItem.locationId === 60
                    ? 'selected'
                    : ''
                }`}
                id='60'
                onClick={() => onLocationClickHandler(60)}
              >
                4-8-D
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(61) ||
                  selectedItem.locationId === 61
                    ? 'selected'
                    : ''
                }`}
                id='61'
                onClick={() => onLocationClickHandler(61)}
              >
                4-8-C
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(62) ||
                  selectedItem.locationId === 62
                    ? 'selected'
                    : ''
                }`}
                id='62'
                onClick={() => onLocationClickHandler(62)}
              >
                4-8-B
              </div>
              <div
                className={`sector ${
                  selectedLocationId.includes(63) ||
                  selectedItem.locationId === 63
                    ? 'selected'
                    : ''
                }`}
                id='63'
                onClick={() => onLocationClickHandler(63)}
              >
                4-8-A
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='field-5-6'>
        <div className='field-5'>
          <div className='left-part'>
            <div
              className={`sector ${
                selectedLocationId.includes(72) ||
                selectedItem.locationId === 72
                  ? 'selected'
                  : ''
              }`}
              id='72'
              onClick={() => onLocationClickHandler(72)}
            >
              6-11-D
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(73) ||
                selectedItem.locationId === 73
                  ? 'selected'
                  : ''
              } `}
              id='73'
              onClick={() => onLocationClickHandler(73)}
            >
              6-11-C
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(74) ||
                selectedItem.locationId === 74
                  ? 'selected'
                  : ''
              }`}
              id='74'
              onClick={() => onLocationClickHandler(74)}
            >
              6-11-B
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(75) ||
                selectedItem.locationId === 75
                  ? 'selected'
                  : ''
              }`}
              id='75'
              onClick={() => onLocationClickHandler(75)}
            >
              6-11-A
            </div>
          </div>
          <div className='right-part'>
            <div
              className={`sector ${
                selectedLocationId.includes(76) ||
                selectedItem.locationId === 76
                  ? 'selected'
                  : ''
              }`}
              id='76'
              onClick={() => onLocationClickHandler(76)}
            >
              6-12-D
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(77) ||
                selectedItem.locationId === 77
                  ? 'selected'
                  : ''
              }`}
              id='77'
              onClick={() => onLocationClickHandler(77)}
            >
              6-12-C
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(78) ||
                selectedItem.locationId === 78
                  ? 'selected'
                  : ''
              }`}
              id='78'
              onClick={() => onLocationClickHandler(78)}
            >
              6-12-B
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(79) ||
                selectedItem.locationId === 79
                  ? 'selected'
                  : ''
              }`}
              id='79'
              onClick={() => onLocationClickHandler(79)}
            >
              6-12-A
            </div>
          </div>
        </div>
        <div className='field-6'>
          <div className='left-part'>
            <div
              className={`sector ${
                selectedLocationId.includes(64) ||
                selectedItem.locationId === 64
                  ? 'selected'
                  : ''
              }`}
              id='64'
              onClick={() => onLocationClickHandler(64)}
            >
              5-9-D
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(65) ||
                selectedItem.locationId === 65
                  ? 'selected'
                  : ''
              } `}
              id='65'
              onClick={() => onLocationClickHandler(65)}
            >
              5-9-C
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(66) ||
                selectedItem.locationId === 66
                  ? 'selected'
                  : ''
              }`}
              id='66'
              onClick={() => onLocationClickHandler(66)}
            >
              5-9-B
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(67) ||
                selectedItem.locationId === 67
                  ? 'selected'
                  : ''
              }`}
              id='67'
              onClick={() => onLocationClickHandler(67)}
            >
              5-9-A
            </div>
          </div>
          <div className='right-part'>
            <div
              className={`sector ${
                selectedLocationId.includes(68) ||
                selectedItem.locationId === 68
                  ? 'selected'
                  : ''
              }`}
              id='68'
              onClick={() => onLocationClickHandler(68)}
            >
              5-10-D
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(69) ||
                selectedItem.locationId === 69
                  ? 'selected'
                  : ''
              }`}
              id='69'
              onClick={() => onLocationClickHandler(69)}
            >
              5-10-C
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(70) ||
                selectedItem.locationId === 70
                  ? 'selected'
                  : ''
              }`}
              id='70'
              onClick={() => onLocationClickHandler(70)}
            >
              5-10-B
            </div>
            <div
              className={`sector ${
                selectedLocationId.includes(71) ||
                selectedItem.locationId === 71
                  ? 'selected'
                  : ''
              }`}
              id='71'
              onClick={() => onLocationClickHandler(71)}
            >
              5-10-A
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
