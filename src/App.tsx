import { InputText } from './components/inputText/InputText.tsx'
import { InputPassword } from './components/inputPassword/InputPassword.tsx'
import { Textarea } from './components/textarea/Textarea.tsx'

export const App = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <p>
        <InputText placeholder={'Name'} />
      </p>
      <br />
      <br />
      <br />
      <InputPassword placeholder={'pass'} />
      <br />
      <br />
      <br />
      <Textarea>text</Textarea>
    </>
  )
}
