import img1 from '../images/ventaja1.jpg'; 
import img2 from '../images/background2.jpeg'; 

const Ventaja = () => {
    return (
        <div className="background">
            <div className="titulo">Ventaja Competitiva</div>
            <div className="texto">
                ¤ Procesos de valor agregado: <br />
                    - Corte a la medida <br />
                    - Corte láser y plasma  <br />
                    - Corte longitudinal <br />
                ¤ Ventaja competitiva: <br />
                    ¿Por qué ERA INTERAMERICANA es tu mejor opción en soluciones de acero? <br />
                        - Contamos con un sólido abastecimiento que adquiere productos siderúrgicos provenientes del estado
                        de las Acerías de última generación (tanto en México, USA y Europa). Trabajamos igual
                        con los principales Centros de Servicio y Procesadores de Acero en México <br />
                        - Siempre estamos abiertos a escuchar sus necesidades y contamos con una amplia
                        experiencia al servicio de los mercados industriales y de distribución <br />
                        - Nuestros tiempos de respuesta son ágiles y es fácil hacer negocios con nosotros <br />
                        - Entendemos la responsabilidad de proporcionar productos que cumplan con los requisitos
                        certificaciones y estándares en un amplio grupo de industrias <br />
                        - Somos altamente competitivos en Servicio y Precio. Contribuimos a bajar
                        su TCO. 
            </div>
            <div className="images">
                <img className="images__image" src={img2} alt="Imágen Ventaja" />
            </div>
        </div>
    )
}

export default Ventaja; 