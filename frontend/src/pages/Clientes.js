import img3 from '../images/background3.jpeg'; 
import img1 from '../images/clientes1.jpg'; 
const Clientes = () => {
    return (
        <div className="background">
            <div className="titulo">Clientes / Mercados</div>
            <div className="texto">
            Con participación en una amplia gama de segmentos de mercado, en su mayoría
            centrado en Acero al Carbono, hemos desarrollado
            soluciones específicas y experiencia adquirida en ciertos mercados 
            nichos. Estas son las soluciones de acero para: <br />
            ¤ Aplicaciones de resistencia a la abrasión <br />
            ¤ Manejo y Mudanza de Materiales <br />
            ¤ Revestimientos para volquetes, cangilones, revestimientos para tolvas de transferencia de materiales y Tolvas <br />
            ¤ Aplicaciones mineras <br />
            ¤ Piezas de desgaste, componentes de transportadores, revestimientos de camiones mineros <br />
            ¤ Máquinas para fabricar bloques y ladrillos de hormigón <br />
            </div>
            <div className="images">
                <img className="images__image" src={img3} alt="Imágen clientes" />
            </div>
        </div>
    );
}



export default Clientes; 