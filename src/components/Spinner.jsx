import { LoaderIcon } from '../icons'

export default function Spinner() {
    return (
        <>
        <div className='fixed insert-0 bg-black opacity-20 z-40'></div>
        <div className='fixed insert-0 z-50'>
            <div className='flex item-center justify-center min-h-full'>
                <LoaderIcon className="fill-orange-400 animate-spin" />
            </div>
        </div>
        </>
    )
}