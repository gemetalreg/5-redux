import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { UserProvider } from './context/name.context.tsx'
import { BrowserRouter } from 'react-router'
import { store, persistor } from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <UserProvider>
          <App />
    </UserProvider>
    </PersistGate>
  </Provider>
    </BrowserRouter>
  </StrictMode>,
)
