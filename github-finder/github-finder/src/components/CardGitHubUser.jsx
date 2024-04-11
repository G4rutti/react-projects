import React from 'react'

const cardGitHubUser = ({ avatar, nome, login, seguidores, seguindo, biografia ,repos }) => {

    return (
        <div className="w-80 py-6 m-auto data flex flex-col justify-center items-center border border-gray-700 rounded-md">
            <div className="avatar">
                <div className="w-24 rounded">
                    <img src={avatar} />
                </div>
            </div>
            <div className='mt-2 flex flex-col items-center w-72'>
                {nome === null ? (
                    <h2 className='text-gray-400 font-black text-l uppercase'>{login}</h2>
                ) : (
                    <h2 className='text-gray-400 font-black text-l uppercase'>{nome}</h2>
                )}
                <div className='text-center text-gray-500'>
                    {biografia}
                </div>
            </div>
            <div className='mt-2'>
                <div className='flex'>
                    <div className='mx-2'>
                        <i className="fa-solid fa-users"></i>
                    </div>
                    <div className='mr-1'>
                        <p><span className='font-bold'>{seguindo}</span> seguidores |</p>
                    </div>
                    <div>
                        <p><span className='font-bold'>{seguidores}</span> seguindo</p>
                    </div>
                </div>
            </div>
            <div className="mt-1 w-72 ">
                <div className="flex justify-center">
                    <div className='mr-2'>
                        <i className="fa-solid fa-box-archive"></i>
                    </div>
                    <div>
                        <p><span className='font-bold'>{repos}</span> repositórios públicos.</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default cardGitHubUser