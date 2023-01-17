import Navbar from "./Navbar";
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Nprogress from 'nprogress'

const Layout = ({ children }) => {

  const router = useRouter() //usamos y traemos la ruta en la que nos encontramos
  useEffect(() => {//gestuiona y controla lso cambios que se dan en la pag al cargar
    const handleRouteChange = url=> {
      console.log(url);
      Nprogress.start();//inicie la barra de progreso
    };//usar la funcion para tomar la url

    router.events.on('routeChangeStart', handleRouteChange);//accedemos y usamos el valor de la funcion

    router.events.on('routeChangeComplete', ()=> Nprogress.done());//estoe s para que muestre la animacion de carga de la barra de progreso
    return () =>{
      router.events.off('routeChangeStart',handleRouteChange)//desactiva el escucha para que no se replique el llamado de las funciones
    }
  },[])
  
   
  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>

      <footer className="bg-dark text-light text-center">
        <div className="container p-4">
          <p>&copy; Ryan Ray Portfolio</p>
          <p>200 - {new Date().getFullYear()}</p>
          <p>All rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
