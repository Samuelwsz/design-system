import Button from "@/components/Button/Button"

export default function Home() {
  return (
    <>
      <div className="bg-black w-screen h-screen text-white">
        oi <p>a</p>
        <p>ex2</p>
        <Button className="flex m-auto">Botão</Button>
        <Button className="flex m-auto my-1" disabled>
          desabilitado
        </Button>
      </div>
    </>
  )
}
