import { Meta, StoryObj } from "@storybook/react"
import Button, { ButtonProps } from "./Button"

const meta: Meta<ButtonProps> = {
  title: "/Design System/Molecules/Button",
  // tags: ["autodocs"],
  component: Button,
  argTypes: {
    children: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
    className: {
      type: "string",
    },
    onClick: {
      action: "clicked",
    },
  },
}

export default meta

/* Código suprimido */

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    variant: "primary",
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    variant: "primary",
    disabled: true,
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    variant: "secondary",
  },
}

export const SecondaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    variant: "secondary",
    disabled: true,
  },
}

export const Violet: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    className: "theme-violet",
    variant: "primary",
  },
}

export const VioletSecondary: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    className: "theme-violet",
    variant: "secondary",
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    variant: "tertiary",
  },
}

export const TertiaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    variant: "tertiary",
    disabled: true,
  },
}

export const VioletTertiary: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    className: "theme-violet",
    variant: "tertiary",
  },
}
