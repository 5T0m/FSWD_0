

const Filter = ({ newFilter, handleFilterChange,handleFilterFocus }) => {
    return (
        <div>
            filter shown with <input value={newFilter} onChange={handleFilterChange} onFocus={handleFilterFocus} />
        </div>
    )
    }

export default Filter