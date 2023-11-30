import style from './NoDataInfo.module.css'

type Props = {
  value: string
}
export const NoDataComponent = ({ value }: Props) => {
  return (
    <div className={style.nodataBlock}>
      <h1>{value}</h1>
    </div>
  )
}
