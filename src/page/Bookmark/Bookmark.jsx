import React from 'react'
import { connect } from 'react-redux'
import Card from '../../components/Card/Card'
// Import Action
import { removeBookmark } from '../../store/actions'

const Bookmark = ({listBookmark, removeBookmark}) => {

    const onRemoveBookmark = (item) => {
        removeBookmark(item)
    }

    return (
        <div className='row g-3'>

            {listBookmark.map((item, index) =>
                <div key={`post-${index}`} className='col-3'>
                    <Card
                        title={item.title}
                        content={item.body}
                        id={item.id}
                        onClick={() => onRemoveBookmark(item)}
                    />
                </div>
            )}


        </div>
    )
}

const mapStatetoProps = (state) => ({
    listBookmark : state.bookmark
})

// Tambahkan pada paramater connect object dengan nama action
export default connect(mapStatetoProps, {removeBookmark})(Bookmark)
