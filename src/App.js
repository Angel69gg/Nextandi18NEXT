import './App.css';
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function App() {
  const [t, i18n] = useTranslation("global")
  const [count, setCount] = useState(0)
  return (
    <div className=''>
      <nav className="bg-gray-700 border-black px-2 sm:px-4 py-2.5 rounded-b-xl dark:bg-gray-900 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className='flex w-96 justify-around'>
            <div className='hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
              {t("navbar.inicio")}
            </div>
            <div onClick={() => { i18n.changeLanguage("en") }} className='hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
              {t("navbar.ingles")}
            </div>
            <div onClick={() => { i18n.changeLanguage("es") }} className='hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
              {t("navbar.espanol")}
            </div>

          </div>
          <div className='flex justify-end'>
            <div className='mx-5 hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
              LINKEDIN
            </div>
            <div className='mx-5 hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
              TWITTER
            </div>
          </div>
        </div>
      </nav>

      <div className='w-2/4' >
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2 className='text-4xl text-white font-extrabold'>Angel Manuel Gamboa Rodriguez</h2>
        <br></br>
        <p className='text-xl  text-gray-400'>{t("body.descripcion")}</p>
        <br></br>
        <br></br>
        <button  onClick={()=>{setCount(count + 1)}} class="bg-green-500 hover:bg-green-700 text-white font-bold py-5 px-12 border border-green-700 rounded">
        {t("body.contador")}
        </button>
        <p className=' text-white'>{t("body.contador2")}: {count}</p>
        <br></br>
        <p className='text-xl  text-gray-300'>{t("body.DescripcionTecnologias")}</p>
        <br></br>
        <p className='text-xl text-white'>{t("body.tecnologias")}</p>
      </div>
      <div className='flex justify-end pb-6 align-item-center'>
        <img className='rounded-full w-69 h-69 ' src="https://avatars.githubusercontent.com/u/75049486?s=400&u=d8b48a9b9951d7a84b6d55e5ba9ef56c64891329&v=4" />
      </div>


    </div>

  );
}

export default App;
