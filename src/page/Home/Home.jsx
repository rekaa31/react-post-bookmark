import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import Card from '../../components/Card/Card'
import { POST_SERVICE } from '../../services/PostService'
import {addBookmark} from './../../store/actions'

const Home = ({bookmark, addBookmark}) => {

    const [listPost, setListPost] = useState([])

    useEffect(() => {
        POST_SERVICE.getAllPost().then((response) => {
            setListPost(response)
        })
    }, [])

    const onAddtoBookmark = (item) => {
        addBookmark(item)
    }

    return (
        <>
            <div className='row g-3'>

                {listPost.map((item, index) =>
                    <div key={`post-${index}`} className='col-3'>
                        <Card 
                            title={item.title}
                            content={item.body}
                            id={item.id}
                            onClick={() => onAddtoBookmark(item)}
                        />
                    </div>
                )}

            </div>
        </>
    )
}

const mapStatetoProps = (state) => ({
    bookmark : state.bookmark
})

export default connect(mapStatetoProps, {addBookmark})(Home)
