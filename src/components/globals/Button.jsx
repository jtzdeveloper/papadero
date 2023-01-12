export default function  Button({children,eventClick}){
    return (
        <a  className=" text-white bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm cursor-pointer text-sm px-5 py-2.5 text-center " 
            onClick={()=> eventClick()}>{ children }</a>
    )
}