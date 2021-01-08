import React, { forwardRef } from 'react'
import './post.css'
import Avatar from '@material-ui/core/Avatar';
import { InputOption } from '../feed/InputOption';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import SendIcon from '@material-ui/icons/Send';
import ShareIcon from '@material-ui/icons/Share';

export const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {


    return (
        <div ref={ref} className="post">
            <div className="post_header">
                <Avatar src={photoUrl} > X </Avatar>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>
            <div className="post_buttons">
                <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
                <InputOption Icon={ChatIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareIcon} title="Share" color="gray" />
                <InputOption Icon={SendIcon} title="Send" color="gray" />
            </div>
        </div>
    )
})
