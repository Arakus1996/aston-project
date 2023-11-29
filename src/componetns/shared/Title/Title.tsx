import style from './Title.module.css'

type Props = {
  value: string
}
export const Title = ({ value }: Props) => {
  return (
    <div className={style.head}>
      <h2>{value}</h2>
    </div>
  )
}
