import React, { useEffect, useState } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import './feed.css'
import { InputOption } from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { Post } from '../posts/Post';
import { db } from '../firebase';
import firebase from 'firebase'

export const Feed = () => {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map((doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            ))))

        })
        setInput('')
    }, [])
    const sendPost = e => {
        e.preventDefault()
        db.collection("posts").add(
            {
                name: 'mah gonim',
                description: 'just a test',
                message: input,
                photoUrl: '',
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
        )
    }


    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)}
                            name="" id="" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="#70B5f9" />
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
                    <InputOption title="Write article" Icon={CalendarViewDayIcon} color="#7FC15E" />
                </div>
            </div>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post key={id} name={name} description={description}
                    message={message} photoUrl={photoUrl} />
            ))}

        </div>
    )
}
