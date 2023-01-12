import Loading from './Loading'

export default function ScreenLoading({ children,text='' }){
    return (
        <section className='h-2/3  flex justify-center animate-fade items-center'>
            <Loading text={text} />
        </section>
        
        
    )
}