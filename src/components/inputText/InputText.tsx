import { ChangeEvent, DetailedHTMLProps, forwardRef, InputHTMLAttributes, KeyboardEvent } from 'react'
import styles from './InputText.module.scss'

type DefaultInputTextPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputTextPropsType = DefaultInputTextPropsType & {
  fieldName?: string
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: string
  spanClassName?: string
}

type Ref = HTMLInputElement

export const InputText = forwardRef<Ref, InputTextPropsType>(
  ({ fieldName, onChange, onChangeText, onKeyDown, onEnter, error, className, spanClassName, ...restProps }, ref) => {
    InputText.displayName = 'InputText'

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e)
      onChangeText && onChangeText(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      onKeyDown && onKeyDown(e)
      onEnter && e.key === 'Enter' && onEnter()
    }

    const finalSpanClassName = `${styles.error} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${styles.inputText} ${error && styles.errorInput} ${className}`

    return (
      <>
        <label className={`${styles.inputContainer} ${finalInputClassName}`}>
          {fieldName && <span className={styles.fieldName}>{fieldName}</span>}
          <input ref={ref} type={'text'} onChange={onChangeHandler} onKeyDown={onKeyPressHandler} {...restProps} />
          {error && <span className={finalSpanClassName}>{error}</span>}
        </label>
      </>
    )
  }
)
