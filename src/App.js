import React from 'react'
//Components
import FiltersComponent from './components/FiltersComponent'
import ProductCardComponent from './components/ProductCardComponent'
//Redux 
import { Provider } from 'react-redux'
import store from './redux/store'
//Styled
import MainWrapper from './styled/WrapperStyledComponent'

function App() {
  return (
    <Provider store={store}>
    <MainWrapper>
      <FiltersComponent></FiltersComponent>
      <ProductCardComponent></ProductCardComponent>
    </MainWrapper>
    </Provider>
  );
}
export default App;
