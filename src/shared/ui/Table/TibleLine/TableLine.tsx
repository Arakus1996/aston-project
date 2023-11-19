import style from './TableLine.module.css'

type Props = {
  name: string
  values: string
  className?: string
}

export const TableLine = (props: Props) => {
  const value = Array.isArray(props.values)
    ? props.values.map(value => value.name || value.value).join(', ')
    : props.values
  return (
    <>
      {value && (
        <tr>
          <td className={style.table__lineName}>{props.name}</td>
          <td>
            <div className={props.className}>{value}</div>
          </td>
        </tr>
      )}
    </>
  )
}
