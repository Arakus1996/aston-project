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
          <td>{props.name}</td>
          <td>
            <div className={props.className}>{props.values}</div>
          </td>
        </tr>
      )}
    </>
  )
}
