import React from 'react'

const CardRepositoriesUser = ({ id, nome, linguagem, link }) => {
    return (
        <div className="card w-80 bg-base-100 shadow-xl mx-auto mb-10" key={id}>
            <div className="card-body">
                <h2 className="card-title">{nome}</h2>
                <p className='flex'>Linguagem utilizada: {linguagem === null ? (
                    <span className='ml-1 font-bold'>Não definida</span>
                ) : (
                    <span className='ml-1 font-bold'>{linguagem}</span>
                )}</p>
                <div className="card-actions justify-start mt-2">
                    <a href={link} target='_blank'>
                        <button className="btn">
                            <i className="fa-brands fa-github "></i>
                            Acessar repositório
                        </button>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default CardRepositoriesUser