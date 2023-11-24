import style from './TableLine.module.css'

type Props = {
  name: string
  values?: string
  className?: string
}

export const TableLine = (props: Props) => {
  return (
    <>
      {props.values && (
        <tr>
          <td className={style.table__lineName}>{props.name}</td>
          <td>
            <div className={props.className}>{props.values}</div>
          </td>
        </tr>
      )}
    </>
  )
}
