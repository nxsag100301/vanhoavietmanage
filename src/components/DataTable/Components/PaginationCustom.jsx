import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

const PaginationCustom = () => {
  const paginationData = {
    totalItems: 100,
    page: 1, // Trang hiện tại
    itemsPerPage: 6,
    totalPages: Math.ceil(100 / 6)
  }

  const pageNumbers = [1, 2, 3, '...', 8, 9, 10] // fake tạm

  return (
    <Pagination className='py-3 2xl:py-4 mt-1 border-t border-grayneutral-100'>
      <PaginationContent className='justify-between w-full'>
        <PaginationItem>
          <PaginationPrevious href='#' />
        </PaginationItem>

        <div className='flex items-center gap-1'>
          {pageNumbers.map((num, index) => (
            <PaginationItem key={index}>
              {num === '...' ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  href='#'
                  isActive={paginationData.page === num}
                  className={`h-8 w-8 2xl:h-10 2xl:w-10 p-0 rounded-[8px] bg-white
                    text-tagline-semibold 2xl:text-body2-medium ${
                      paginationData.page !== num
                        ? '!text-text-500 text-tagline-semibold 2xl:text-body2-medium hover:bg-grayneutral-200'
                        : 'shadow-md'
                    }`}
                >
                  {num}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
        </div>

        <PaginationItem>
          <PaginationNext href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationCustom
