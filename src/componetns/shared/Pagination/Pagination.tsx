import { useSearchParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

import style from './Pagination.module.css'

type Props = {
  totalPages: number
  page: number
}

type PageChangeEvent = {
  selected: number
}

export const Pagination = ({ totalPages, page }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const handlePageChange = ({ selected }: PageChangeEvent) => {
    const page = String(selected + 1) || '1'
    searchParams.set('page', page)
    setSearchParams(searchParams)
  }

  return (
    <ReactPaginate
      onPageChange={handlePageChange}
      pageRangeDisplayed={5}
      pageCount={totalPages}
      forcePage={page - 1}
      renderOnZeroPageCount={null}
      previousLabel='Назад'
      nextLabel='Вперед'
      containerClassName={style.wrapper}
      pageClassName={style.button}
      breakClassName={style.button}
      previousClassName={style.button}
      nextClassName={style.button}
      activeLinkClassName={style.active}
      disabledLinkClassName={style.disabled}
    />
  )
}
