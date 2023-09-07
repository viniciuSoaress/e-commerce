import { ChangeEvent, MouseEventHandler } from "react"


export type HeaderProps = {
  onVisible: MouseEventHandler<HTMLDivElement>,
  onName: (e: ChangeEvent<HTMLInputElement>) => void,
}