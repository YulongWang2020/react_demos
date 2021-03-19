import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

//check redux state change and call render when changed
// store.subscribe(()=>{
//     ReactDOM.render(
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// })
