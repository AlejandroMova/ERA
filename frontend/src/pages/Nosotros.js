import img1 from '../images/background1.jpeg'; 
import img2 from '../images/background2.jpeg'; 


const Nosotros = () => {
    return (
        <div className="background">
                <div className="titulo">Sobre Nosotros</div>
                <div className="texto">
                    Somos una compañía con vasta experiencia acumulada durante más de 30 años en
                    toda la cadena de valor de los productos siderúrgicos, desde la siderurgia, hasta
                    el camino y los procesos de fabricación y valor agregado, nuestra
                    empresa se ha comprometido desde el concepto, hasta el final
                    entrega y soporte post-venta de soluciones competitivas que son
                    fáciles y proporcionan a nuestros clientes ventajas operacionales y de costo. 
                    
                    Estamos convencidos de que todo lo que hacemos tiene que ser correctamente
                    alineado y cada detalle es tomado en consideración. Por
                    eso nuestro compromiso es encontrar la solución adecuada para las necesidades de nuestros clientes, nos aseguramos de que se entregue a tiempo,
                    que cumpla con los estándares de calidad adecuados y que obtenga
                    precios competitivos que nos permiten crear relaciones exitosas a largo plazo. 
                </div>
                <div className="images">
                    <img src={img1} alt="Imágen nosotros" className="images__image" />
                    <img src={img2} alt="Imágen nosotros" className="images__image" />
                </div>
        </div>
    )
}

export default Nosotros; 