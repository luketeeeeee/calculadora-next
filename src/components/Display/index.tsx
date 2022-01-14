import { Container } from "./style";

type DisplayProps = {
  displayValue: string;
}

export function Display(props: DisplayProps) {
  return (
    <Container className="display">
      {props.displayValue}
    </Container>
  )
}
