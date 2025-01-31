import React from 'react'

const commentsData = [
    {
        name: "Alice",
        text: "This is the first comment.",
        replies: [
            {
                name: "Bob",
                text: "Replying to Alice.",
                replies: [
                    {
                        name: "Charlie",
                        text: "Replying to Bob.",
                        replies: []
                    },
                    {
                        name: "David",
                        text: "Another reply to Bob.",
                        replies: [
                            {
                                name: "Eve",
                                text: "Replying to David.",
                                replies: []
                            }
                        ]
                    }
                ]
            },
            {
                name: "Frank",
                text: "Another reply to Alice.",
                replies: []
            }
        ]
    },
    {
        name: "Grace",
        text: "This is a second top-level comment.",
        replies: [
            {
                name: "Hannah",
                text: "Replying to Grace.",
                replies: [
                    {
                        name: "Isaac",
                        text: "Replying to Hannah.",
                        replies: []
                    }
                ]
            }
        ]
    }
];


const Comment = ({data}) => {
    const { name , text, replies} = data;
    return ( <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg'>
        <img
            className='w-8 h-8' 
            alt='user' 
            src='https://png.pngitem.com/pimgs/s/508-5087236_tab-profile-f-user-icon-white-fill-hd.png' 
            
        />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
)}

const CommentsList = ({comments}) => {
    // Disclaimer: Don't use indexes as keys
    return comments.map((comment,index) => (
        <div key={index}>
            <Comment  data={comment}/>
            <div className='pl-5 border border-l-black ml-5'>
                <CommentsList comments={comment.replies}/>
            </div>
        </div>
    ))
}

const CommentsContainer = () => {
  return (
    <div className='m-2 p-2'>
        <h1 className='font-bold text-2xl'>Comments: </h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
