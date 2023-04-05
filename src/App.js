import './App.css';
import { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Map from './components/Map';
import sku from './sku';

function App() {
  //const [allPlants, setAllPlants] = useState([]);
  const [inputText, setInputText] = useState('');
  const [filteredPlants, setFilteredplants] = useState([]);
  const [selectedLocationId, setSelectedLocationId] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [oneVarietySum, setOneVarietySum] = useState(null);
  const [selectedLocationSum, setSelectedLocationSum] = useState(0);

  useEffect(() => {
    if (
      selectedLocationId.length === 0 &&
      Object.keys(selectedItem).length === 0 &&
      inputText === ''
    ) {
      setFilteredplants(sku);
    }
    if (selectedLocationId.length > 0) {
      setFilteredplants(
        sku.filter((el) => selectedLocationId.includes(el.locationId))
      );
    }
    if (inputText !== '') {
      setFilteredplants(
        sku.filter((el) =>
          el.name.toLowerCase().includes(inputText.toLocaleLowerCase())
        )
      );
    }
  }, [selectedLocationId, inputText, selectedItem]);

  useEffect(() => {
    const total = sku.reduce((total, obj) => {
      if (obj.name === selectedItem.name) {
        return total + obj.quantity;
      }
      return total;
    }, 0);
    setOneVarietySum(total);
  }, [selectedItem]);

  useEffect(() => {
    const sum = sku.reduce((sum, item) => {
      if (selectedLocationId.includes(item.locationId)) {
        return sum + item.quantity;
      } else {
        return sum;
      }
    }, 0);
    setSelectedLocationSum(sum);
  }, [selectedLocationId]);

  const onLocationClickHandler = (id) => {
    if (selectedLocationId.includes(id)) {
      setSelectedItem('');
      setInputText('');
      setSelectedLocationId(selectedLocationId.filter((divId) => divId !== id));
    } else {
      setInputText('');
      setSelectedItem('');
      setSelectedLocationId([...selectedLocationId, id]);
    }
  };

  const onItemClickHandler = (el) => {
    setInputText('');
    setSelectedLocationId([]);
    setSelectedItem(el);
    // setFilteredplants([el]);
  };

  const inputTextHandler = (e) => {
    setSelectedLocationId([]);
    setSelectedItem('');
    setInputText(e.target.value);
  };

  const clearSelected = () => {
    setInputText('');
    setSelectedLocationId([]);
    setSelectedItem('');
  };

  return (
    <div className='App'>
      <TopBar
        clearSelected={clearSelected}
        selectedItem={selectedItem}
        selectedLocationId={selectedLocationId}
        inputText={inputText}
        inputTextHandler={inputTextHandler}
        filteredPlants={filteredPlants}
        oneVarietySum={oneVarietySum}
        selectedLocationSum={selectedLocationSum}
      />
      <div className='content'>
        <Map
          onLocationClickHandler={onLocationClickHandler}
          selectedLocationId={selectedLocationId}
          selectedItem={selectedItem}
          filteredPlants={filteredPlants}
          onItemClickHandler={onItemClickHandler}
        />
      </div>
    </div>
  );
}

export default App;
