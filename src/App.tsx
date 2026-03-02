import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Info from './Info'
import Data from './Data'

const App = () => {
  return (
    <div className={'wrapper'}>
      <div className={'main'}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-sm-5 info'}>
              <Info />
            </div>
            <div className={'col-sm-7 form'}>
              <Data />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
