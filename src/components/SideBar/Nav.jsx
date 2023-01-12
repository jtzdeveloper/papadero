export default function Nav({ children,isVisible = true }){
    return(
        <nav className={`py-4 px-6 text-sm font-medium print:hidden ${ !isVisible ? 'hidden' : '' }`}>
            <ul className="flex space-x-3">
                {children}
            </ul>
        </nav>
    )
}