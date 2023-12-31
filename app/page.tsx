import Avatar from "@/components/Avatar/Avatar"
import Box from "@/components/Box/Box"
import Button from "@/components/Button/Button"
import Divider from "@/components/Divider/Divider"
import Input from "@/components/Input/Input"
import Notice from "@/components/Notice/Notice"
import Switch from "@/components/Switch/Switch"
import TextBlock from "@/components/TextBlock/TextBlock"
import TextBlock2 from "@/components/TextBlock2/TextBlock2"
import Typography from "@/components/Typography/Typography"

export default function Home() {
  return (
    <>
      <div className="bg-black w-screen h-screen">
        <p className="text-red-400">a</p>
        <Switch />
        <Avatar size="lg" className="m-auto my-1" />
        <Avatar
          size="lg"
          className="m-auto"
          image="https://placehold.co/400x400.png"
        />
        <Button className="flex m-auto my-1" variant="primary">
          Botão
        </Button>
        <Divider bgColor="light" />
        <Button className="flex m-auto my-1" variant="primary" disabled>
          desabilitado
        </Button>
        <Input placeholder="aaa" className="flex m-auto" />
        <Input className="flex m-auto my-1" placeholder="aaa" multiline />
        <TextBlock title="a" textBlock="aaa" />
        <Divider bgColor="light" className="text-white">
          a
        </Divider>
        <Typography className="text-title3 text-gray-tertiary" element="p">
          aaa
        </Typography>
        <Divider bgColor="light" className="text-white">
          a
        </Divider>
        <Divider bgColor="light" height="h-[5px]" />
        <Box
          type="success"
          border={true}
          rounded={true}
          filledBackground={false}
          className="text-black"
        >
          a<TextBlock2>a</TextBlock2>
        </Box>
        <TextBlock2>a</TextBlock2>
        <Divider bgColor="black" />
        <Notice message="a" type="alert">
          <TextBlock2>a</TextBlock2>
          <Button>a</Button>
        </Notice>
      </div>
    </>
  )
}
