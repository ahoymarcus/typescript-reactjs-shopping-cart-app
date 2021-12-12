import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

//import './index.css';
import App from './App';



const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>  
		<App />
	</QueryClientProvider>,
  document.getElementById('root')
);


