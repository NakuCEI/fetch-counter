import { useCounter, useFetch } from '../hooks';
import NewCard from "./NewCard";
const loadingImg = '../../img/loading-gif.gif';

export const News = () => {

    const {counter, handlePrevious, handleNext} = useCounter(1);
    const {data, isLoading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${counter}`);

    return (
        <div className='w-100'>
            <h1 className='text-center'>Noticia {counter}</h1>

            
            <div className='w-100 d-flex justify-content-between'>
                <button 
                    className='btn btn-dark' 
                    disabled={counter <= 1} 
                    onClick={handlePrevious}
                >
                    Anterior
                </button>
                <button 
                    className='btn btn-dark' 
                    disabled={counter >= 100} 
                    onClick={handleNext}
                >
                    Siguiente
                </button>
            </div>
            <div className='w-100 mt-4'>
                {
                    (isLoading) ? 
                        (
                            <div className="d-flex justify-content-center">
                                <img src={loadingImg} alt='Loading' />
                            </div>
                        ) 
                        : (
                            <div className="d-flex justify-content-center">
                                <NewCard data={data} />
                            </div>
                        )
                }
            </div>
        </div>
    )
}
