import success from '../../assets/icons/success.png'

export default function ScreenResponse({children,type}){
    const colorResponse = type === 'success' ? 'bg-green-600' : 'bg-red-300'
    return (
        <section className={`flex flex-col rounded-xl h-screen w-full ${ colorResponse }`}>
            <section className="flex h-2/3 justify-between items-center w-full  text-3xl text-white p-10">{ children }</section>
            <section className='flex justify-center items-center'>
            <img width={96} height={96} src={success} alt="" />
        </section>
    </section>
    )
}