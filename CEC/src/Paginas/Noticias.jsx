import React from 'react';

const Noticias = () => {
    return (
        <div className="container mt-4">
            <h1>Últimas Noticias</h1>
            <p>Aquí podrás acceder a diversas categorías de noticias y artículos relevantes.</p>

            {/* Enlaces a noticias externas */}
            <ul>
                <li>
                    <a
                        href="https://www.infobae.com/politica/2024/11/29/comercio-firmo-un-aumento-salarial-alineado-a-la-pauta-del-gobierno-para-el-ultimo-bimestre-de-2024/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Comercio firmó un aumento salarial alineado a la pauta del gobierno
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.infobae.com/politica/2024/11/29/otro-articulo-de-noticia/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Otro artículo interesante de política
                    </a>
                </li>
                {/* Puedes agregar más artículos de manera similar */}
            </ul>
        </div>
    );
};

export default Noticias;
