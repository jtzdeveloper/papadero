export default function Footer({children}){
    return (
        <footer className="flex 
                            w-full 
                            h-[90px] 
                            justify-center  
                            bg-slate-800">
           { children }
        </footer>
    )
}