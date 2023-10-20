import Button from "@/components/Button/Button"
import Input from "@/components/Input/Input"

export default function Home() {
  return (
    <>
      <div className="bg-black w-screen h-screen text-white">
        oi <p>a</p>
        <p>ex2</p>
        <Button className="flex m-auto" variant="primary">
          Botão
        </Button>
        <Button className="flex m-auto my-1" variant="primary" disabled>
          desabilitado
        </Button>
        <Input placeholder="aaa" className="flex m-auto" />
        <Input className="flex m-auto my-1" placeholder="aaa" multiline />
      </div>
    </>
  )
}
