import { ChangeEvent, DetailedHTMLProps, forwardRef, InputHTMLAttributes, KeyboardEvent, useState } from 'react'
import styles from './InputPassword.module.scss'

type DefaultInputPasswordPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputPasswordPropsType = DefaultInputPasswordPropsType & {
  fieldName?: string
  onChangePassword?: (value: string) => void
  onEnter?: () => void
  error?: string
  spanClassName?: string
}

type Ref = HTMLInputElement

export const InputPassword = forwardRef<Ref, InputPasswordPropsType>(
  (
    { fieldName, onChange, onChangePassword, onKeyDown, onEnter, error, className, spanClassName, ...restProps },
    ref
  ) => {
    InputPassword.displayName = 'InputText'

    const [showPass, setShowPass] = useState(false)

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e)
      onChangePassword && onChangePassword(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
      onKeyDown && onKeyDown(e)
      onEnter && e.key === 'Enter' && onEnter()
    }

    const finalSpanClassName = `${styles.error} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${styles.inputPassword} ${error && styles.errorInput} ${className}`

    return (
      <>
        <label className={`${styles.inputContainer} ${finalInputClassName}`}>
          {fieldName && <span className={styles.fieldName}>{fieldName}</span>}
          <input
            ref={ref}
            type={showPass ? 'text' : 'password'}
            onChange={onChangeCallback}
            onKeyDown={onKeyPressCallback}
            {...restProps}
          />
          <span className={styles.icon} onClick={() => setShowPass(!showPass)}>
            {showPass ? '@' : '#'}
          </span>
          {error && <span className={finalSpanClassName}>{error}</span>}
        </label>
      </>
    )
  }
)
