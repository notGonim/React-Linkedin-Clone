import React from 'react'
import CreateIcon from '@material-ui/icons/Create';
import './feed.css'
import { InputOption } from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { Post } from '../posts/Post';

export const Feed = () => {
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text" name="" id="" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="#70B5f9" />
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
                    <InputOption title="Write article" Icon={CalendarViewDayIcon} color="#7FC15E" />
                </div>
            </div>
            <Post name="mahnmoud Ghonamie"

                description="just a test" message="well message works"
            />

        </div>
    )
}
