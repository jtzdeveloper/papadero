import success from '../../assets/icons/success.png'

export default function ScreenResult({ response }){
    return (
        <section className="flex fadeIntOut flex-col rounded-xl h-screen w-full  bg-green-600">
             <section className="flex h-2/3 justify-between items-center w-full  text-3xl text-white p-10">La order Nº {response.id} ha sido creada exitosamente </section>
            <section className='flex justify-center items-center'>
            <img width={96} height={96} src={success} alt="" />
            </section>
        </section>
    )
}