import ScreenScroll from "./ScreenScroll"
import Loading from "./Loading"
export default function Screen({ children,loading,title,typeScroll,height='',showTitleBar = true,justify}){
    return (
        <section className={`w-full ${ height }  flex-col flex justify-center `}>
            <section className={`${!showTitleBar ? 'hidden' : '' } p-4 w-full rounded-t-xl border border-gray-600 bg-gray-800 text-white font-extrabold`}>{ title }</section>
            <ScreenScroll justify={justify} height={height} loading={loading} typeScroll={typeScroll}>
                { loading ? <Loading /> : children }
            </ScreenScroll>
        </section>
    )
}