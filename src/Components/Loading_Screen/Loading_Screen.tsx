
import Spline from '@splinetool/react-spline'
import Loader from './Loader.js'

const Loading_Screen = () => {
  return (
    <div
  className="relative w-screen h-screen overflow-hidden flex items-center justify-center"
  style={{
    backgroundImage:
      'radial-gradient(circle at center, #ffffff10,rgb(24, 21, 21) 60%, #000000 100%)',
  }}
>
  {/* Spline Centered & Responsive */}
  
<>


  <div className=" z-10 w-[30rem] h-[30rem] md:hidden rounded-full">
        <Spline scene="https://prod.spline.design/FAYva7ouHU3dnKkk/scene.splinecode" />
      </div>
      <div className=" z-10 hidden md:flex lg:hidden w-[35rem] h-[35rem] rounded-full">
        <Spline scene="https://prod.spline.design/bTd7a7uwXV7oNLeP/scene.splinecode" />
      </div>

      <div className=" z-10 hidden lg:flex w-[40rem] h-[40rem] rounded-full">
        <Spline scene="https://prod.spline.design/fJq3EtxCTkPxTmlN/scene.splinecode" />
      </div>
</>
  
{/*   
  <div className="absolute z-10 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] rounded-full">
    <Spline scene="https://prod.spline.design/fJq3EtxCTkPxTmlN/scene.splinecode" />
  </div> */}

  {/* Loader Positioned Below Spline */}
  <div className="absolute z-20 mt-[28rem] md:mt-[38rem]">
    <Loader />
  </div>
</div>

  )
}

export default Loading_Screen
