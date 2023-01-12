import ReactLogo from '../../assets/icons/logo.svg'
export default function Logo({width = 200,height = 200}){
    return (
        <div className='w-full h-full'>
            <img className='animate-wiggle  ' src={ReactLogo} alt="aaa" width={width} height={height} />
       </div>
    )
}