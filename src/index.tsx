import './polyfills'
import ReactDOM from 'react-dom/client'
import 'typeface-roboto'

import 'index.sass'
import Bootstrap from 'Bootstrap'
import reportWebVitals from 'reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<Bootstrap />)

reportWebVitals()
