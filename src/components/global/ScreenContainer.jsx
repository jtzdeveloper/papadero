export default function ScreenContainer({ children }){
    return (
        <section className="flex  flex-col lg:flex-row gap-5 ">
            { children }
        </section>
    )
}