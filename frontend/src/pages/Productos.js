import img1 from '../images/products1.jpg'; 
import img2 from '../images/products2.jpg'; 
import img3 from '../images/materiales3.jpeg'; 

const Productos = () => {
    return (
        <div className="background">
            <div className="titulo">Productos</div>
            <div className="texto">Placa y Hoja, de Acero al Carbono Laminado en Caliente, ambas negras
                y en escabeche. <br />
                ¤ Espesor desde 0.074” hasta 1” (más grueso bajo pedido) <br />
                    ¤ Grados de acero de CQ, A36, HSLA 42/50/65/80/100 Rendimiento mínimo <br />
                    ¤ Amplia gama dimensional en anchos y largos. <br />
                ¤ Placa Procesada con destensado utilizando cualquier alternativa del mercado (Temper Pass, Stretch Leveling o e-Drive) <br />
                ¤ Placa de Piso de Acero <br />
                ¤ Procesos de fabricación, de BTS (Burn to Shape) con Plasma y corte por láser, plegadora, perfilado, entre otros <br />
                ¤ Productos de nicho (a la medida de las necesidades del cliente) <br />
            </div>
            <div className="images">
                <img className="images__image" src={img3} alt="Imágen Productos" />
            </div>
        </div>
        
    ); 
}

export default Productos; 