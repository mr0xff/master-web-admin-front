import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router";
import Provider from './lib/Provider.tsx';
import ToastContainer from './lib/ToastContainer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <>
        <ToastContainer />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </>
    </Provider>
  </StrictMode>,
)
