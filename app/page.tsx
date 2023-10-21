import Button from "@/components/Button/Button"
import Input from "@/components/Input/Input"
import TextBlock from "@/components/TextBlock/TextBlock"
import Typography from "@/components/Typography/Typography"

export default function Home() {
  return (
    <>
      <div className="bg-black w-screen h-screen">
        <p className="text-red-400">a</p>
        <Button className="flex m-auto" variant="primary">
          Botão
        </Button>
        <Button className="flex m-auto my-1" variant="primary" disabled>
          desabilitado
        </Button>
        <Input placeholder="aaa" className="flex m-auto" />
        <Input className="flex m-auto my-1" placeholder="aaa" multiline />
        <TextBlock title="a" textBlock="aaa" />
        <Typography className="text-title3 text-gray-tertiary" element="p">
          aaa
        </Typography>
      </div>
    </>
  )
}
