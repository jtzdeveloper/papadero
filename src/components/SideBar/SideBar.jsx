export default function SideBar({children}){
    return (
        <div className="lg:col-span-5 xl:col-span-6 flex flex-col ">
            <div className="relative z-10   rounded-xl shadow-xl ring-1 ring-slate-900/5 divide-y divide-slate-100 my-auto xl:mt-18 bg-slate-800 divide-slate-200/5 highlight-white/10">
            {children}
            </div>
        </div>
    )
}