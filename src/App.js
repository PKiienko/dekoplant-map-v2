import './App.css';
import { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import List from './components/List';
import Map from './components/Map';
import sku from './sku';

function App() {
  //const [allPlants, setAllPlants] = useState([]);
  const [inputText, setInputText] = useState('');
  const [filteredPlants, setFilteredplants] = useState([]);
  const [selectedLocationId, setSelectedLocationId] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

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
      />
      <div className='content'>
        <Map
          onLocationClickHandler={onLocationClickHandler}
          selectedLocationId={selectedLocationId}
          selectedItem={selectedItem}
        />
        <List
          filteredPlants={filteredPlants}
          onItemClickHandler={onItemClickHandler}
          selectedItem={selectedItem}
        />
      </div>
    </div>
  );
}

export default App;
