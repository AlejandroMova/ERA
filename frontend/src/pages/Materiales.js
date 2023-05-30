import img2 from '../images/materiales2.jpeg'; 
import img3 from '../images/materiales3.jpeg'; 
import img4 from '../images/materiales4.jpeg'; 

const Materiales = () => {
    return (
        <div className="background">
            <div className="titulo">Materiales</div>
            <div className="texto">
                Mineria y movimiento de materiales: <br />
                    Diseñado para cumplir con los más duros
                    movimientos de materiales, manejos
                    y procesamientos, nuestras soluciones en acero 
                    se basan en productos
                    que cumplirán y superarán
                    las necesidades de su negocio.
                    <br /> <br />
                    Desde las placas hasta los
                    componentes específicos, utilizamos
                    materiales de los mejores
                    fabricantes de acero en el mundo que
                    entregará la abrasión y
                    resistencia necesaria para su necesidad. Desde AR200,
                    AR400, AR450, AR500 y
                    más allá. Nuestros productos
                    ofrecer un rendimiento excelente
                    y una vida útil muy larga.
                <br /> <br />
                Creación de bloques de concreto: <br />
                    Suministro de paletas de acero de repuesto para las máquinas de fabricación de bloques y ladrillos de hormigón
                    Disponible en todos los tamaños que demanda la capacidad instalada de máquinas en el mercado: <br />
                    Espesor: ¼”, 5/16”, 3/8”, 7/16”, ½” y 9/16” <br />
                    Anchos: 13” hasta 28” <br />
                    Largos: 18” hasta 55” <br />
                    Paletas de acero de alta calidad, cortadas con láser, desbarbadas
                    para un manejo seguro, con estricto cumplimiento
                    a las especificaciones OEM, incluidas las tolerancias dimensionales.
            </div>
            <div className="images">
                <img src={img2} alt="Imágen Materiales" className="images__image" />
                <img src={img3} alt="Imágen Materiales" className="images__image" />
                <img src={img4} alt="Imágen Materiales" className="images__image" />
            </div>
        </div>
    )
}

export default Materiales; 