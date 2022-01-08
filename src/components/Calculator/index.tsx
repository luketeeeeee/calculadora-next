import { Buttons } from '../Buttons';
import { Display } from '../Display';
import { Container } from './style';

export function Calculator() {
  return (
      <Container>
        <div className='main-container'>
          <Display />
          <Buttons />
        </div>
      </Container>
  )
}
