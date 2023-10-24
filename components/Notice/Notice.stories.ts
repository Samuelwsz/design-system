import { Meta, StoryObj } from "@storybook/react"
import Notice, { NoticeProps } from "./Notice"

const meta: Meta<NoticeProps> = {
  title: "Molecules/Notice",
  component: Notice,
  argTypes: {
    children: {
      type: "string",
    },
    message: {
      type: "string",
    },
    type: {
      type: "string",
    },
    onClose: {
      type: "function",
    },
  },
}

export default meta

export const Success: StoryObj<NoticeProps> = {
  args: {
    type: "success",
    message: "This is an success message",
  },
}

export const Alert: StoryObj<NoticeProps> = {
  args: {
    type: "alert",
    message: "This is an alert message",
  },
}

export const Error: StoryObj<NoticeProps> = {
  args: {
    type: "error",
    message: "This is an error message",
  },
}
