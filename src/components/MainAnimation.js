import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import { extend, Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { easing } from 'maath'
import '../styles/Home.css'
// import { useControls } from 'leva'

extend({ MeshLineGeometry, MeshLineMaterial })

export default function MainAnimation() {

  return (
    <div style={{height:"80vh",width:"100vw",cursor:"crosshair"}}>
      <div style={{position:"absolute",top:"30vh",left:"50%",transform:"translate(-50%, 0)",color:"white",zIndex:"5"}} className='mt-10 sm:mt-10'>
        {/* <span style={{fontSize:"8vw"}}>IEEE SPIT</span> */}

        <img src={require("../images/ieee_logo.png")}  style={{width:"30vh"}} alt='IEEE Logo'/>
        <div className='typewriter mt-4'>
        <h1 className=''>IEEE SPIT</h1>
        </div>
      </div>


    <Canvas gl={{alpha:false}} camera={{ position: [0, 0, 5], fov: 90 }} style={{position:"fixed",zIndex:"-6",}}>
      <color attach="background" args={['#101020']} />
      {/*[10, 0.5, 2], [1, 2, 10], '#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff']} */}
      <Lines dash={0.99} count={27} radius={97} colors={[ '#05598D', '#E4F1F4', '#0E7CB5', '#059CD9']} />
      <Rig />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.6} />
      </EffectComposer>
    </Canvas>
    </div>
  )
}

function Lines({ dash, count, colors, radius = 50, rand = THREE.MathUtils.randFloatSpread }) {
  const lines = useMemo(() => {
    return Array.from({ length: count }, () => {
      const pos = new THREE.Vector3(rand(radius), rand(radius), rand(radius))
      const points = Array.from({ length: 15 }, () => pos.add(new THREE.Vector3(rand(radius), rand(radius), rand(radius))).clone())
      const curve = new THREE.CatmullRomCurve3(points).getPoints(200)
      return {
        color: colors[parseInt(colors.length * Math.random())],
        // width: Math.max(radius / 100, (radius / 50) * Math.random()),
        width: 0.51,
        speed: Math.max(0.1, 1 * Math.random()),
        curve: curve.flatMap((point) => point.toArray())
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors, count, radius])
  return lines.map((props, index) => <Fatline key={index} dash={dash} {...props} />)
}

function Fatline({ curve, width, color, speed, dash }) {
  const ref = useRef()
  useFrame((state, delta) => (ref.current.material.dashOffset -= (delta * speed) / 10))
  return (
    <mesh ref={ref}>
      <meshLineGeometry points={curve} />
      <meshLineMaterial transparent lineWidth={width} color={color} depthWrite={false} dashArray={0.20} dashRatio={dash} toneMapped={false} />
    </mesh>
  )
}

function Rig({ radius = 20 }) {
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, [Math.sin(state.pointer.x) * radius, Math.atan(state.pointer.y) * radius, Math.cos(state.pointer.x) * radius], 0.25, dt)
    state.camera.lookAt(0, 0, 0)
  })
}
