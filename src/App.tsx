import { InputText } from './components/inputText/InputText.tsx'
import { InputPassword } from './components/inputPassword/InputPassword.tsx'
import { Textarea } from './components/textarea/Textarea.tsx'
import { Button } from './components/button/Button.tsx'

export const App = () => {
  return (
    <>
      <br />
      <br />
      <InputText placeholder={'Name'} />
      <br />
      <br />
      <InputPassword placeholder={'pass'} />
      <br />
      <br />
      <Textarea>text</Textarea>
      <br />
      <br />
      <Button width={'auto'}>Кнопка</Button>
    </>
  )
}
