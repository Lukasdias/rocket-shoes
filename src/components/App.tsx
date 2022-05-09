import { Header } from './Header/index'
import { Description } from './Description/index'
import { Product } from './Product/index'
import { Footer } from './Footer/index'

function App() {
  return (
    <div className="flex overflow-hidden relative flex-col w-screen min-h-screen  lg:max-h-screen">
      <Header />
      <div className="flex flex-col flex-1 lg:flex-row ">
        <Description />
        <Product />
      </div>
      <Footer />
    </div>
  )
}

export default App
