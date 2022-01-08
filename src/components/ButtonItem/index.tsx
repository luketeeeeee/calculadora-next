import { Container } from "./style";

type ButtonProps = {
  content?: number;
  operator?: string;
  functionality?: string;
}

export function ButtonItem(props: ButtonProps) {
  return (
    <Container>
      {props.content}
    </Container>
  )
}
